
import { Logger } from '../../application/shared.module';

import { Actions, ActionType } from './authentication.action';
import { IState } from './authentication.model';

const INITIAL_STATE: IState = {
    user: null,
    person: null
};

export const reducer = (state: IState = INITIAL_STATE, action: Actions): IState => {

    switch (action.type) {
        case ActionType.CREATE:
            state = Object.assign({}, INITIAL_STATE );

            Logger.Info('State:Authentication:reducer', action.type, action, state);
            return state;

        case ActionType.TRY_SIGN_IN:
            state = Object.assign({}, state);

            Logger.Info('State:Authentication:reducer', action.type, action, state);
            return state;

        case ActionType.SIGN_IN_SUCCESS:
            state.user = Object.assign({}, state.user, action.payload);
            state.person = null;
            state = Object.assign({}, state);

            Logger.Info('State:Authentication:reducer', action.type, action, state);
            return state;

        case ActionType.SIGN_IN_FAIL:
            state = Object.assign({}, state, INITIAL_STATE);

            Logger.Info('State:Authentication:reducer', action.type, action, state);
            return state;

        default:
            return state;
    }
};
