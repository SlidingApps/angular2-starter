
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface IPasswordModel {
    password: string;
}

@Component({
    selector: 'sa-comp-account-password',
    template: `
    <!-- COMPONENT.ACCOUNT.PASSWORD: BEGIN -->
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4">
            <div [formGroup]="formGroup" class="form-group">
                <input  id="password" 
                        formControlName="password"
                        type="password" 
                        class="form-control simple-form-control" 
                        placeholder="password" 
                        required/>
                <i class="fa fa-lock"></i>
            </div>
        </div>
    </div>
    <!-- COMPONENT.ACCOUNT.PASSWORD: END -->
    `
})
export class PasswordComponent implements OnInit {

    public static get FORM_CONTROL_NAME(): string { return 'password'; }

    @Input()
    public formGroup: FormGroup;

    public ngOnInit(): void {
        this.formGroup.addControl(PasswordComponent.FORM_CONTROL_NAME, new FormControl(undefined, Validators.required));
    }
}
