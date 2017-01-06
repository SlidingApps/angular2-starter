
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, Effect } from '@ngrx/effects';

import { AuthorizationService, ReadModelService, WriteModelService } from '../../../service/service.module';
import { ActionType } from './get-started.action';
import { IUpdatePayload, ISignUpPayload } from './get-started.model';

@Injectable()
export class GetStartedEffects {
    constructor(private authorizationService: AuthorizationService, private readService: ReadModelService, private writeService: WriteModelService, private actions$: Actions) {
    }

    @Effect()
    public update$ = this.actions$
    // Pick an action.
        .ofType(ActionType.UPDATE)

        // Map the payload into JSON to use as the request body
        .map(action => action.payload as IUpdatePayload)
        .map(payload => payload.tenant.code)
        .filter(tenant => !!tenant)
        .distinctUntilChanged()

        .switchMap(tenant =>
            // Observable.create(observer => setTimeout(() => observer.next({type: ActionType.TENANT_NAME_NOT_AVAILABLE}), 1000))
            this.readService.tenant.getTenantCodeAvailability(tenant)

                // If successful, dispatch success action with result
                .map(response => {
                    if (response.isAvailable) {
                        return {type: ActionType.TENANT_NAME_AVAILABLE};
                    } else {
                        return {type: ActionType.TENANT_NAME_NOT_AVAILABLE};
                    }
                })

                // If request fails, dispatch failed action
                .catch(() => Observable.of({type: ActionType.TENANT_NAME_NOT_AVAILABLE}))
        );

    @Effect()
    public trySignUp$ = this.actions$
        .ofType(ActionType.TRY_SIGN_UP)
        .map(action => action.payload as ISignUpPayload)
        .switchMap(signUp =>
            this.writeService.tenant.postCreateTenant({
                code: signUp.tenant.code,
                name: signUp.tenant.code,
                description: signUp.tenant.code,
                userName: signUp.user.username,
                userPassword: signUp.user.password
            })
                .map(() => {
                    return {type: ActionType.SIGN_UP_SUCCESS};
                })

                // If request fails, dispatch failed action
                .catch(() => Observable.of({type: ActionType.SIGN_UP_FAILED}))
        );
}
