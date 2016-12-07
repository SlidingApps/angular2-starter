
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, Effect } from '@ngrx/effects';

import { ReadModelService } from '../../../service/service.module';
import { ActionType, IUpdateOrganizationPayload } from './get-started.action';

@Injectable()
export class GetStartedEffects {
    constructor(private readService: ReadModelService,
                private actions$: Actions) {
    }

    @Effect()
    public login$ = this.actions$
    // Pick an action.
        .ofType(ActionType.UPDATE)

        // Map the payload into JSON to use as the request body
        .map(action => action.payload as IUpdateOrganizationPayload)
        .map(payload => payload.organization)
        .filter(organization => !!organization)
        .distinctUntilChanged()

        .switchMap(organization =>
            // Observable.create(observer => setTimeout(() => observer.next({type: ActionType.ORGANIZATION_NOT_AVAILABLE}), 1000))
            this.readService.tenant.getTenantCodeAvailability(organization)

                // If successful, dispatch success action with result
                .map(response => {
                    if (response.isAvailable) {
                        return {type: ActionType.ORGANIZATION_AVAILABLE};
                    } else {
                        return {type: ActionType.ORGANIZATION_NOT_AVAILABLE};
                    }
                })

                // If request fails, dispatch failed action
                .catch(() => Observable.of({type: ActionType.ORGANIZATION_NOT_AVAILABLE}))
        );
}
