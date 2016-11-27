
import { Injectable } from '@angular/core';

import { ApplicationConfig } from '../../../app/application/shared.module';
import { RestService } from '../rest/rest-service';
import { TenantResource, ITenantResource } from './tenant/tenant-resource';
import { AccountResource, IAccountResource } from './account/account-resource';

@Injectable()
export class ReadModelService {

    constructor(private restService: RestService) {
        this.tenant = new TenantResource(this.service);
        this.account = new AccountResource(this.service);
    }

    private get hostUrl(): string { return ApplicationConfig.READMODEL_HOST; }
    private get apiPath(): string { return ApplicationConfig.READMODEL_API; }
    private get service() { return  this.restService.host(this.hostUrl).api(this.apiPath); }

    public tenant: ITenantResource;
    public account: IAccountResource;
}
