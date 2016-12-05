
import { Actions, ActionType } from './get-started.action';
import { IStateError } from '../state-error';
import { type } from '../../utils';

export const ErrorAttribute = {
    ORGANIZATION: type('ACCOUNT.GET_STARTED.ATTRIBUTE.ORGANIZATION'),
    PASSWORD: type('ACCOUNT.GET_STARTED.ATTRIBUTE.PASSWORD')
};

export const ErrorToken = {
    ORGANIZATION_EXISTS: type('ACCOUNT.GET_STARTED.ERROR.ORGANIZATION_EXISTS'),
    PASSWORDS_NOT_EQUAL: type('ACCOUNT.GET_STARTED.ERROR.PASSWORDS_NOT_EQUAL')
};

export interface IState {
    organization: string;
    username: string;
    password: string;
    passwordConfirmation: string;

    $errors: Array<IStateError>;
}

const INITIAL_STATE: IState = {
    organization: null,
    username: null,
    password: null,
    passwordConfirmation: null,

    $errors: []
};

export const reducer = (state: IState = INITIAL_STATE, action: Actions): IState => {

    switch (action.type) {
        case ActionType.UPDATE:
            state = Object.assign({}, state, action.payload);
            state = Validator.ValidatePasswordEquality(state);
            return state;

        case ActionType.ORGANIZATION_AVAILABLE:
            state = Object.assign({}, state);
            state = Validator.OrganizationExists(state, true);
            return state;

        case ActionType.ORGANIZATION_NOT_AVAILABLE:
            state = Object.assign({}, state);
            state = Validator.OrganizationExists(state, false);
            return state;

        default:
            return state;
    }
};

export class Validator {

    public static OrganizationExists(state: IState, success: boolean): IState {
        state.$errors = state.$errors.filter(x => x.attribute !== ErrorAttribute.ORGANIZATION);
        if (state && !success) {
            state.$errors = [...state.$errors, {
                attribute: ErrorAttribute.ORGANIZATION,
                token: ErrorToken.ORGANIZATION_EXISTS
            }];
        }

        return state;
    }

    public static ValidatePasswordEquality(state: IState): IState {
        state.$errors = state.$errors.filter(x => x.attribute !== ErrorAttribute.PASSWORD);
        if (state && !!state.password && !!state.passwordConfirmation && state.password !== state.passwordConfirmation) {
            state.$errors = [...state.$errors, {
                attribute: ErrorAttribute.PASSWORD,
                token: ErrorToken.PASSWORDS_NOT_EQUAL
            }];
        }

        return state;
    }
}

