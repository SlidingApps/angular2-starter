
import { Injectable } from '@angular/core';

import { ApplicationConfig } from '../../../app/application/shared.module';
import { RestService, IRestServiceConfiguration } from '../rest/rest-service';
import { TenantResource, ITenantResource } from './tenant/tenant-resource';
import { PersonResource, IPersonResource } from './person/person-resource';

@Injectable()
export class ReadModelService {

    constructor(private service: RestService) {
        this.tenant = new TenantResource(this.service, ReadModelService.configuration);
        this.person = new PersonResource(this.service, ReadModelService.configuration);
    }

    private static get configuration(): IRestServiceConfiguration {
        return {
            host: {
                url: ApplicationConfig.READMODEL_HOST_URL
            },
            api: {
                path: ApplicationConfig.READMODEL_API_PATH
            }
        };
    }

    public tenant: ITenantResource;
    public person: IPersonResource;
}
