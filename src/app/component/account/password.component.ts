
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TranslateService } from '../../application/shared.module';

export interface IPasswordModel {
    password: string;
}

export interface IPasswordConfirmationModel {
    passwordConfirmation: string;
}

@Component({
    selector: 'sa-comp-account-password',
    template: `
    <!-- COMPONENT.ACCOUNT.PASSWORD: BEGIN -->
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4">
            <div [formGroup]="formGroup" class="form-group">
                <input  id="{{ name }}" 
                        formControlName="{{ name }}"
                        type="password" 
                        class="form-control simple-form-control sa-comp-account-password" 
                        placeholder="{{ placeholder }}" 
                        saAutoSelect
                        required/>
                <i class="fa fa-lock"></i>
            </div>
        </div>
         <div class="col-lg-4" *ngIf="!!formGroup.errors || !!formControl.errors">
            <span *ngIf="!isConfirmation && !!formGroup && !!formGroup.errors && formGroup.errors['VALIDATION.FAILURE.PASSWORD.PASSWORD_AND_CONFIRMATION_NOT_EQUAL']" style="color: orangered; font-weight: bold;">{{ 'VALIDATION.FAILURE.PASSWORD.PASSWORD_AND_CONFIRMATION_NOT_EQUAL' | translate }}</span>
            <span *ngIf="!!formControl && !!formControl.errors && formControl.errors.minlength && formControl.touched" style="color: orangered; font-weight: bold;">{{ 'VALIDATION.FAILURE.PASSWORD.PASSWORD_TOO_SHORT' | translate }}</span>
        </div>
    </div>
    <!-- COMPONENT.ACCOUNT.PASSWORD: END -->
    `
})
export class PasswordComponent implements OnInit {

    constructor(private translate: TranslateService) {
        this.placeholder = this.placeholder ? this.placeholder : this.translate.instant('ACCOUNT.PASSWORD_PLACEHOLDER');
    }

    public static get PASSWORD_AND_CONFIRMATION_NOT_EQUAL(): string { return 'VALIDATION.FAILURE.PASSWORD.PASSWORD_AND_CONFIRMATION_NOT_EQUAL'; }

    public static get FORM_CONTROL_NAME(): string { return 'password'; }

    @Input()
    public formGroup: FormGroup;

    @Input()
    public name: string = PasswordComponent.FORM_CONTROL_NAME;

    @Input()
    public placeholder: string;

    @Input('is-confirmation')
    public isConfirmation: boolean = false;

    public formControl: FormControl;

    public ngOnInit(): void {
        this.formControl = new FormControl(undefined, [Validators.required, Validators.minLength(6)], []);
        this.formGroup.addControl(this.name, this.formControl);
    }
}
