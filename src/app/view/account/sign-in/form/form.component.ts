
import { Component, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Logger } from '../../../../foundation/logger';
import { Subscription } from 'rxjs';

import { ISignInFormModel } from './form.model';

@Component({
    selector: 'sa-account-sign-in-form',
    template: `
    <!-- ACCOUNT.SIGN-IN.FORM: BEGIN -->
    <form [formGroup]="formGroup">
        <sa-account-sign-in-username [formGroup]="formGroup"></sa-account-sign-in-username>
        <sa-account-sign-in-password [formGroup]="formGroup"></sa-account-sign-in-password>
        <sa-account-sign-in-button [formGroup]="formGroup"></sa-account-sign-in-button>
    </form>
    <!-- ACCOUNT.SIGN-IN.FORM: END -->
    `
})
export class FormComponent implements OnDestroy {

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

    public ngOnDestroy() {
        this.formValueChanged.unsubscribe();
    }

    private onValuesChanged(model: ISignInFormModel): void {
        Logger.Debug('FormComponent.formValueChanged()', model);

        this.model.username = model.username;
        this.model.password = model.password;
    }
}
