
import { Component, OnDestroy } from '@angular/core';
import { Logger } from '../../../foundation/logger';

import { IFormModel } from './form/form.model';
import { SignInModel } from './sign-in.model';

@Component({
    selector: 'sa-account-sign-in',
    template: `
    <!-- ACCOUNT.SIGN-IN: BEGIN -->
    <div class="page-login sa-animated">
        <div class="loginContentWrap" style="padding: 0;">
            <div class="container-fluid">
                <sa-account-sign-in-form (sign-in-clicked)="onSignInClicked($event)"></sa-account-sign-in-form>
                <ul class="more">
                    <li><a routerLink="/account/getstarted">{{ 'ACCOUNT.GET_STARTED_LINK' | translate }}</a></li>
                    <li><a routerLink="/account/forgotpassword">{{ 'ACCOUNT.FORGOT_PASSWORD_LINK' | translate }}</a></li>
                </ul>
            </div>
        </div>
    </div>    
    <!-- ACCOUNT.SIGN-IN: END -->
    `
})
export class SignInComponent implements OnDestroy {

    public model: SignInModel = new SignInModel();

    public onSignInClicked(model: IFormModel) {
        Logger.Info('SignInComponent.onSignInClicked()', model);
    }

    public ngOnDestroy() {
        this.model.$destroy();
    }
}
