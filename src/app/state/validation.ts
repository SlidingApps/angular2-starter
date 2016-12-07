
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
