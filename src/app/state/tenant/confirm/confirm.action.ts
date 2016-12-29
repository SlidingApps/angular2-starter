
import { Action } from '@ngrx/store';
import { type } from '../../utils';

export const ActionType = {
    TRY_CONFIRM: type('TENANT.CONFIRM.TRY_CONFIRM'),
};

export interface ITryConfirmPayload {
    confirmation: string;
}

export class TryConfirm implements Action {
    constructor(public payload: ITryConfirmPayload) { }

    public type = ActionType.TRY_CONFIRM;
}


export type Actions
    = TryConfirm;
