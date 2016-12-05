
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '../../application/shared.module';

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
                        class="form-control simple-form-control sa-comp-account-username"
                        placeholder="{{ placeholder }}"
                        autocomplete="off"
                        saAutoSelect
                        required />
                <i class="fa fa-envelope"></i>
            </div>
        </div>
        <div class="col-lg-4" *ngIf="formControl.errors">
            <span *ngIf="formControl.errors.minlength && formControl.touched" style="color: orangered; font-weight: bold;">{{ 'ACCOUNT.VALIDATION_ERROR_USERNAME_NAME_TOO_SHORT' | translate}}</span>
        </div>
    </div>
    <!-- COMPONENT.ACCOUNT.USERNAME: END -->
    `
})
export class UsernameComponent implements OnInit {

    constructor(private translate: TranslateService) {
        this.placeholder = this.placeholder ? this.placeholder : this.translate.instant('ACCOUNT.EMAIL_OR_USERNAME_PLACEHOLDER');
    }

    public static get FORM_CONTROL_NAME(): string { return 'username'; }

    @Input()
    public formGroup: FormGroup;

    @Input()
    public placeholder: string;

    @Input()
    public username: string;

    public formControl: FormControl;

    public ngOnInit(): void {
        this.formControl = new FormControl(this.username, [Validators.required, Validators.minLength(6)]);
        this.formGroup.addControl(UsernameComponent.FORM_CONTROL_NAME, this.formControl);
    }
}
