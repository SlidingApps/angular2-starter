
import { Component, OnDestroy } from '@angular/core';
import { Logger } from '../../../foundation/logger';

import { GetStartedModel } from './get-started.model';
import { IFormModel } from './form/form.model';

@Component({
    selector: 'sa-account-sign-in',
    template: `
    <!-- ACCOUNT.GET_STARTED: BEGIN -->
    <div class="page-login">
        <div class="loginContentWrap" style="padding: 0;">
            <div class="container-fluid">
                <sa-account-get-started-form (sign-up-clicked)="onSignUpClicked($event)"></sa-account-get-started-form>
                <ul class="more">
                    <li>{{ 'ACCOUNT.HAVE_ACCOUNT_QSTN' | translate }} <a routerLink="/account/signin">{{ 'ACCOUNT.SIGN_IN_LINK' | translate }}</a>.</li>
                </ul>
            </div>
        </div>
    </div>    
    <!-- ACCOUNT.GET-STARTED: END -->
    `
})
export class GetStartedComponent implements OnDestroy {

    public model: GetStartedModel = new GetStartedModel();

    public onSignUpClicked(model: IFormModel) {
        Logger.Info('GetStartedComponent.onSignUpClicked()', model);
    }

    public ngOnDestroy() {
        this.model.$destroy();
    }
}
