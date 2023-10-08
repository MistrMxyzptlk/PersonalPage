import {animate, state, style, transition, trigger} from '@angular/animations';

export const zoomIn = (initScale: number) => trigger('zoomIn', [
  state('out', style({
    transform: `scale(${initScale})`,
    opacity: 0,
  })),
  state('in', style({
    transform: 'scale(1)',
    opacity: 1,
  })),
  transition('out => in', [
    animate('.4s ease-out'),
  ])
]);
