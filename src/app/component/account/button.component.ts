
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'sa-comp-account-button',
    template: `
    <!-- COMPONENT.ACCOUNT.BUTTON: BEGIN -->
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4">
            <div [formGroup]="formGroup" class="form-group">
                <button type="submit" class="btn btn-orange submit" [disabled]="!formGroup.valid || isBusy" disabled>{{ text }}</button>
            </div>
        </div>
    </div>
    <!-- COMPONENT.ACCOUNT.BUTTON: END -->
    `
})
export class ButtonComponent {
    @Input()
    public formGroup: FormGroup;

    @Input()
    public text: string;

    @Input('is-busy')
    public isBusy: boolean;
}
