
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { Logger } from '../../../app/application/shared.module';

import { AuthenticationEffects } from './authentication.effect';


@NgModule({
    imports: [
        EffectsModule.run(AuthenticationEffects)
    ]
})
export class AuthenticationModule {
    constructor() {
        Logger.Info('State:AuthenticationModule', 'done');
    }
}
