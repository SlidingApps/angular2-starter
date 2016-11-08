
import { Component } from '@angular/core';

@Component({
    selector: 'sa-account-view',
    template: `
    <!-- ACCOUNT: BEGIN -->
    <div class="page-login">
        <div class="loginContentWrap" style="padding: 0;">
            <div class="container-fluid">
                <router-outlet></router-outlet>
            </div>
        </div>
    </div>
    <!-- ACCOUNT: END -->
    `
})
export class AccountComponent {
}
