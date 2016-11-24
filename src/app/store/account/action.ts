
import { Action } from '@ngrx/store';

export const ActionType = {
    CREATE: 'Create',
    UPDATE: 'Update'
};


export class CreateAction implements Action {
    constructor(public payload: string) { }

    public type = ActionType.CREATE;
}

export interface IUpdateActionPayload {
    organization: string;
    username: string;
}

export class UpdateAction implements Action {
    constructor(public payload: IUpdateActionPayload) { }

    public type = ActionType.UPDATE;
}

export type Actions
    = CreateAction
    | UpdateAction;
