
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { ActionType } from './sign-in.action';
import { ActionType as AuthenticationActionType} from '../../authentication/authentication.action';
import { ISignInPayload } from './sign-in.model';

@Injectable()
export class SignInEffects {
    constructor(private actions$: Actions) {
    }

    @Effect()
    public trySignIn$ = this.actions$
        .ofType(ActionType.TRY_SIGN_IN)
        .map(action => action.payload as ISignInPayload)
        .filter(credentials => !!credentials)
        .distinctUntilChanged()
        .map(credentials => { return {type: AuthenticationActionType.TRY_SIGN_IN, payload: credentials}; });
}
