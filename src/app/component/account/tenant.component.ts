
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

import { AsyncValidator } from '../async-validator';
import { IValidationFailure } from '../../state/validation';

export interface ITenantModel {
    tenant: string;
}

@Component({
    selector: 'sa-comp-account-tenant',
    template: `
    <!-- COMPONENT.ACCOUNT.TENANT: BEGIN -->
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4">
            <div [formGroup]="formGroup" class="form-group">
                <input  id="tenant"
                        formControlName="tenant"
                        type="text"
                        class="form-control simple-form-control sa-comp-account-tenant"
                        placeholder="{{ 'ACCOUNT.TENANT_PLACEHOLDER' | translate }}"
                        autocomplete="off"
                        saAutoSelect
                        required />
                <i class="fa fa-users"></i>
            </div>
        </div>
        <div class="col-lg-4" *ngIf="formControl.errors">
            <span *ngIf="formControl.errors['VALIDATION.FAILURE.TENANT.IS_NOT_AVAILABLE']" style="color: orangered; font-weight: bold;">{{ 'VALIDATION.FAILURE.TENANT.IS_NOT_AVAILABLE' | translate }}</span>
            <span *ngIf="formControl.errors.minlength && formControl.touched" style="color: orangered; font-weight: bold;">{{ 'VALIDATION.FAILURE.TENANT.NAME_TOO_SHORT' | translate }}</span>
        </div>
    </div>
    <!-- COMPONENT.ACCOUNT.TENANT: END -->
    `
})
export class TenantComponent implements OnInit {

    public static get FORM_CONTROL_NAME(): string { return 'tenant'; }
    public static get IS_NOT_AVAILABLE(): string { return 'VALIDATION.FAILURE.TENANT.IS_NOT_AVAILABLE'; }

    @Input()
    public formGroup: FormGroup;

    @Input()
    public tenant: string;

    @Input('validation-failures')
    public validationFailures: Observable<Array<IValidationFailure>>;

    public formControl: FormControl;

    public ngOnInit(): void {
        this.formControl = new FormControl(this.tenant, [Validators.required, Validators.minLength(4)], [TenantValidator.isAvailable(this.validationFailures)]);
        this.formGroup.addControl(TenantComponent.FORM_CONTROL_NAME, this.formControl);
    }
}

class TenantValidator {
    public static isAvailable(validationFailures: Observable<Array<IValidationFailure>>): ValidatorFn {
        let validator = AsyncValidator.debounce((control) => {
            let promise = new Promise((resolve, reject) => {
                validationFailures
                    .debounceTime(100)
                    .first()
                    .concatMap(x => !!x ? x : Observable.empty())
                    .subscribe(x => resolve((x && !!x[TenantComponent.IS_NOT_AVAILABLE] ? x : null)));
            });

            return promise;
        });

        return validator;
    }
}
