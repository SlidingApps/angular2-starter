
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Logger } from '../../../../foundation/logger';

import { IFormModel } from './form.model';

@Component({
    selector: 'sa-account-forgot-password-form',
    template: `
    <!-- ACCOUNT.SIGN-IN.FORM: BEGIN -->
    <form [formGroup]="formGroup" (submit)="onSubmit()">        
        <sa-comp-account-username [formGroup]="formGroup"></sa-comp-account-username>
        <sa-comp-account-button [formGroup]="formGroup" [text]="'ACCOUNT.SEND_INSTRUCTIONS_ACTION' | translate"></sa-comp-account-button>
    </form>
    <!-- ACCOUNT.SIGN-IN.FORM: END -->
    `
})
export class FormComponent implements OnInit {

    constructor(builder: FormBuilder) {
        this.formGroup = builder.group({});
    }

    @Output('send-link-clicked')
    public sendLinkClicked = new EventEmitter();

    public formGroup: FormGroup;

    public ngOnInit(): void {
        Observable.timer(200, 50).first().subscribe(x => jQuery('input[class*=\'sa-comp-account-username\']').trigger('focus'));
    }

    /* tslint:disable:no-unused-variable */
    private onSubmit(): void {
        const model: IFormModel = this.formGroup.value;
        this.sendLinkClicked.emit(model);

        Logger.Debug('FormComponent.onSubmit()', model);
    }
    /* tslint:enable:no-unused-variable */
}
