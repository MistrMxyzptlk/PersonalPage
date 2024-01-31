import {animate, AUTO_STYLE, state, style, transition, trigger} from '@angular/animations';

const DEFAULT_DURATION = 600;
export const Expand = (initialHeight: number) => trigger('expand', [
  state('expanded', style({
    height: AUTO_STYLE,
  })),
  state('initial', style({
    height: `${initialHeight}px`,
  })),
  transition('initial => expanded', [
    animate(DEFAULT_DURATION + 'ms ease-in')
  ]),
  transition('expanded => initial', [
    animate(DEFAULT_DURATION + 'ms ease-out')
  ]),
])
