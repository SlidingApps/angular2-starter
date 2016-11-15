
import { Component, OnDestroy } from '@angular/core';

import { Logger } from '../../../foundation/logger';
import { GetStartedModel } from './get-started.model';

@Component({
    selector: 'sa-account-sign-in',
    template: `
    <!-- ACCOUNT.GET_STARTED: BEGIN -->
    <div class="page-login">
        <div class="loginContentWrap" style="padding: 0;">
            <div class="container-fluid">
                <sa-account-get-started-form [model]="model" (submit)="onSubmitModel(model)"></sa-account-get-started-form>
                <ul class="more">
                    <li><a routerLink="/account/signin">Get started</a></li>
                    <li><a routerLink="/account/signin">Forgotten password</a></li>
                </ul>
            </div>
        </div>
    </div>    
    <!-- ACCOUNT.GET-STARTED: END -->
    `
})
export class GetStartedComponent implements OnDestroy {

    public model: GetStartedModel = new GetStartedModel();

    public onSubmitModel(model: GetStartedModel) {
        Logger.Info('GetStartedComponent.onSubmit()', model);
    }

    public ngOnDestroy() {
        this.model.$destroy();
    }
}
