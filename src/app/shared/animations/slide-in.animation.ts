import {animate, state, style, transition, trigger} from '@angular/animations';

export type SlideInAnimationsStateName = 'top' | 'bottom' | 'right' | 'left' | 'initial';

export const slideIn = (offsetX: number, offsetY: number) => trigger('slideIn', [
  state('top', style({
    transform: `translateY(-${offsetY}px)`,
    opacity: 0,
  })),
  state('bottom', style({
    transform: `translateY(${offsetY}px)`,
    opacity: 0,
  })),
  state('right', style({
    transform: `translateX(${offsetX}px)`,
    opacity: 0,
  })),
  state('left', style({
    transform: `translateX(-${offsetX}px)`,
    opacity: 0,
  })),
  state('initial', style({
    transform: 'none',
    opacity: 1,
  })),
  transition('* => initial', [
    animate('.4s ease-out'),
  ])
]);

