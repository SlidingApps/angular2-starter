/// <reference path="../../../../index.d.ts" />

import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Logger, TranslateService } from '../../../../application/shared.module';
import { Observable } from 'rxjs';

import { GetStarted, Validation } from '../../../../state/state.module';
import { IFormModel } from './form.model';

import 'jquery';

@Component({
    selector: 'sa-account-get-started-form',
    template: `
    <!-- ACCOUNT.SIGN-IN.FORM: BEGIN -->
    <form #f="ngForm" [formGroup]="formGroup" (ngSubmit)="onSubmit(f.value)">
        <sa-comp-account-tenant [formGroup]="formGroup" [tenant]="(model | async).tenant" [validation-failures]="tenantValidationFailures"></sa-comp-account-tenant>
        <sa-comp-account-username [formGroup]="formGroup" [username]="(model | async).username" [placeholder]="'ACCOUNT.EMAIL_PLACEHOLDER' | translate"></sa-comp-account-username>
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

    @Input('model')
    public model: Observable<GetStarted.IState>;

    @Output('values-changed')
    public valuesChanged = new EventEmitter();

    @Output('sign-up-clicked')
    public signUpClicked = new EventEmitter();

    public formGroup: FormGroup;

    public tenantValidationFailures: Observable<Array<{[key: string]: boolean}>>;

    public ngOnInit(): void {
        // Focus the TENANT input field.
        Observable.timer(0, 300).first().subscribe(x => jQuery('input[class*=\'sa-comp-account-tenant\']').trigger('focus'));

        // Emit form values changes.
        this.formGroup
            .valueChanges
            .debounceTime(300)
            .subscribe(model => this.valuesChanged.emit(model));

        // Create an observable TENANT validation failures.
        this.tenantValidationFailures = Validation.createValidationFailures(this.model, GetStarted.ErrorAttribute.TENANT);
    }

    /* tslint:disable:no-unused-variable */
    private onSubmit(): void {
        const model: IFormModel = this.formGroup.value;
        this.signUpClicked.emit(model);

        Logger.Debug('FormComponent.onSubmit()', this.model);
    }
    /* tslint:enable:no-unused-variable */
}
