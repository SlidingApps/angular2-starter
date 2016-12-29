
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Logger } from '../../../foundation/logger';

import { IFormModel } from './form/form.model';
import { State, AccountSignIn, AccountSignInAction } from '../../../state/state.module';

@Component({
    selector: 'sa-account-sign-in',
    template: `
    <!-- ACCOUNT.SIGN-IN: BEGIN -->
    <div class="page-login sa-animated">
        <div class="loginContentWrap" style="padding: 0;">
            <div class="container-fluid">
                <sa-account-sign-in-form [model]="state$" (sign-in-clicked)="onSignInClicked($event)"></sa-account-sign-in-form>
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
export class SignInComponent implements OnInit {

    constructor(private store: Store<State>) { }

    public state$: Observable<AccountSignIn.IState>;

    public ngOnInit() {
        this.state$ = this.store.select(x => x.AccountSignIn).let(x => x);
        this.state$.subscribe(state => {
            state.password = null;
        });
    }

    public onSignInClicked(model: IFormModel) {
        this.signIn(model);
    }

    private signIn(model: IFormModel) {
        Logger.Debug('SignInComponent.signIn()', model);
        if (model) {
            this.store.dispatch(new AccountSignInAction.TrySignIn(model));
        }
    }
}
