
import { Action } from '@ngrx/store';

import { type } from '../../utils';

export const ActionType = {
    CREATE: type('ACCOUNT.SIGN-IN.CREATE'),
    SIGN_IN: type('ACCOUNT.SIGN-IN.SIGN_IN'),
};

export interface ISignInPayload {
    username: string;
    password: string;
}

export class Create implements Action {
    constructor(public payload: string) { }

    public type = ActionType.CREATE;
}

export class SignIn implements Action {
    constructor(public payload: ISignInPayload) { }

    public type = ActionType.SIGN_IN;
}


export type Actions
    = Create
    | SignIn;
