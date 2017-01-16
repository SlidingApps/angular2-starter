
import { Logger } from '../../../application/shared.module';

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
        case ActionType.CREATE:
            state = Object.assign({}, INITIAL_STATE, action.payload);

            Logger.Info('State:Account:SignIn:reducer', action.type, action, state);
            return state;

        case ActionType.RESET_PASSWORD:
            state = Object.assign({}, state, { password: null });

            Logger.Info('State:Account:SignIn:reducer', action.type, action, state);
            return state;

        case ActionType.TRY_SIGN_IN:
            state = Object.assign({}, state, action.payload);

            Logger.Info('State:Account:SignIn:reducer', action.type, action, state);
            return state;

        default:
            return state;
    }
};
