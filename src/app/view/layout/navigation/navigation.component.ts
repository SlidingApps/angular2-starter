
import { Component } from '@angular/core';

@Component({
  selector: 'sa-layout-navigation',
  template: `
        <!-- LAYOUT.NAVIGATION: BEGIN -->
        <header id="header" style="position: fixed; top:0; left: 0; width: 100%;">
            <h1 class="logo">
                <a href="#" class="js-nav-toggler">
                    <i class="icon icon-close"></i>
                </a>
                <a href="#" ><span>taskrunner</span>.io</a>
            </h1>
    
            <div class="pageContent" data-ng-if="!ctrl.isSignedIn">
                <div class="container-fluid">
                    <div class="col-sm-1 col-sm-offset-10">
                        <button class="btn btn-primary" style="margin-top: 10px;" (click)="ctrl.onGotoGetStarted()">Get started</button>
                    </div>
                    <div class="col-sm-1">
                        <button class="btn btn-normal" style="margin-top: 10px;" (click)="ctrl.onGotoSignIn()">Sign In</button>
                    </div>
                </div>
            </div>
        </header>
        <!-- LAYOUT.NAVIGATION: END -->
    `
})
export class NavigationComponent { }
