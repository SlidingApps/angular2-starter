/// <reference path="../../../../index.d.ts" />

import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, AbstractControl} from '@angular/forms';
import { Logger, TranslateService } from '../../../../application/shared.module';
import {Observable, Subscription, BehaviorSubject} from 'rxjs';

import { GetStarted, IStateError } from '../../../../state/state.module';
import { IFormModel } from './form.model';

import 'jquery';

@Component({
    selector: 'sa-account-get-started-form',
    template: `
    <!-- ACCOUNT.SIGN-IN.FORM: BEGIN -->
    <form #f="ngForm" [formGroup]="formGroup" (ngSubmit)="onSubmit(f.value)">
        <sa-comp-account-organization [formGroup]="formGroup" [organization]="(model | async).organization" [validation-errors]="organizationErrors"></sa-comp-account-organization>
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
    public valuesChanged = new EventEmitter()

    @Output('sign-up-clicked')
    public signUpClicked = new EventEmitter();

    public formGroup: FormGroup;

    public ngOnInit(): void {
        Observable.timer(0, 300).first().subscribe(x => jQuery('input[class*=\'sa-comp-account-organization\']').trigger('focus'));

        this.formGroup
            .valueChanges
            .debounceTime(300)
            .subscribe(model => this.valuesChanged.emit(model));

        this.organizationErrors =
            this.model
                // .filter(([model]: [GetStarted.IState]) => !!model && !!model.$errors)
                .map(model => model.$errors)
                .map(errors => errors.filter(error => error.attribute === GetStarted.ErrorAttribute.ORGANIZATION))
                .map(errors => {
                    if (!!errors.length) {
                        return errors.map(error => { return { [error.token]: true }; } );
                    } else {
                        return null;
                    }
                })
                // .subscribe(x => console.log(x))
        // .map(([model]: [GetStarted.IState]) => model.$errors)
        // .map(errors => errors.filter(error => error.attribute === 'organization'))
        // .map(errors => {
        //     if (!!errors.length) {
        //         return errors.map(error => {
        //             return { [error.token]: true }; }
        //         );
        //     } else {
        //         return { 'test': false };
        //     }
        // })
        ;
    }

    public organizationErrors: Observable<Array<{[key: string]: boolean}>>;

    /* tslint:disable:no-unused-variable */
    private onSubmit(): void {
        const model: IFormModel = this.formGroup.value;
        this.signUpClicked.emit(model);

        Logger.Debug('FormComponent.onSubmit()', this.model);
    }
    /* tslint:enable:no-unused-variable */
}
