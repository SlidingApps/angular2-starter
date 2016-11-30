
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Actions, Effect } from '@ngrx/effects';

import { ActionType } from './get-started.action';
import { ModelState } from './get-started.reducer';

@Injectable()
export class GetStartedEffects {
    constructor(private http: Http,
                private actions$: Actions) {
    }

    @Effect()
    public login$ = this.actions$
    // Listen for the 'LOGIN' action
        .ofType(ActionType.UPDATE)

        // Map the payload into JSON to use as the request body
        .map(action => JSON.stringify(action.payload))

        .switchMap(payload =>
            this.http.get('http://www.google.com')

                // If successful, dispatch success action with result
                .map(res => ({type: ActionType.UPDATE_SUCCESS, payload: {state: ModelState.Valid}}))

                // If request fails, dispatch failed action
                .catch(() => Observable.of({type: ActionType.UPDATE_FAIL, payload: {state: ModelState.Invalid}}))
        );
}
