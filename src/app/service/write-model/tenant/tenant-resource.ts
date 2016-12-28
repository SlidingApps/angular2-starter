
import { Observable} from 'rxjs';

import { RestService, IRestServiceConfiguration } from '../../rest/rest-service';
import { ICreateTenantPayload } from './create-tenant';
import { IConfirmTenantPayload } from './confirm-tenant';

export interface ITenantResource {
    postCreateTenant(payload: ICreateTenantPayload): Observable<boolean>;
    postTenantConfirmation(payload: IConfirmTenantPayload): Observable<boolean>;
}

export class TenantResource implements ITenantResource {
    constructor(private service: RestService, private configuration: IRestServiceConfiguration) { }

    public static RESOURCE: string = 'tenants';
    private get connector() { return  this.service.host(this.configuration.host).api(this.configuration.api); }

    public postCreateTenant(payload: ICreateTenantPayload): Observable<boolean> {
        return this.connector
            .all(`${TenantResource.RESOURCE}`)
            .post(payload)
            .map(x => true);
    }

    public postTenantConfirmation(payload: IConfirmTenantPayload): Observable<boolean> {
        return this.connector
            .all(`${TenantResource.RESOURCE}/${payload.code}/confirmation`)
            .post(payload)
            .map(x => true);
    }
}
