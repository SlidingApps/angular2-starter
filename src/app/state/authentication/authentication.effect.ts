
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, Effect } from '@ngrx/effects';

import { AuthenticationService } from '../../service/service.module';
import { ActionType } from './authentication.action';
import { ISignInPayload } from '../account/sign-in/sign-in.model';

@Injectable()
export class AuthenticationEffects {
    constructor(private authenticationService: AuthenticationService, private actions$: Actions) { }

    @Effect()
    public trySignIn$ = this.actions$
        .ofType(ActionType.TRY_SIGN_IN)
        .map(action => action.payload as ISignInPayload)
        .filter(credentials => !!credentials)
        .distinctUntilChanged()

        .switchMap(credentials =>
            this.authenticationService.signIn(credentials.username, credentials.password)
                .map(response => {
                    if (response.isValid) {
                        return {type: ActionType.SIGN_IN_SUCCESS, payload: { id: response.id, username: response.username } };
                    } else {
                        return {type: ActionType.SIGN_IN_FAIL};
                    }
                })
                .catch(() => Observable.of({type: ActionType.SIGN_IN_FAIL}))
        );

    @Effect()
    public signInSuccess$ = this.actions$
        .ofType(ActionType.SIGN_IN_SUCCESS)
        .map(action => action.payload as ISignInPayload)
        .filter(userinfo => !!userinfo && !!userinfo.username)
        .distinctUntilChanged()
        .map(userinfo => {
            return userinfo;
        });
}
