/// <reference path="../index.d.ts" />

import { Component } from '@angular/core';
import { TranslateService } from './shared.module';

import '../../style/application.scss';
import * as english from '../asset/i18n/en.json';

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
    constructor(translate: TranslateService) {
        translate.setTranslation('en', english);

        translate.setDefaultLang('en');
        translate.use('en');
    }
}
