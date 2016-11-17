
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Logger } from '../../../../foundation/logger';
import { Subscription } from 'rxjs';

import * as $ from 'jquery';

import { IGetGetStartedFormModel } from './form.model';

@Component({
    selector: 'sa-account-get-started-form',
    template: `
    <!-- ACCOUNT.SIGN-IN.FORM: BEGIN -->
    <form #f="ngForm" [formGroup]="formGroup" (ngSubmit)="onSubmit(f.value)">
        <sa-comp-account-organization [formGroup]="formGroup"></sa-comp-account-organization>
        <sa-comp-account-username [formGroup]="formGroup"></sa-comp-account-username>
        <sa-comp-account-password [formGroup]="formGroup"></sa-comp-account-password>
        <sa-comp-account-button [formGroup]="formGroup" [text]="'Sign up'"></sa-comp-account-button>
    </form>
    <!-- ACCOUNT.SIGN-IN.FORM: END -->
    `
})
export class FormComponent implements OnInit, OnDestroy {

    constructor(private element: ElementRef, builder: FormBuilder) {
        this.formGroup = builder.group({});

        this.formValueChanged =
            this.formGroup.valueChanges
                .debounceTime(200)
                .subscribe(x => this.onValuesChanged(x as IGetGetStartedFormModel));
    }

    @Input()
    public model: IGetGetStartedFormModel;

    @Output()
    public submit = new EventEmitter();

    public formGroup: FormGroup;
    public formValueChanged: Subscription;

    public ngOnInit(): void {
        console.log('element', $(this.element.nativeElement).find("input[autofocus='autofocus']"));
        $('input[autofocus]').trigger('focus');
    }

    public ngOnDestroy() {
        this.formValueChanged.unsubscribe();
    }

    private onSubmit(value: any): void {
        console.log('submit', value);
        this.submit.emit(value);
    }

    private onValuesChanged(model: IGetGetStartedFormModel): void {
        Logger.Debug('FormComponent.formValueChanged()', model);

        this.model.organization = model.organization;
        this.model.username = model.username;
        this.model.password = model.password;
    }
}
