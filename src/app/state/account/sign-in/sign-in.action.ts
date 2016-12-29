
import { Action } from '@ngrx/store';
import { type } from '../../utils';

export const ActionType = {
    TRY_SIGN_IN: type('ACCOUNT.SIGN_IN.TRY_SIGN_IN'),
};

export interface ITrySignInPayload {
    username: string;
    password: string;
}

export class TrySignIn implements Action {
    constructor(public payload: ITrySignInPayload) { }

    public type = ActionType.TRY_SIGN_IN;
}


export type Actions
    = TrySignIn;
