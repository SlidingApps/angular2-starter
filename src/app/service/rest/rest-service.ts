
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Logger } from '../../application/shared.module';

@Injectable()
export class RestService {

    constructor(private $http: Http) {
        this.defaultConfiguration = new RestServiceConfiguration();
    }

    public static get DELIMITER(): string { return '/'; };

    public configuration: RestServiceConfiguration;
    public defaultConfiguration: RestServiceConfiguration;

    /** Sets the host options, ex. URL. */
    public host(options: string|IHostOptions): RestServiceConnector {
        this.configuration = Object.assign({}, this.defaultConfiguration);
        let _options: IHostOptions = typeof options === 'string' ? { url: options } : options;
        let configuration: RestServiceConfiguration = Object.assign({}, this.configuration);
        configuration.host.url = _options.url;

        let connector: RestServiceConnector = new RestServiceConnector(this.$http, configuration);

        return connector;
    }

    /** Sets the API options, ex. path. */
    public api(options: string|IApiOptions): RestServiceConnector {
        this.configuration = Object.assign({}, this.defaultConfiguration);
        let _options: IApiOptions = typeof options === 'string' ? { path: options } : options;
        let configuration: RestServiceConfiguration = Object.assign({}, this.configuration);
        configuration.api.path = _options.path;
        configuration.api.values = _options.values;

        let connector: RestServiceConnector = new RestServiceConnector(this.$http, configuration);

        return connector;
    }

    /** Gets a collection of the specified resource. */
    public all<TRepresentation>(options: string|IResourceOptions): RestServiceEndpoint {
        this.configuration = Object.assign({}, this.defaultConfiguration);
        let connector: RestServiceConnector = new RestServiceConnector(this.$http, this.configuration);

        return connector.all<TRepresentation>(options);
    }

    /** Gets a resource identified by the given identifier. */
    public one<TRepresentation>(name: string, identifier: string): RestServiceEndpoint {
        this.configuration = Object.assign({}, this.defaultConfiguration);
        let connector: RestServiceConnector = new RestServiceConnector(this.$http, this.configuration);

        return connector.one<TRepresentation>(name, identifier);
    }
}

export class RestServiceConnector {

    constructor(private $http: Http, private configuration: RestServiceConfiguration) {
    }

    public host(options: string|IHostOptions): RestServiceConnector {
        let _options: IHostOptions = typeof options === 'string' ? { url: options } : options;
        let configuration: RestServiceConfiguration = Object.assign({}, this.configuration);
        configuration.host.url = _options.url;

        return this;
    }

    public api(options: string|IApiOptions): RestServiceConnector {
        let _options: IApiOptions = typeof options === 'string' ? { path: options } : options;
        let configuration: RestServiceConfiguration = Object.assign({}, this.configuration);
        configuration.api.path = _options.path;
        configuration.api.values = _options.values;

        return this;
    }

    public all<TRepresentation>(options: string|IResourceOptions): RestServiceEndpoint {
        let endpointUrl: string = RestServiceUtils.BuildEndpointUrl(this.configuration);
        let endpoint: RestServiceEndpoint = new RestServiceEndpoint(this.$http, new EndpointConfiguration(endpointUrl));
        endpoint.all(options);

        return endpoint;
    }

    public one<TRepresentation>(name: string, identifier: string): RestServiceEndpoint {
        let endpointUrl: string = RestServiceUtils.BuildEndpointUrl(this.configuration);
        let endpoint: RestServiceEndpoint = new RestServiceEndpoint(this.$http, new EndpointConfiguration(endpointUrl));
        endpoint.one(name, identifier);

        return endpoint;
    }
}

export class RestServiceEndpoint {

    constructor(private $http: Http, private configuration: EndpointConfiguration) {
        const headers = new Headers();
        headers.append('Accept', 'application/hal+json');
        headers.append('Content-Type', 'application/json; charset=utf-8');

        this.requestConfiguration = {
            headers: headers
        };
    }

    private requestConfiguration: RequestOptionsArgs;

    private resources: Array<ResourceConfiguration> = [];
    private queryString: string = '';

    /* tslint:disable:no-any */
    public query(query: any): RestServiceEndpoint {
        this.queryString = RestServiceUtils.BuildQueryString(query);

        return this;
    }
    /* tslint:enable:no-any */

    public all<TRepresentation>(options: string|IResourceOptions): RestServiceEndpoint {
        let _options: IResourceOptions = typeof options === 'string' ? { name: options.toString() } : options;
        let configuration: ResourceConfiguration = new ResourceConfiguration(_options.name);

        this.resources.push(configuration);

        return this;
    }

    public one<TRepresentation>(name: string, identifier?: string): RestServiceEndpoint {
        let _options: IResourceOptions = { name: name, id: identifier };
        let configuration: ResourceConfiguration = new ResourceConfiguration(_options.name, _options.id);

        this.resources.push(configuration);

        return this;
    }

    public get<TRepresentation>(cache: boolean = false): Observable<TRepresentation> {
        let url: string = this.configuration.url;
        this.resources.forEach((resource: ResourceConfiguration) => {
            url = url + RestService.DELIMITER + resource.name + (resource.id ? '/' + resource.id : '');
        });

        url = url + this.queryString;
        Logger.Sinks['rest'].Debug('RestServiceEndpoint.get()', url);

        /* tslint:disable:no-any */
        return this.$http.get(url, this.requestConfiguration)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'server error'));
        /* tslint:enable:no-any */
    }

    public post<TPayload>(instance: TPayload): Observable<TPayload> {
        let url: string = this.configuration.url;
        this.resources.forEach((resource: ResourceConfiguration) => {
            url = url + RestService.DELIMITER + resource.name + (resource.id ? '/' + resource.id : '');
        });

        url = url + this.queryString;
        Logger.Sinks['rest'].Debug('RestServiceEndpoint.post()', url, instance);

        /* tslint:disable:no-any */
        return this.$http.post(url, instance, this.requestConfiguration)
            .map((response: Response) => instance)
            .catch((error: any) => Observable.throw(error.json().error || 'server error'));
        /* tslint:enable:no-any */
    }

    public put<TPayload>(instance?: TPayload): Observable<TPayload> {
        let url: string = this.configuration.url;
        this.resources.forEach((resource: ResourceConfiguration) => {
            url = url + RestService.DELIMITER + resource.name + (resource.id ? '/' + resource.id : '');
        });

        url = url + this.queryString;
        Logger.Sinks['rest'].Debug('RestServiceEndpoint.put()', url, instance);

        /* tslint:disable:no-any */
        return this.$http.put(url, instance, this.requestConfiguration)
            .map((response: Response) => instance)
            .catch((error: any) => Observable.throw(error.json().error || 'server error'));
        /* tslint:enable:no-any */
    }


    public delete<TRepresentation>(): Observable<void> {
        let url: string = this.configuration.url;
        this.resources.forEach((resource: ResourceConfiguration) => {
            url = url + RestService.DELIMITER + resource.name + (resource.id ? '/' + resource.id : '');
        });

        url = url + this.queryString;
        Logger.Sinks['rest'].Debug('RestServiceEndpoint.delete()', url);

        /* tslint:disable:no-any */
        return this.$http.delete(url, this.requestConfiguration)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'server error'));
        /* tslint:any:no-any */
    }
}

// -------------------------------------------------------------------------------------------------------------
// HELPER, OPTIONS & CONFIGURATIONS
// -------------------------------------------------------------------------------------------------------------

class RestServiceUtils {

    public static BuildEndpointUrl(configuration: RestServiceConfiguration): string {
        if (configuration.host.url[configuration.host.url.length - 1] === '/') {
            configuration.host.url = configuration.host.url.substr(0, configuration.host.url.length - 1);
        }

        if (configuration.api.path[0] === '/') {
            configuration.api.path = configuration.api.path.substr(1);
        }

        if (configuration.api.path[configuration.api.path.length - 1] === '/') {
            configuration.api.path = configuration.api.path.substr(0, configuration.api.path.length - 1);
        }

        let endpoint: string = configuration.host.url + RestService.DELIMITER + configuration.api.path;

        return endpoint;
    }

    /* tslint:disable:no-any */
    public static BuildQueryString(query: any): string {
        let queryString: string = '';

        if (query) {
            query =
                Object.keys(query)
                    .map((key: string): IKeyValuePair<any> => {
                        return {
                            key: key,
                            value: query[key]
                        };
                    })
                    .filter((pair: IKeyValuePair<any>) => {
                        /* tslint:disable:no-null-keyword */
                        return pair.value !== null && pair.value !== undefined;
                        /* tslint:enable:no-null-keyword */
                    })
                    .map((pair: IKeyValuePair<any>) => {
                        if (pair.value instanceof Date) {
                            pair.value = pair.value.toISOString();
                        }

                        if (pair.value instanceof Array) {
                            if (pair.value.length === 0) { return pair.key.toLowerCase() + '='; }
                            return pair.value.map(x => pair.key.toLowerCase() + '=' + encodeURIComponent(x)).join('&');
                        }

                        return pair.key.toLowerCase() + '=' + encodeURIComponent(pair.value);
                    });

            if (query.length > 0) {
                queryString = query.reduce((previous: string, current: string): string => {
                    return previous + '&' + current;
                });
            }
        }

        return queryString !== '' ? '?' + queryString : queryString;
    }
    /* tslint:enable:no-any */
}

interface IKeyValuePair<TValue> {
    key: string;
    value: TValue;
}

export interface IEndpointOptions {
    url: string;
}

export interface IEndpointConfiguration extends IEndpointOptions {
    url: string;
}

export class EndpointConfiguration implements IEndpointConfiguration {

    constructor(url: string) {
        this.url = url;
    }

    public url: string;
}

export interface IResourceOptions {
    name: string;
    id?: string;
}

export interface IResourceConfiguration extends IResourceOptions {
    name: string;
    id: string;
}

export class ResourceConfiguration implements IResourceConfiguration {

    constructor(name: string, id?: string) {
        this.name = name;
        this.id = id;
    }

    public name: string;
    /* tslint:disable:no-null-keyword */
    public id: string = null;
    /* tslint:enable:no-null-keyword */
}

export interface IHostOptions {
    url: string;
}

export interface IHostConfiguration extends IHostOptions {
    url: string;
}

export interface IApiOptions {
    path: string;

    /* tslint:disable:no-any */
    values?: any;
    /* tslint:enable:no-any */
}

export interface IApiConfiguration extends IApiOptions {
    path: string;
    /* tslint:disable:no-any */
    values: any;
    /* tslint:enable:no-any */
}

export interface IRestServiceConfiguration {
    host: IHostConfiguration;
    api: IApiConfiguration;
}

export class HostConfiguration implements IHostConfiguration {
    public url: string = '/';
}

export class ApiConfiguration implements IApiConfiguration {
    public path: string = 'api';
    /* tslint:disable:no-null-keyword */
    /* tslint:disable:no-any */
    public values: any = null;
    /* tslint:enable:no-any */
    /* tslint:enable:no-null-keyword */
}

export class RestServiceConfiguration implements IRestServiceConfiguration {

    constructor() {
        this.host = new HostConfiguration();
        this.api = new ApiConfiguration();
    }

    public host: IHostConfiguration;
    public api: IApiConfiguration;
}
