import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[hello]'
})
export class YourDirectiveNameDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor='yellow';
   }

}
