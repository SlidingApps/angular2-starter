
import { AbstractControl } from '@angular/forms';
import { Observable, Observer} from 'rxjs';

import { Logger } from '../../app/application/shared.module';
import { IValidationFailure } from '../state/validation';

export class AsyncValidator {
    constructor(validator: (control: AbstractControl) => Promise<IValidationFailure|Array<IValidationFailure>>, debounceTime = 1000) {
        /* tslint:disable:no-any */
        let source: any = new Observable((observer: Observer<AbstractControl>) => {
            this.validate = (control) => observer.next(control);
        });
        /* tslint:enable:no-any */

        source.debounceTime(debounceTime)
            .distinctUntilChanged(null, (x) => x.control.value)
            .map(x => { return { promise: validator(x.control), resolver: x.promiseResolver }; })
            .subscribe(
                x => x.promise.then(resultValue => x.resolver(resultValue),
                error => Logger.Error('AsyncValidator', error)));
    }

    public validate;

    private createValidator() {
        return (control) => {
            let promiseResolver = null;

            let p = new Promise(resolve => promiseResolver = resolve);
            this.validate({ control: control, promiseResolver: promiseResolver });

            return p;
        };
    }

    public static debounce(validator: (control: AbstractControl) => Promise<IValidationFailure|Array<IValidationFailure>>, debounceTime = 400): (control: AbstractControl) => Promise<IValidationFailure|Array<IValidationFailure>> {
        let asyncValidator = new this(validator, debounceTime);

        return asyncValidator.createValidator();
    }
}
