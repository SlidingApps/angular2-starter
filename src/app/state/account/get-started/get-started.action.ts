
import { Action } from '@ngrx/store';

import { type } from '../../utils';

export const ActionType = {
    CREATE: type('ACCOUNT.GET_STARTED.CREATE'),
    UPDATE: type('ACCOUNT.GET_STARTED.UPDATE'),
    ORGANIZATION_AVAILABLE: type('ACCOUNT.GET_STARTED.ORGANIZATION_AVAILABLE'),
    ORGANIZATION_NOT_AVAILABLE: type('ACCOUNT.GET_STARTED.ORGANIZATION_NOT_AVAILABLE')
};

export interface IUpdatePayload {
    organization: string;
    username: string;
    password: string;
    passwordConfirmation: string;
}

export interface IUpdateOrganizationPayload {
    organization: string;
}

export class Create implements Action {
    constructor(public payload: string) { }

    public type = ActionType.CREATE;
}

export class Update implements Action {
    constructor(public payload: IUpdatePayload) { }

    public type = ActionType.UPDATE;
}

export class OrganizationAvailable implements Action {
    constructor() { }

    public type = ActionType.ORGANIZATION_AVAILABLE;
}

export class OrganizationNotAvailable implements Action {
    constructor() { }

    public type = ActionType.ORGANIZATION_NOT_AVAILABLE;
}

export type Actions
    = Create
    | Update
    | OrganizationAvailable
    | OrganizationNotAvailable;
