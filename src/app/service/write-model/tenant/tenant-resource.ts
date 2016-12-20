
import { Observable} from 'rxjs';

import { RestServiceConnector } from '../../rest/rest-service';
import { ICreateTenantPayload } from './create-tenant';
import { IConfirmTenantPayload } from './confirm-tenant';

export interface ITenantResource {
    postCreateTenant(payload: ICreateTenantPayload): Observable<boolean>;
    postTenantConfirmation(payload: IConfirmTenantPayload): Observable<boolean>;
}

export class TenantResource implements ITenantResource {
    constructor(private service: RestServiceConnector) { }

    public static RESOURCE: string = 'tenants';

    public postCreateTenant(payload: ICreateTenantPayload): Observable<boolean> {
        return this.service
            .all(`${TenantResource.RESOURCE}`)
            .post(payload)
            .map(x => true);
    }

    public postTenantConfirmation(payload: IConfirmTenantPayload): Observable<boolean> {
        return this.service
            .all(`${TenantResource.RESOURCE}/${payload.code}/confirmation`)
            .post(payload)
            .map(x => true);
    }
}
