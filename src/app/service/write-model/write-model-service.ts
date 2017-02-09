
import { Injectable } from '@angular/core';

import { ApplicationConfig } from '../../../app/application/shared.module';
import { RestService, IRestServiceConfiguration } from '../rest/rest-service';
import { TenantResource, ITenantResource } from './tenant/tenant-resource';
import { PersonResource, IPersonResource } from './person/person-resource';

@Injectable()
export class WriteModelService {

    constructor(private service: RestService) {
        this.tenant = new TenantResource(this.service, WriteModelService.configuration);
        this.person = new PersonResource(this.service, WriteModelService.configuration);
    }

    private static get configuration(): IRestServiceConfiguration {
        return {
            host: {
                url: ApplicationConfig.WRITEMODEL_HOST_URL
            },
            api: {
                path: ApplicationConfig.WRITEMODEL_API_PATH
            }
        };
    }

    public tenant: ITenantResource;
    public person: IPersonResource;
}
