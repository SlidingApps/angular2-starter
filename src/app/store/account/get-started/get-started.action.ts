
import { Action } from '@ngrx/store';

import { type } from '../../utils';
import { ModelState } from './get-started.reducer';

export const ActionType = {
    CREATE: type('ACCOUNT.GET-STARTED.CREATE'),
    UPDATE: type('ACCOUNT.GET-STARTED.UPDATE'),
    UPDATE_SUCCESS: type('ACCOUNT.GET-STARTED.UPDATE_SUCCESS'),
    UPDATE_FAIL: type('ACCOUNT.GET-STARTED.UPDATE_FAIL')
};

export interface IUpdateOrganizationPayload {
    organization: string;
    username: string;
    password: string;
    passwordConfirmation: string;
}

export interface IUpdateStatePayload {
    state: ModelState;
}

export class Create implements Action {
    constructor(public payload: string) { }

    public type = ActionType.CREATE;
}

export class Update implements Action {
    constructor(public payload: IUpdateOrganizationPayload) { }

    public type = ActionType.UPDATE;
}

export class UpdateSucess implements Action {
    constructor(public payload: IUpdateStatePayload) { }

    public type = ActionType.UPDATE_SUCCESS;
}

export class UpdateFail implements Action {
    constructor(public payload: IUpdateStatePayload) { }

    public type = ActionType.UPDATE_FAIL;
}

export type Actions
    = Create
    | Update
    | UpdateSucess
    | UpdateFail;
