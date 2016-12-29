
import { Actions, ActionType } from './confirm.action';

export interface IState {
    confirmation: string;
}

const INITIAL_STATE: IState = {
    confirmation: null
};

export const reducer = (state: IState = INITIAL_STATE, action: Actions): IState => {

    switch (action.type) {
        case ActionType.TRY_CONFIRM:
            state = Object.assign({}, state, action.payload);
            return state;

        default:
            return state;
    }
};
