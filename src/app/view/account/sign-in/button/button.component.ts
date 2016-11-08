
import { Component } from '@angular/core';

@Component({
    selector: 'sa-account-sign-in-button',
    template: `
    <!-- ACCOUNT.SIGN-IN.BUTTON: BEGIN -->
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4">
            <div class="form-group">
                <button type="submit" class="btn btn-orange submit" data-ng-disabled="ctrl.isBusy || ctrl.form.$invalid">Sign in</button>
            </div>
        </div>
    </div>
    <!-- ACCOUNT.SIGN-IN.BUTTON: END -->
    `
})
export class ButtonComponent { }
