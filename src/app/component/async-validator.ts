
import { AbstractControl } from '@angular/forms';
import { Observable, Observer} from 'rxjs';

export interface IValidationFailure {
    [key: string]: boolean;
}

export class AsyncValidator {
    public _validate;

    constructor(validator: (control: AbstractControl) => Promise<IValidationFailure|Array<IValidationFailure>>, debounceTime = 1000) {
        let source: any = new Observable((observer: Observer<AbstractControl>) => {
            this._validate = (control) => observer.next(control);
        });

        source.debounceTime(debounceTime)
            .distinctUntilChanged(null, (x) => x.control.value)
            .map(x => { return { promise: validator(x.control), resolver: x.promiseResolver }; })
            .subscribe(
                (x) => x.promise.then(resultValue => x.resolver(resultValue),
                    (e) => { console.log('async validator error: %s', e); }));
    }

    private _getValidator() {
        return (control) => {
            let promiseResolver;
            let p = new Promise((resolve) => {
                promiseResolver = resolve;
            });
            this._validate({ control: control, promiseResolver: promiseResolver });
            return p;
        };
    }

    public static debounce(validator: (control: AbstractControl) => Promise<IValidationFailure|Array<IValidationFailure>>, debounceTime = 400) {
        let asyncValidator = new this(validator, debounceTime);

        return asyncValidator._getValidator();
    }
}
