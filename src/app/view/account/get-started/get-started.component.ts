
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Logger } from '../../../foundation/logger';

import { ReadModelService } from '../../../service/service.module';
// import { GetStartedModel } from './get-started.model';

import { IFormModel } from './form/form.model';
import { State, GetStarted, GetStartedAction, SignIn } from '../../../state/state.module';

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
export class GetStartedComponent implements OnInit, OnDestroy {

    constructor(private readService: ReadModelService, private store: Store<State>) {
    }

    public model: Observable<GetStarted.IState>;

    public onSignUpClicked(model: IFormModel) {
        Logger.Info('GetStartedComponent.onSignUpClicked()', model);
        this.store.dispatch(new GetStartedAction.Update(model));
    }

    public ngOnInit() {
        let getStarted: Observable<GetStarted.IState> = this.store.select(x => x.GetStarted);
        let signIn: Observable<SignIn.IState> = this.store.select(x => x.SignIn);

        this.model = getStarted.let(x => x);
        this.model.subscribe(x => {
            Logger.Info('account.get-started.model', getStarted, signIn, x);
        });
    }

    public ngOnDestroy() {
        // this.model.$destroy();
    }
}
