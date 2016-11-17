
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface IUsernameModel {
    username: string;
}

@Component({
    selector: 'sa-comp-account-username',
    template: `
    <!-- COMPONENT.ACCOUNT.USERNAME: BEGIN -->
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4">
            <div [formGroup]="formGroup" class="form-group">
                <input  id="username"
                        formControlName="username"
                        type="text"
                        class="form-control simple-form-control"
                        placeholder="email or username"
                        autocomplete="off"
                        required />
                <i class="fa fa-envelope"></i>
            </div>
        </div>
        <div class="col-lg-4" *ngIf="formControl.errors">
            <span *ngIf="formControl.errors.minlength && formControl.touched" style="color: orangered; font-weight: bold;">Username is too short</span>
        </div>
    </div>
    <!-- COMPONENT.ACCOUNT.USERNAME: END -->
    `
})
export class UsernameComponent implements OnInit {

    public static get FORM_CONTROL_NAME(): string { return 'username'; }

    @Input()
    public formGroup: FormGroup;
    public formControl: FormControl;

    public ngOnInit(): void {
        this.formControl = new FormControl(undefined, [Validators.required, Validators.minLength(6)]);
        this.formGroup.addControl(UsernameComponent.FORM_CONTROL_NAME, this.formControl);
    }
}
