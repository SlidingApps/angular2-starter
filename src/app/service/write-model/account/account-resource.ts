
import { Observable} from 'rxjs';

import { RestService, IRestServiceConfiguration } from '../../rest/rest-service';
import { IPasswordLinkPayload } from './password-link';

export interface IAccountResource {
    postConfirmationLink(userName: string): Observable<boolean>;
    postPasswordLink(userName: string, payload: IPasswordLinkPayload): Observable<boolean>;
}

export class AccountResource implements IAccountResource {

    constructor(private service: RestService, private configuration: IRestServiceConfiguration) { }

    public static RESOURCE: string = 'accounts';
    private get connector() { return  this.service.host(this.configuration.host).api(this.configuration.api); }

    public postConfirmationLink(userName: string): Observable<boolean> {
        return this.connector
            .all(`${AccountResource.RESOURCE}/${userName}/confirmationlink`)
            .post(undefined)
            .map(x => true);
    }

    public postPasswordLink(userName: string, payload: IPasswordLinkPayload): Observable<boolean> {
        return this.connector
            .all(`${AccountResource.RESOURCE}/${userName}/passwordlink`)
            .post(payload)
            .map(x => true);
    }

}
