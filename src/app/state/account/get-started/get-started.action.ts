
import { Action } from '@ngrx/store';

import { type } from '../../utils';

export const ActionType = {
    CREATE: type('ACCOUNT.GET_STARTED.CREATE'),
    UPDATE: type('ACCOUNT.GET_STARTED.UPDATE'),
    TENANT_NAME_AVAILABLE: type('ACCOUNT.GET_STARTED.TENANT_NAME_AVAILABLE'),
    TENANT_NAME_NOT_AVAILABLE: type('ACCOUNT.GET_STARTED.TENANT_NAME_NOT_AVAILABLE'),
    TRY_SIGN_UP: type('ACCOUNT.GET_STARTED.TRY_SIGN_UP')
};

export interface IUpdatePayload {
    tenant: string;
    username: string;
    password: string;
    passwordConfirmation: string;
}

export interface IUpdateTenanrPayload {
    tenant: string;
}

export class Create implements Action {
    constructor(public payload: string) { }

    public type = ActionType.CREATE;
}

export class Update implements Action {
    constructor(public payload: IUpdatePayload) { }

    public type = ActionType.UPDATE;
}

export class TenantNameAvailable implements Action {
    constructor() { }

    public type = ActionType.TENANT_NAME_AVAILABLE;
}

export class TenantNameNotAvailable implements Action {
    constructor() { }

    public type = ActionType.TENANT_NAME_NOT_AVAILABLE;
}

export class TrySignUp implements Action {
    constructor() { }

    public type = ActionType.TRY_SIGN_UP;
}

export type Actions
    = Create
    | Update
    | TenantNameAvailable
    | TenantNameNotAvailable
    | TrySignUp;
