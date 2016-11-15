
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'sa-account-sign-in-button',
    template: `
    <!-- ACCOUNT.SIGN-IN.BUTTON: BEGIN -->
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4">
            <div [formGroup]="formGroup" class="form-group">
                <button type="submit" class="btn btn-orange submit" [disabled]="!formGroup.valid">Sign in</button>
            </div>
        </div>
    </div>
    <!-- ACCOUNT.SIGN-IN.BUTTON: END -->
    `
})
export class ButtonComponent {
    @Input()
    public formGroup: FormGroup;
}
