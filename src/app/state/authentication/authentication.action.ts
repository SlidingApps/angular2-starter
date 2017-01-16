
import { Action } from '@ngrx/store';
import { type } from '../utils';

import { IUserInfo, ICredentials } from './authentication.model';

export const ActionType = {
    CREATE: type('AUTHENTICATION.CREATE'),
    TRY_SIGN_IN: type('AUTHENTICATION.TRY_SIGN_IN'),
    SIGN_IN_SUCCESS: type('AUTHENTICATION.SIGN_IN_SUCCESS'),
    SIGN_IN_FAIL: type('AUTHENTICATION.SIGN_IN_FAIL')
};

export class Create implements Action {
    constructor() {}

    public type = ActionType.CREATE;
}

export class TrySignIn implements Action {
    constructor(public payload: ICredentials) { }

    public type = ActionType.TRY_SIGN_IN;
}

export class SignInSuccess implements Action {
    constructor(public payload: IUserInfo) { }

    public type = ActionType.SIGN_IN_SUCCESS;
}

export class SignInFail implements Action {
    constructor() { }

    public type = ActionType.SIGN_IN_FAIL;
}

export type Actions
    = Create
    | TrySignIn
    | SignInSuccess
    | SignInFail;
