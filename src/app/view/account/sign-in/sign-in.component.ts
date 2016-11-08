
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Logger } from '../../../foundation/logger';

import { Model } from './model';

@Component({
    selector: 'sa-account-sign-in',
    template: `
    <!-- ACCOUNT.SIGN-IN: BEGIN -->
    <div class="page-login">
        <div class="loginContentWrap" style="padding: 0;">
            <div class="container-fluid">
                <form name="form" data-ng-submit="ctrl.submit(form)">
                  <sa-account-sign-in-form></sa-account-sign-in-form>
                </form>
                <ul class="more">
                    <li><a data-ui-sref="account.getStarted">Get started</a></li>
                    <li><a data-ui-sref="account.forgotPassword">Forgotten password</a></li>
                </ul>
            </div>
        </div>
    </div>    
    <!-- ACCOUNT.SIGN-IN: END -->
    `
})
export class SignInComponent implements OnDestroy {

    constructor() {
        Logger.LOG.info('constructor', this);
        this.model.username = 'username@taskrunner.io';
    }

    public model: Model = new Model();

    private modelChanged: Subscription =
        this.model.$propertyChanged$.filter(x => !!x).subscribe(x => console.log('changes', x));

    public ngOnDestroy() {
        this.modelChanged.unsubscribe();
        this.model.$destroy();
    }
}
