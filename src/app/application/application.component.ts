
import { Component } from '@angular/core';
import { Logger } from '../foundation/logger';
import { Logger as AngularLogger } from 'angular2-logger/core';

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

    constructor(private logger: AngularLogger) {
        Logger.Init(logger);
    }
}
