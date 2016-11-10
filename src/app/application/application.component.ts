
import { Component } from '@angular/core';
import { Logger } from '../foundation/logger';

import { Log, Level } from 'ng2-logger/ng2-logger';

import '../../style/application.scss';

@Component({
    selector: 'sa-application',
    template: `
     <!-- APPLICATION: BEGIN -->
     <sa-layout-page></sa-layout-page>
     <!-- APPLICATION: END -->
     `,
    styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent {
    public url: string = 'https://github.com/slidingapps/angular2-starter';
    public title: string = 'Hello from this side !';

    constructor() {
        let log: Log = Log.create('application', Level.ERROR, Level.INFO, Level.WARN, Level.DATA);
        Logger.Init(log);
    }
}
