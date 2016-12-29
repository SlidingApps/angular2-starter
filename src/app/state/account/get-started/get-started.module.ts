
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { Logger } from '../../../../app/application/shared.module';

import { GetStartedEffects } from './get-started.effect';

@NgModule({
    imports: [
        EffectsModule.run(GetStartedEffects)
    ]
})
export class GetStartedModule {
    constructor() {
        Logger.Info('State:Account:GetStartedModule', 'done');
    }
}
