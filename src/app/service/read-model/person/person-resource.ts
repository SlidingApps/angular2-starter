
import { Observable} from 'rxjs';

import { RestService, IRestServiceConfiguration } from '../../rest/rest-service';
import { DecryptedLink, IDecryptedLink } from './decrypted-link';


export interface IPersonResource {
    decryptLink(username: string, link: string): Observable<DecryptedLink>;
}

export class PersonResource implements IPersonResource {

    constructor(private service: RestService, private configuration: IRestServiceConfiguration) { }

    private static RESOURCE: string = 'persons';
    private get connector() { return  this.service.host(this.configuration.host).api(this.configuration.api); }

    public decryptLink(username: string, link: string): Observable<DecryptedLink> {
        return this.connector
            .all(`${PersonResource.RESOURCE}/${username}/decryptions/${link}`)
            .get<IDecryptedLink>()
            .map(r => new DecryptedLink(r));
    }

    public getPerson(username: string): Observable<DecryptedLink> {
        return this.connector
            .all(`${PersonResource.RESOURCE}/${username}`)
            .get<IDecryptedLink>()
            .map(r => new DecryptedLink(r));
    }
}
