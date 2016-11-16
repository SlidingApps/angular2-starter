
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
                <ul class="more">
                    <li>Allready have an account? Sign in <a routerLink="/account/signin">here</a>.</li>
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
