
import { Action } from '@ngrx/store';
import { type } from '../../utils';

import { IUpdatePayload, ISignUpPayload } from './get-started.model';

export const ActionType = {
    CREATE: type('ACCOUNT.GET_STARTED.CREATE'),
    UPDATE: type('ACCOUNT.GET_STARTED.UPDATE'),
    RESET_PASSWORD: type('ACCOUNT.GET_STARTED.RESET_PASSWORD'),
    TENANT_NAME_AVAILABLE: type('ACCOUNT.GET_STARTED.TENANT_NAME_AVAILABLE'),
    TENANT_NAME_NOT_AVAILABLE: type('ACCOUNT.GET_STARTED.TENANT_NAME_NOT_AVAILABLE'),
    TRY_SIGN_UP: type('ACCOUNT.GET_STARTED.TRY_SIGN_UP'),
    SIGN_UP_SUCCESS: type('ACCOUNT.GET_STARTED.SIGN_UP_SUCCESS'),
    SIGN_UP_FAILED: type('ACCOUNT.GET_STARTED.SIGN_UP_FAILED')
};

export class Create implements Action {
    constructor(public payload: string) { }

    public type = ActionType.CREATE;
}

export class ResetPassword implements Action {
    constructor() { }

    public type = ActionType.RESET_PASSWORD;
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
    constructor(public payload: ISignUpPayload) { }

    public type = ActionType.TRY_SIGN_UP;
}

export class SignUpSuccess implements Action {
    constructor() { }

    public type = ActionType.SIGN_UP_SUCCESS;
}

export class SignUpFailed implements Action {
    constructor() { }

    public type = ActionType.SIGN_UP_FAILED;
}

export type Actions
    = Create
    | Update
    | ResetPassword
    | TenantNameAvailable
    | TenantNameNotAvailable
    | TrySignUp
    | SignUpSuccess
    | SignUpFailed;
