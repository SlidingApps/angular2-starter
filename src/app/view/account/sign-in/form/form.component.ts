
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Logger } from '../../../../foundation/logger';
import { Subscription } from 'rxjs';

import { ISignInFormModel } from './form.model';

@Component({
    selector: 'sa-account-sign-in-form',
    template: `
    <!-- ACCOUNT.SIGN-IN.FORM: BEGIN -->
    <form [formGroup]="formGroup">
        <sa-comp-account-username [formGroup]="formGroup"></sa-comp-account-username>
        <sa-comp-account-password [formGroup]="formGroup"></sa-comp-account-password>
        <sa-comp-account-button [formGroup]="formGroup" [text]="'Sign up'"></sa-comp-account-button>
    </form>
    <!-- ACCOUNT.SIGN-IN.FORM: END -->
    `
})
export class FormComponent implements OnInit, OnDestroy {

    constructor(builder: FormBuilder) {
        this.formGroup = builder.group({});

        this.formValueChanged =
            this.formGroup.valueChanges
                .debounceTime(200)
                .subscribe(x => this.onValuesChanged(x as ISignInFormModel));
    }

    @Input()
    public model: ISignInFormModel;

    @Output()
    public submit = new EventEmitter();

    public formGroup: FormGroup;
    public formValueChanged: Subscription;

    public ngOnInit(): void {
        jQuery('input[class*=\'sa-comp-account-username\']').trigger('focus');
    }

    public ngOnDestroy(): void {
        this.formValueChanged.unsubscribe();
    }

    private onValuesChanged(model: ISignInFormModel): void {
        Logger.Debug('FormComponent.formValueChanged()', model);

        this.model.username = model.username;
        this.model.password = model.password;
    }
}
