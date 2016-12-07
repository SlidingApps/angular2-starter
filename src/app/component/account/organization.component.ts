
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { AsyncValidator, IValidationFailure } from '../async-validator';

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
            {{formControl.errors | json}}
            <span *ngIf="formControl.errors.minlength && formControl.touched" style="color: orangered; font-weight: bold;">{{ 'ACCOUNT.VALIDATION_ERROR_ORGANIZATION_NAME_TOO_SHORT' | translate }}</span>
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
        let validator = AsyncValidator.debounce((control) => this.validateExists(control));

        this.formControl = new FormControl(this.organization, [Validators.required, Validators.minLength(4)], [validator]);
        this.formGroup.addControl(OrganizationComponent.FORM_CONTROL_NAME, this.formControl);
    }

    private validateExists(control: AbstractControl): Promise<Array<IValidationFailure>> {
        let q = new Promise((resolve, reject) => {
            this.validationFailures
                .debounceTime(200)
                .distinctUntilChanged()
                .first()
                .map(x => x === null ? null : x)
                .subscribe(x => resolve(x));
        });

        return q;
    }
}
