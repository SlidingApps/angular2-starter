
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { Logger } from '../../../../app/application/shared.module';

import { SignInEffects } from './sign-in.effect';


@NgModule({
    imports: [
        EffectsModule.run(SignInEffects)
    ]
})
export class SignInModule {
    constructor() {
        Logger.Info('State:Account:SignInModule', 'done');
    }
}
