
import { Observable} from 'rxjs';

import { RestServiceConnector } from '../../rest/rest-service';
import { DecryptedLink, IDecryptedLink } from './decrypted-link';


export interface IAccountResource {
    decryptLink(username: string, link: string): Observable<DecryptedLink>;
}

export class AccountResource implements IAccountResource {

    constructor(private service: RestServiceConnector) { }

    private static RESOURCE: string = 'accounts';

    public decryptLink(username: string, link: string): Observable<DecryptedLink> {
        return this.service
            .all(`${AccountResource.RESOURCE}/${username}/decryptions/${link}`)
            .get<IDecryptedLink>()
            .map(r => new DecryptedLink(r));
    }
}
