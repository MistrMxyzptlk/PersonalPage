import {animate, state, style, transition, trigger} from '@angular/animations';

export type ZoomInAnimationStateName = 'zoomOut' | 'initial';

export const zoomIn = (initScale: number) => trigger('zoomIn', [
  state('zoomOut', style({
    transform: `scale(${initScale})`,
    opacity: 0,
  })),
  state('initial', style({
    transform: 'scale(1)',
    opacity: 1,
  })),
  transition('zoomOut => initial', [
    animate('.4s ease-out'),
  ])
]);
