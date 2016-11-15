
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'sa-account-sign-in-password',
    template: `
    <!-- ACCOUNT.SIGN-IN.PASSWORD: BEGIN -->
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
    <!-- ACCOUNT.SIGN-IN.PASSWORD: END -->
    `
})
export class PasswordComponent implements OnInit {

    @Input()
    public formGroup: FormGroup;

    public ngOnInit(): void {
        this.formGroup.addControl('password', new FormControl(undefined, Validators.required));
    }
}
