
import { AbstractControl, Validator } from '@angular/forms';
import { Observable } from 'rxjs';

export class AsyncValidator implements Validator {

    public validate(control: AbstractControl ): Promise<{[key: string]: any}> {
        // return this.validateUniqueEmailObservable(control.value).first();
        // return (new Observable(observer => observer.next({asyncInvalid: true}))).first();

        return new Promise(resolve => {
            if (control.value === 'peter') {
                resolve({asyncInvalid: true});
            } else {
                resolve(null);
            }
        });
    }

    private validateUniqueEmailObservable(value: string ): Observable<{[key: string]: any}> {
        return new Observable(observer => {
            console.log('validate');
            if (value === 'peter' ) {
                console.log('invalid');
                observer.next({asyncInvalid: true});
            } else {
                observer.next(null);
            }
        });
    }
}
