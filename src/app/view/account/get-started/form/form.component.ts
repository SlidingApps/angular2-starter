/// <reference path="../../../../index.d.ts" />

import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Logger, TranslateService } from '../../../../application/shared.module';
import { Observable } from 'rxjs';

import { AccountGetStarted, Validation } from '../../../../state/state.module';
import { IFormModel } from './form.model';
import * as AccountComponent from '../../../../component/account/account-component.module';

import 'jquery';

@Component({
    selector: 'sa-account-get-started-form',
    template: `
    <!-- ACCOUNT.SIGN-IN.FORM: BEGIN -->
    <form #f="ngForm" [formGroup]="formGroup" (ngSubmit)="onSubmit(f.value)">
        <sa-comp-account-tenant [formGroup]="formGroup" [tenant]="(model | async).tenant.code" [validation-failures]="tenantValidationFailures"></sa-comp-account-tenant>
        <sa-comp-account-username [formGroup]="formGroup" [username]="(model | async).user.username" [placeholder]="'ACCOUNT.EMAIL_PLACEHOLDER' | translate"></sa-comp-account-username>
        <sa-comp-account-password [formGroup]="formGroup"></sa-comp-account-password>
        <sa-comp-account-password [formGroup]="formGroup" [name]="'passwordConfirmation'" [is-confirmation]="true" [placeholder]="'ACCOUNT.CONFIRM_PASSWORD_PLACEHOLDER' | translate"></sa-comp-account-password>
        <sa-comp-account-button [formGroup]="formGroup" [text]="'ACCOUNT.SIGN_UP_ACTION' | translate"></sa-comp-account-button>
    </form>
    <!-- ACCOUNT.SIGN-IN.FORM: END -->
    `
})
export class FormComponent implements OnInit {

    constructor(private element: ElementRef, public translate: TranslateService, private builder: FormBuilder) { }

    @Input('model')
    public model: Observable<AccountGetStarted.IState>;

    @Output('values-changed')
    public valuesChanged = new EventEmitter();

    @Output('sign-up-clicked')
    public signUpClicked = new EventEmitter();

    public formGroup: FormGroup;

    public tenantValidationFailures: Observable<Array<{[key: string]: boolean}>>;

    public passwordValidationFailures: Observable<Array<{[key: string]: boolean}>>;

    public ngOnInit(): void {
        // Focus the TENANT input field.
        Observable.timer(0, 300).first().subscribe(x => jQuery('input[class*=\'sa-comp-account-tenant\']').trigger('focus'));

        // Create observable validation failures.
        this.tenantValidationFailures = Validation.createValidationFailures(this.model, AccountGetStarted.ErrorAttribute.TENANT);
        this.passwordValidationFailures = Validation.createValidationFailures(this.model, AccountGetStarted.ErrorAttribute.PASSWORD);

        this.formGroup = this.builder.group({});
        this.formGroup.setAsyncValidators([this.validatePassword.bind(this)]);

        // Emit form values changes.
        this.formGroup
            .valueChanges
            .debounceTime(100)
            .subscribe(model => {
                this.formGroup.updateValueAndValidity({onlySelf: true, emitEvent: false});
                this.valuesChanged.emit(model);
            });
    }

    /* tslint:disable:no-unused-variable */
    private onSubmit(): void {
        const model: IFormModel = this.formGroup.value;
        this.signUpClicked.emit(model);

        Logger.Debug('FormComponent.onSubmit()', this.model);
    }
    /* tslint:enable:no-unused-variable */

    private validatePassword(): Observable<{[key: string]: boolean}> {
        return this.passwordValidationFailures
            .debounceTime(100)
            .first()
            .concatMap(x => !!x ? x : Observable.empty())
            .map(x => (x && !!x[AccountComponent.PasswordComponent.PASSWORD_AND_CONFIRMATION_NOT_EQUAL] ? x : null) as {[key: string]: boolean});
    }
}
