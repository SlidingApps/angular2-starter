
import { NgModule } from '@angular/core';

import { Logger } from '../../app/application/shared.module';
import { RestService } from './rest/rest-service';
import { ReadModelService } from './read-model/read-model-service';
import { WriteModelService } from './write-model/write-model-service';

@NgModule({
    providers: [
        RestService,
        ReadModelService,
        WriteModelService
    ]
})
export class ServiceModule {
    constructor() {
        Logger.Info('Service:ServiceModule', 'done');
    }
}

export { RestService, ReadModelService, WriteModelService }
