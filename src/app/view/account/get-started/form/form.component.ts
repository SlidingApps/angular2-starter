
import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Logger } from '../../../../foundation/logger';


import { IFormModel } from './form.model';

import 'jquery';

@Component({
    selector: 'sa-account-get-started-form',
    template: `
    <!-- ACCOUNT.SIGN-IN.FORM: BEGIN -->
    <form #f="ngForm" [formGroup]="formGroup" (ngSubmit)="onSubmit(f.value)">
        <sa-comp-account-organization [formGroup]="formGroup"></sa-comp-account-organization>
        <sa-comp-account-username [formGroup]="formGroup"></sa-comp-account-username>
        <sa-comp-account-password [formGroup]="formGroup"></sa-comp-account-password>
        <sa-comp-account-password [formGroup]="formGroup" [name]="'password_confirmation'" [placeholder]="'confirm your password'"></sa-comp-account-password>
        <sa-comp-account-button [formGroup]="formGroup" [text]="'Sign up'"></sa-comp-account-button>
    </form>
    <!-- ACCOUNT.SIGN-IN.FORM: END -->
    `
})
export class FormComponent implements OnInit {

    constructor(private element: ElementRef, builder: FormBuilder) {
        this.formGroup = builder.group({});
    }

    @Output('sign-up-clicked')
    public signUpClicked = new EventEmitter();

    public formGroup: FormGroup;

    public ngOnInit(): void {
        jQuery('input[class*=\'sa-comp-account-organization\']').trigger('focus');
    }

    /* tslint:disable:no-unused-variable */
    private onSubmit(): void {
        const model: IFormModel = this.formGroup.value;
        this.signUpClicked.emit(model);

        Logger.Debug('FormComponent.onSubmit()', model);
    }
    /* tslint:enable:no-unused-variable */
}
