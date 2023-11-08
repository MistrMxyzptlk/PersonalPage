import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appId]'
})
export class IdDirective<T> {
  @Input() appId?: number;
  @Input() component?: T;
}
