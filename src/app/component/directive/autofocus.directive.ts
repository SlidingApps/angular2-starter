
import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[saAutoSelect]'
})
export class AutofocusDirective {
    constructor(private elementRef: ElementRef) {
        console.log('saAutoSelect', this.elementRef.nativeElement);
        jQuery(this.elementRef.nativeElement).focus(() => {
            console.log('focus', jQuery(this));
            jQuery(elementRef.nativeElement).select();
        });

        jQuery(this.elementRef.nativeElement).click(() =>{
            console.log('click', jQuery(this));
            jQuery(elementRef.nativeElement).select();
        });
    }
}
