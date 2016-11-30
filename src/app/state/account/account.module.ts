
import { NgModule } from '@angular/core';
import { Logger } from '../../../app/application/shared.module';

import { GetStartedModule } from './get-started/get-started.module';
import { SignInModule } from './sign-in/sign-in.module';

@NgModule({
    imports: [
        GetStartedModule,
        SignInModule
    ],
    exports: [
        GetStartedModule,
        SignInModule
    ]
})
export class AccountModule {
    constructor() {
        Logger.Info('AccountModule', 'done');
    }
}
