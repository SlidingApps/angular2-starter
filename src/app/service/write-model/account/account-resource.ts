
import { Observable} from 'rxjs';

import { RestServiceConnector } from '../../rest/rest-service';
import { IPasswordLinkPayload } from './password-link';

export interface IAccountResource {
    postConfirmationLink(userName: string): Observable<boolean>;
    postPasswordLink(userName: string, payload: IPasswordLinkPayload): Observable<boolean>;
}

export class AccountResource implements IAccountResource {

    constructor(private service: RestServiceConnector) { }

    public static RESOURCE: string = 'accounts';

    public postConfirmationLink(userName: string): Observable<boolean> {
        return this.service
            .all(`${AccountResource.RESOURCE}/${userName}/confirmationlink`)
            .post(undefined)
            .map(x => true);
    }

    public postPasswordLink(userName: string, payload: IPasswordLinkPayload): Observable<boolean> {
        return this.service
            .all(`${AccountResource.RESOURCE}/${userName}/passwordlink`)
            .post(payload)
            .map(x => true);
    }

}
