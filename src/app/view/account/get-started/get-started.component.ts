
import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Logger } from '../../../foundation/logger';

import { ReadModelService } from '../../../service/service.module';
// import { GetStartedModel } from './get-started.model';

import { IFormModel } from './form/form.model';

import * as action from '../../../store/account/get-started/get-started.action';
import * as reducer from '../../../store/account/get-started/get-started.reducer';

@Component({
    selector: 'sa-account-sign-in',
    template: `
    <!-- ACCOUNT.GET_STARTED: BEGIN -->
    <div class="page-login">
        <div class="loginContentWrap" style="padding: 0;">
            <div>{{ (model | async).organization }}</div>
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

    constructor(private readService: ReadModelService, private store: Store<reducer.IState>) {
        this.store.subscribe(model => Logger.Info('account.get-started.state', model));
        this.model = this.store.let(x => x);
    }

    public model: Observable<reducer.IState>;

    public onSignUpClicked(model: IFormModel) {
        Logger.Info('GetStartedComponent.onSignUpClicked()', model);
        this.store.dispatch(new action.Update(model));
    }

    public ngOnDestroy() {
        // this.model.$destroy();
    }
}
