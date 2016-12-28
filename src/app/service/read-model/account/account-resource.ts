
import { Observable} from 'rxjs';

import { RestService, IRestServiceConfiguration } from '../../rest/rest-service';
import { DecryptedLink, IDecryptedLink } from './decrypted-link';


export interface IAccountResource {
    decryptLink(username: string, link: string): Observable<DecryptedLink>;
}

export class AccountResource implements IAccountResource {

    constructor(private service: RestService, private configuration: IRestServiceConfiguration) { }

    private static RESOURCE: string = 'accounts';
    private get connector() { return  this.service.host(this.configuration.host).api(this.configuration.api); }

    public decryptLink(username: string, link: string): Observable<DecryptedLink> {
        return this.connector
            .all(`${AccountResource.RESOURCE}/${username}/decryptions/${link}`)
            .get<IDecryptedLink>()
            .map(r => new DecryptedLink(r));
    }
}
