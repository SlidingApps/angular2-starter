
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
            return state;

        case ActionType.RESET_PASSWORD:
            state = Object.assign({}, state, { password: null });
            return state;

        case ActionType.TRY_SIGN_IN:
            state = Object.assign({}, state, action.payload);
            return state;

        default:
            return state;
    }
};
