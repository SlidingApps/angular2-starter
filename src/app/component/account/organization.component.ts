
import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ValidatorFn} from '@angular/forms';
import { Observable } from 'rxjs';

import { AsyncValidator } from '../async-validator';
import { IValidationFailure } from '../../state/validation';

export interface IOrganizationModel {
    organization: string;
}

@Component({
    selector: 'sa-comp-account-organization',
    template: `
    <!-- COMPONENT.ACCOUNT.ORGANIZATION: BEGIN -->
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4">
            <div [formGroup]="formGroup" class="form-group">
                <input  id="organization"
                        formControlName="organization"
                        type="text"
                        class="form-control simple-form-control sa-comp-account-organization"
                        placeholder="{{ 'ACCOUNT.ORGANIZATION_PLACEHOLDER' | translate }}"
                        autocomplete="off"
                        saAutoSelect
                        required />
                <i class="fa fa-users"></i>
            </div>
        </div>
        <div class="col-lg-4" *ngIf="formControl.errors">
            <span *ngIf="formControl.errors.minlength && formControl.touched" style="color: orangered; font-weight: bold;">{{ 'ACCOUNT.VALIDATION_ERROR_ORGANIZATION_NAME_TOO_SHORT' | translate }}</span>
            <span *ngIf="formControl.errors['ACCOUNT.GET_STARTED.ERROR.ORGANIZATION_IS_AVAILABLE']" style="color: orangered; font-weight: bold;">{{ 'ACCOUNT.GET_STARTED.ERROR.ORGANIZATION_IS_AVAILABLE' | translate }}</span>
        </div>
    </div>
    <!-- COMPONENT.ACCOUNT.ORGANIZATION: END -->
    `
})
export class OrganizationComponent implements OnInit {

    public static get FORM_CONTROL_NAME(): string { return 'organization'; }

    @Input()
    public formGroup: FormGroup;

    @Input()
    public organization: string;

    @Input('validation-failures')
    public validationFailures: Observable<Array<IValidationFailure>>;

    public formControl: FormControl;

    public ngOnInit(): void {
        this.formControl = new FormControl(this.organization, [Validators.required, Validators.minLength(4)], [OrganizationValidator.isAvailable(this.validationFailures)]);
        this.formGroup.addControl(OrganizationComponent.FORM_CONTROL_NAME, this.formControl);
    }
}

class OrganizationValidator {
    public static isAvailable(validationFailures: Observable<Array<IValidationFailure>>): ValidatorFn {
        let validator = AsyncValidator.debounce((control) => {
            let promise = new Promise((resolve, reject) => {
                validationFailures
                    .debounceTime(200)
                    .first()
                    .concatMap(x => !!x ? x : Observable.empty())
                    .subscribe(x => {
                        const result: IValidationFailure = (!x['ACCOUNT.GET_STARTED.ERROR.ORGANIZATION_IS_AVAILABLE'] ? null : x) as IValidationFailure;
                        resolve(result);
                    });
            });

            return promise;
        });

        return validator;
    }
}
