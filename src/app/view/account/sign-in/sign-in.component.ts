
import { Component, OnDestroy } from '@angular/core';

import { Logger } from '../../../foundation/logger';
import { SignInModel } from './sign-in.model';

@Component({
    selector: 'sa-account-sign-in',
    template: `
    <!-- ACCOUNT.SIGN-IN: BEGIN -->
    <div class="page-login">
        <div class="loginContentWrap" style="padding: 0;">
            <div class="container-fluid">
                <sa-account-sign-in-form [model]="model" (submit)="onSubmitModel(model)"></sa-account-sign-in-form>
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
export class SignInComponent implements OnDestroy {

    public model: SignInModel = new SignInModel();

    public onSubmitModel(model: SignInModel) {
        Logger.Info('SignInComponent.onSubmit()', model);
    }

    public ngOnDestroy() {
        this.model.$destroy();
    }
}
