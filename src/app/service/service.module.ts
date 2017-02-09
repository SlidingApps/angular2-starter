
import { NgModule } from '@angular/core';

import { Logger } from '../../app/application/shared.module';
import { RestService } from './rest/rest-service';
import { AuthenticationService } from './authentication/authentication-service';
import { ReadModelService } from './read-model/read-model-service';
import { WriteModelService } from './write-model/write-model-service';

@NgModule({
    providers: [
        RestService,
        AuthenticationService,
        ReadModelService,
        WriteModelService
    ]
})
export class ServiceModule {
    constructor() {
        Logger.Info('Service:ServiceModule', 'done');
    }
}

export { RestService, AuthenticationService, ReadModelService, WriteModelService }
