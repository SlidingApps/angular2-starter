
import { Actions, ActionType } from './get-started.action';

/* tslint:disable:no-any */
export enum ModelState {
    NotSpecified = <any>'NotSpecified',
    Initialized = <any>'Initialized',
    PendingUpdate = <any>'PendingUpdate',
    Invalid = <any>'Invalid',
    Valid = <any>'Valid'
}
/* tslint:enable:no-any */

export interface IState {
    organization: string;
    username: string;
    password: string;
    passwordConfirmation: string;

    state: ModelState;
}

const INITIAL_STATE: IState = {
    organization: null,
    username: null,
    password: null,
    passwordConfirmation: null,

    state: ModelState.Initialized
};

export const account = (state: IState = INITIAL_STATE, action: Actions): IState => {

    switch (action.type) {
        case ActionType.UPDATE:
            state = Object.assign({}, state, action.payload, { state: ModelState.PendingUpdate });
            return state;

        case ActionType.UPDATE_SUCCESS:
            state = Object.assign({}, state, action.payload);
            return state;

        case ActionType.UPDATE_FAIL:
            state = Object.assign({}, state, action.payload);
            return state;

        default:
            return state;
    }
};

