/// <reference path="../../../../index.d.ts" />

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Logger } from '../../../../foundation/logger';
import { Observable } from 'rxjs';

import { AccountSignIn } from '../../../../state/state.module';
import { IFormModel } from './form.model';

@Component({
    selector: 'sa-account-sign-in-form',
    template: `
    <!-- ACCOUNT.SIGN-IN.FORM: BEGIN -->
    <form [formGroup]="formGroup" (submit)="onSubmit()">        
        <sa-comp-account-username [formGroup]="formGroup" [username]="(model | async).username"></sa-comp-account-username>
        <sa-comp-account-password [formGroup]="formGroup"></sa-comp-account-password>
        <sa-comp-account-button [formGroup]="formGroup" [text]="'ACCOUNT.SIGN_IN_ACTION' | translate" [is-busy]="isBusy"></sa-comp-account-button>
    </form>
    <!-- ACCOUNT.SIGN-IN.FORM: END -->
    `
})
export class FormComponent implements OnInit {

    constructor(builder: FormBuilder) {
        this.formGroup = builder.group({});
    }

    @Input('model')
    public model: Observable<AccountSignIn.IState>;

    @Input('is-busy')
    public isBusy: boolean;

    @Output('sign-in-clicked')
    public signInClicked = new EventEmitter();

    public formGroup: FormGroup;

    public ngOnInit(): void {
        Observable.timer(200, 50).first().subscribe(x => jQuery('input[class*=\'sa-comp-person-username\']').trigger('focus'));
    }

    /* tslint:disable:no-unused-variable */
    private onSubmit(): void {
        const model: IFormModel = this.formGroup.value;
        this.signInClicked.emit(model);

        Logger.Debug('FormComponent.onSubmit()', model);
    }
    /* tslint:enable:no-unused-variable */
}
