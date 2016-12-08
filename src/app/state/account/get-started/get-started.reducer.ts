
import { Actions, ActionType } from './get-started.action';

import { IValidated, ValidationState } from '../../validation';
import { type } from '../../utils';

export const ErrorAttribute = {
    TENANT: type('ACCOUNT.GET_STARTED.ATTRIBUTE.TENANT'),
    PASSWORD: type('ACCOUNT.GET_STARTED.ATTRIBUTE.PASSWORD')
};

export const ErrorToken = {
    TENANT_NAME_IS_AVAILABLE: type('ACCOUNT.GET_STARTED.ERROR.TENANT_NAME_IS_AVAILABLE'),
    PASSWORDS_NOT_EQUAL: type('ACCOUNT.GET_STARTED.ERROR.PASSWORDS_NOT_EQUAL')
};

export interface IState extends IValidated {
    tenant: string;
    username: string;
    password: string;
    passwordConfirmation: string;
}

const INITIAL_STATE: IState = {
    tenant: null,
    username: null,
    password: null,
    passwordConfirmation: null,

    $validations: []
};

export const reducer = (state: IState = INITIAL_STATE, action: Actions): IState => {

    switch (action.type) {
        case ActionType.UPDATE:
            state = Object.assign({}, state, action.payload);
            state = Validator.ValidatePasswordEquality(state);
            return state;

        case ActionType.TENANT_NAME_AVAILABLE:
            state = Object.assign({}, state);
            state = Validator.TenantNameIsAvailable(state, true);
            return state;

        case ActionType.TENANT_NAME_NOT_AVAILABLE:
            state = Object.assign({}, state);
            state = Validator.TenantNameIsAvailable(state, false);
            return state;

        default:
            return state;
    }
};

export class Validator {

    public static TenantNameIsAvailable(state: IState, available: boolean): IState {
        state.$validations = state.$validations.filter(x => x.attribute !== ErrorAttribute.TENANT);
        if (state) {
            state.$validations = [...state.$validations, {
                attribute: ErrorAttribute.TENANT,
                token: ErrorToken.TENANT_NAME_IS_AVAILABLE,
                state: available ? ValidationState.PASSED : ValidationState.FAILED,
                message: 'VALIDATION.FAILURE.TENANT.IS_NOT_AVAILABLE'
            }];
        }

        return state;
    }

    public static ValidatePasswordEquality(state: IState): IState {
        state.$validations = state.$validations.filter(x => x.attribute !== ErrorAttribute.PASSWORD);
        const success: boolean = !!state.password && !!state.passwordConfirmation && state.password !== state.passwordConfirmation;
        if (state) {
            state.$validations = [...state.$validations, {
                attribute: ErrorAttribute.PASSWORD,
                token: ErrorToken.PASSWORDS_NOT_EQUAL,
                state: success ? ValidationState.PASSED : ValidationState.FAILED
            }];
        }

        return state;
    }
}

