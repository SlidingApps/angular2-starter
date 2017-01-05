
import { Action } from '@ngrx/store';
import { type } from '../../utils';

export const ActionType = {
    CREATE: type('ACCOUNT.SIGN_IN.CREATE'),
    RESET_PASSWORD: type('ACCOUNT.SIGN_IN.RESET_PASSWORD'),
    TRY_SIGN_IN: type('ACCOUNT.SIGN_IN.TRY_SIGN_IN')
};

export interface ISignInPayload {
    username: string;
    password: string;
}

export class Create implements Action {
    constructor(public payload: ISignInPayload) { }

    public type = ActionType.CREATE;
}

export class ResetPassword implements Action {
    constructor() { }

    public type = ActionType.RESET_PASSWORD;
}

export class TrySignIn implements Action {
    constructor(public payload: ISignInPayload) { }

    public type = ActionType.TRY_SIGN_IN;
}


export type Actions
    = Create
    | ResetPassword
    | TrySignIn;
