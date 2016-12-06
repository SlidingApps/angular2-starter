
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Logger } from '../../../foundation/logger';

import { ReadModelService } from '../../../service/service.module';

import { IFormModel } from './form/form.model';
import { State, GetStarted, GetStartedAction } from '../../../state/state.module';

@Component({
    selector: 'sa-account-sign-in',
    template: `
    <!-- ACCOUNT.GET_STARTED: BEGIN -->
    <div class="page-login">
        <div class="loginContentWrap" style="padding: 0;">
            <div class="container-fluid">
                <sa-account-get-started-form [model]="state$" (values-changed)="onValuesChanged($event)" (sign-up-clicked)="onSignUpClicked($event)"></sa-account-get-started-form>
                <ul class="more">
                    <li>{{ 'ACCOUNT.HAVE_ACCOUNT_QSTN' | translate }} <a routerLink="/account/signin">{{ 'ACCOUNT.SIGN_IN_LINK' | translate }}</a>.</li>
                </ul>
            </div>
        </div>
    </div>    
    <!-- ACCOUNT.GET-STARTED: END -->
    `
})
export class GetStartedComponent implements OnInit {

    constructor(private readService: ReadModelService, private store: Store<State>) {
    }

    public state$: Observable<GetStarted.IState>;

    public ngOnInit() {
        this.state$ = this.store.select(x => x.GetStarted).let(x => x);
        this.state$.subscribe(state => {
            state.password = null;
            state.passwordConfirmation = null;
        });
    }

    public onValuesChanged(model: IFormModel) {
        this.updateState(model);
    }

    public onSignUpClicked(model: IFormModel) {
        this.updateState(model);
    }

    private updateState(model: IFormModel) {
        Logger.Debug('GetStartedComponent.updateState()', model);
        if (model) {
            this.store.dispatch(new GetStartedAction.Update(model));
        }
    }
}
