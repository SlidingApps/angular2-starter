
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'account',
                component: AccountComponent,
                children: [
                    {path: '', redirectTo: 'signin', pathMatch: 'full'},
                    {path: 'signin', component: SignInComponent},
                    {path: 'getstarted', component: GetStartedComponent}
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AccountRouterModule { }
