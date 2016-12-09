
import { Observable } from 'rxjs';

/* tslint:disable:no-any */
export enum ValidationState {
    UNKNOWN = <any>'UNKNOWN',
    PENDING = <any>'PENDING',
    PASSED = <any>'PASSED',
    FAILED = <any>'FAILED'
}
/* tslint:enable:no-any */

export interface IValidated {
    $validations: Array<IValidationInfo>;
}

export interface IValidationInfo {
    attribute: string;
    token: string;
    state: ValidationState;
    id?: string;
    message?: string;
}

export interface IValidationFailure {
    [key: string]: boolean;
}

export function createValidationFailures(state: Observable<IValidated>, attribute: string): Observable<Array<IValidationFailure>> {
    return state
        .map(model => model.$validations)
        .filter(validations => !!validations.length)
        .map(validations => validations.filter(v => v.attribute === attribute))
        .map(validations => {
            if (!!validations.length) {
                return validations.map(validation => { return { [validation.message ? validation.message : validation.token]: validation.state === ValidationState.FAILED }; });
            } else {
                return null;
            }
        });
}
