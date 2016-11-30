/// <reference path="../../../../index.d.ts" />

import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Logger, TranslateService } from '../../../../application/shared.module';

import { IFormModel } from './form.model';

import 'jquery';

@Component({
    selector: 'sa-account-get-started-form',
    template: `
    <!-- ACCOUNT.SIGN-IN.FORM: BEGIN -->
    <form #f="ngForm" [formGroup]="formGroup" (ngSubmit)="onSubmit(f.value)">
        <sa-comp-account-organization [formGroup]="formGroup"></sa-comp-account-organization>
        <sa-comp-account-username [formGroup]="formGroup" [placeholder]="'ACCOUNT.EMAIL_PLACEHOLDER' | translate"></sa-comp-account-username>
        <sa-comp-account-password [formGroup]="formGroup"></sa-comp-account-password>
        <sa-comp-account-password [formGroup]="formGroup" [name]="'passwordConfirmation'" [placeholder]="'ACCOUNT.CONFIRM_PASSWORD_PLACEHOLDER' | translate"></sa-comp-account-password>
        <sa-comp-account-button [formGroup]="formGroup" [text]="'ACCOUNT.SIGN_UP_ACTION' | translate"></sa-comp-account-button>
    </form>
    <!-- ACCOUNT.SIGN-IN.FORM: END -->
    `
})
export class FormComponent implements OnInit {

    constructor(private element: ElementRef, public translate: TranslateService, builder: FormBuilder) {
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
