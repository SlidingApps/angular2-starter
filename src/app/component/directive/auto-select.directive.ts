
import { Directive, ElementRef } from '@angular/core';

import { Observable } from 'rxjs';

@Directive({
    selector: '[saAutoSelect]'
})
export class AutoSelectDirective {
    constructor(private elementRef: ElementRef) {
        jQuery(this.elementRef.nativeElement).focus(() => {
            jQuery(elementRef.nativeElement).select();
        });

        jQuery(this.elementRef.nativeElement).click(() => {
            jQuery(elementRef.nativeElement).select();
        });

        // Observable.timer(0, 300).first().subscribe(x => jQuery(elementRef.nativeElement).select());
    }
}
