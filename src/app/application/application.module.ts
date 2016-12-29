
import { SharedModule, TranslateService, Logger } from './shared.module';
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Log } from 'ng2-logger/ng2-logger';
import { TranslateModule } from 'ng2-translate';

import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RoutesRecognized } from '@angular/router';

import { ApplicationConfig } from './application.config';
import { ApplicationComponent } from './application.component';
import { ApplicationRoutingModule } from './application.routing';

import { StateModule } from '../state/state.module';

import { PageModule } from '../view/layout/page.module';
import { PublicModule } from '../view/public/public.module';
import { AccountModule } from '../view/account/account.module';
import { TenantModule } from '../view/tenant/tenant.module';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import * as english from '../asset/i18n/en.json';
import * as nederlands from '../asset/i18n/nl.json';

@NgModule({
    imports: [
        SharedModule,
        BrowserModule,
        FormsModule,
        TranslateModule.forRoot(),

        ApplicationRoutingModule,
        StateModule,
        PageModule,
        PublicModule,
        AccountModule,
        TenantModule
    ],
    declarations: [
        ApplicationComponent
    ],
    providers: [
    ],
    bootstrap: [ApplicationComponent]
})
export class ApplicationModule {
    constructor(public appRef: ApplicationRef, private router: Router, private translate: TranslateService) {
        translate.setTranslation('en', english);
        translate.setTranslation('nl', nederlands);

        translate.setDefaultLang('en');
        translate.use('en');

        const appLog: Log = Log.create(ApplicationConfig.APPLICATION_SINK_NAME, ...ApplicationConfig.APPLICATION_SINK_LEVELS);
        const restLog: Log = Log.create(ApplicationConfig.REST_SINK_NAME, ...ApplicationConfig.REST_SINK_LEVELS);
        const routerLog: Log = Log.create(ApplicationConfig.ROUTER_SINK_NAME, ...ApplicationConfig.ROUTER_SINK_LEVELS);
        const modelLog: Log = Log.create(ApplicationConfig.MODEL_SINK_NAME, ...ApplicationConfig.MODEL_SINK_LEVELS);

        Logger.AddLog(ApplicationConfig.APPLICATION_SINK_NAME, appLog, true);
        Logger.AddLog(ApplicationConfig.REST_SINK_NAME, restLog, false);
        Logger.AddLog(ApplicationConfig.ROUTER_SINK_NAME, routerLog, false);
        Logger.AddLog(ApplicationConfig.MODEL_SINK_NAME, modelLog, false);

        const message: string = 'Router.events';

        this.router.events.subscribe(event => {
            /* tslint:disable:no-any */
            if (event instanceof NavigationStart) {
                Logger.Sinks[ApplicationConfig.ROUTER_SINK_NAME].Debug(message, event, (<any>event).url);
            } else if (event instanceof NavigationEnd) {
                Logger.Sinks[ApplicationConfig.ROUTER_SINK_NAME].Info(message, event, (<any>event).url);
            } else if (event instanceof NavigationCancel) {
                Logger.Sinks[ApplicationConfig.ROUTER_SINK_NAME].Warn(message, event, (<any>event).url);
            } else if (event instanceof NavigationError) {
                Logger.Sinks[ApplicationConfig.ROUTER_SINK_NAME].Error(message, event, (<any>event).url);
            } else if (event instanceof RoutesRecognized) {
                Logger.Sinks[ApplicationConfig.ROUTER_SINK_NAME].Debug(message, event, (<any>event).url);
            }
            /* tslint:enable:no-any */
        });

        Logger.Sinks[ApplicationConfig.ROUTER_SINK_NAME].Info(message, 'subscribed');

        Logger.Info('App:ApplicationModule', 'done');
    }

    public hmrOnInit(store) {
        console.log('HMR state', store);
    }

    public hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
    }

    public hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
