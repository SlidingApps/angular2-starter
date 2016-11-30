
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
                        required/>
                <i class="fa fa-lock"></i>
            </div>
        </div>
    </div>
    <!-- COMPONENT.ACCOUNT.PASSWORD: END -->
    `
})
export class PasswordComponent implements OnInit {

    constructor(private translate: TranslateService) {
        this.placeholder = this.placeholder ? this.placeholder : this.translate.instant('ACCOUNT.PASSWORD_PLACEHOLDER');
    }

    public static get FORM_CONTROL_NAME(): string { return 'password'; }

    @Input()
    public formGroup: FormGroup;

    @Input()
    public name: string = PasswordComponent.FORM_CONTROL_NAME;

    @Input()
    public placeholder: string;

    public ngOnInit(): void {
        this.formGroup.addControl(this.name, new FormControl(undefined, Validators.required));
    }
}
