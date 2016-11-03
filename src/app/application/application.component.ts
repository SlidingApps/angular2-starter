
import { Component } from '@angular/core';

import '../../style/app.scss';

@Component({
  selector: 'sa-application', // <my-app></my-app>
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent {
  url = 'https://github.com/slidingapps/angular2-starter';

  constructor() { }
}
