
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
                        autofocus
                        required />
                <i class="fa fa-users"></i>
            </div>
        </div>
        <div class="col-lg-4" *ngIf="formControl.errors">
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
    public formControl: FormControl;

    public ngOnInit(): void {
        this.formControl = new FormControl(undefined, [Validators.required, Validators.minLength(4)]);
        this.formGroup.addControl(OrganizationComponent.FORM_CONTROL_NAME, this.formControl);
    }
}
