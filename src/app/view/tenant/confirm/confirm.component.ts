
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State, TenantConfirm } from '../../../state/state.module';

@Component({
    selector: 'sa-tenant-confirm',
    template: `
    <!-- TENANT.CONFIRM: BEGIN -->
    <div class="page-login sa-animated">
        <div class="loginContentWrap" style="padding: 0;">
            <div class="container-fluid">
            CONFIRMATION
            </div>
        </div>
    </div>    
    <!-- TENANT.CONFIRM: END -->
    `
})
export class ConfirmComponent implements OnInit {

    constructor(private store: Store<State>) { }

    public state$: Observable<TenantConfirm.IState>;

    public ngOnInit() {
        this.state$ = this.store.select(x => x.TenantConfirm).let(x => x);
        this.state$.subscribe(state => {
            state.confirmation = null;
        });
    }
}
