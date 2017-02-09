
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Component } from '@angular/core';
import { State, AuthenticationModel } from '../../state/state.module';

@Component({
    selector: 'sa-layout-page',
    template: `
    <!-- LAYOUT.PAGE: BEGIN -->
    <sa-layout-navigation></sa-layout-navigation>
    <sa-layout-content></sa-layout-content>
    <!-- LAYOUT.PAGE: END -->
    `
})
export class PageComponent implements OnInit {
    constructor(private router: Router, private store: Store<State>) { }

    public state$: Observable<AuthenticationModel.IState>;

    public ngOnInit() {
        this.state$ = this.store.select(x => x.Authentication).let(x => x);
        this.state$.debounceTime(200).subscribe(state => {
            if (state.user && state.user.username) {
                this.router.navigate(['']);
            }
        });
    }
}
