

import { Actions, ActionType } from './sign-in.action';

export interface IState {
    username: string;
    password: string;
}

const INITIAL_STATE: IState = {
    username: null,
    password: null
};

export const reducer = (state: IState = INITIAL_STATE, action: Actions): IState => {

    switch (action.type) {
        case ActionType.SIGN_IN:
            state = Object.assign({}, state, action.payload);
            return state;

        default:
            return state;
    }
};

