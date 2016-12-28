
import { Observable } from 'rxjs';

import { RestService, IRestServiceConfiguration } from '../../rest/rest-service';
import { TenantCodeAvailability, ITenantCodeAvailability } from './tenant-code-availability';


export interface ITenantResource {
    getTenantCodeAvailability(code: string): Observable<TenantCodeAvailability>;
}

export class TenantResource implements ITenantResource {

    constructor(private service: RestService, private configuration: IRestServiceConfiguration) { }

    private static RESOURCE: string = 'tenants';
    private get connector() { return  this.service.host(this.configuration.host).api(this.configuration.api); }

    public getTenantCodeAvailability(code: string): Observable<TenantCodeAvailability> {
        return this.connector
            .all(`${TenantResource.RESOURCE}/${code}/availability`)
            .get<ITenantCodeAvailability>()
            .map(r => new TenantCodeAvailability(r));
    }
}
