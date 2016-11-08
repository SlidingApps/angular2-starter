
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ApplicationComponent } from './application.component';
import { ApplicationRoutingModule } from './application.routing';

import { PageModule } from '../view/layout/page.module';
import { PublicModule } from '../view/public/public.module';
import { AccountModule } from '../view/account/account.module';

import { Logger } from 'angular2-logger/core';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ApplicationRoutingModule,
        FormsModule,
        PageModule,
        PublicModule,
        AccountModule
    ],
    declarations: [
        ApplicationComponent
    ],
    providers: [
        Logger
    ],
    bootstrap: [ApplicationComponent]
})
export class ApplicationModule {
    constructor(public appRef: ApplicationRef) {
    }

    hmrOnInit(store) {
        console.log('HMR store', store);
    }

    hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
