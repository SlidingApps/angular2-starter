
import { NgModule } from '@angular/core';
import { Logger } from '../../../../app/application/shared.module';


@NgModule({
})
export class SignInModule {
    constructor() {
        Logger.Info('SignInModule', 'done');
    }
}
