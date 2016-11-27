
import { Observable } from 'rxjs';

import { RestServiceConnector } from '../../rest/rest-service';
import { TenantCodeAvailability, ITenantCodeAvailability } from './tenant-code-availability';


export interface ITenantResource {
    getTenantCodeAvailability(code: string): Observable<TenantCodeAvailability>;
}

export class TenantResource implements ITenantResource {

    constructor(private service: RestServiceConnector) { }

    private static RESOURCE: string = 'tenants';

    public getTenantCodeAvailability(code: string): Observable<TenantCodeAvailability> {
        return this.service
            .all(`${TenantResource.RESOURCE}/${code}/availability`)
            .get<ITenantCodeAvailability>()
            .map(r => new TenantCodeAvailability(r));
    }
}
