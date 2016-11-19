
import { Component } from '@angular/core';
import { Logger } from '../../../foundation/logger';

import { IFormModel} from './form/form.model';

@Component({
    selector: 'sa-account-sign-in',
    template: `
    <!-- ACCOUNT.SIGN-IN: BEGIN -->
    <div class="page-login">
        <div class="loginContentWrap" style="padding: 0;">
            <div class="container-fluid">
                <sa-account-forgot-password-form (send-link-clicked)="onSendLinkClicked($event)"></sa-account-forgot-password-form>
                <ul class="more">
                    <li><a routerLink="/account/getstarted">Get started</a></li>
                    <li><a routerLink="/account/signin">Forgotten password</a></li>
                </ul>
            </div>
        </div>
    </div>    
    <!-- ACCOUNT.SIGN-IN: END -->
    `
})
export class ForgotPasswordComponent {

    public onSendLinkClicked(model: IFormModel) {
        Logger.Info('ForgotPasswordComponent.onSendLinkClicked()',  model);
    }
}
