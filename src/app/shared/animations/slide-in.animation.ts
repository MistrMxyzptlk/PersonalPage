import {animate, state, style, transition, trigger} from '@angular/animations';

export const slideInTop = (offset: number) => trigger('slideInTop', [
  state('in', style({
    transform: 'none',
    opacity: 1,
  })),
  state('out', style({
    transform: `translateY(-${offset}px)`,
    opacity: 0,
  })),
  transition('out => in', [
    animate('.4s ease-out'),
  ]),
]);
export const slideInBottom = (offset: number) => trigger('slideInBottom', [
  state('in', style({
    transform: 'none',
    opacity: 1,
  })),
  state('out', style({
    transform: `translateY(${offset}px)`,
    opacity: 0,
  })),
  transition('out => in', [
    animate('.4s ease-out'),
  ]),
]);

export const slideInRight = (offset: number) => trigger('slideInRight', [
  state('in', style({
    transform: 'none',
    opacity: 1,
  })),
  state('out', style({
    transform: `translateX(${offset}px)`,
    opacity: 0,
  })),
  transition('out => in', [
    animate('.4s ease-out'),
  ]),
]);

export const slideInLeft = (offset: number) => trigger('slideInLeft', [
  state('in', style({
    transform: 'none',
    opacity: 1,
  })),
  state('out', style({
    transform: `translateX(-${offset}px)`,
    opacity: 0,
  })),
  transition('out => in', [
    animate('.4s ease-out'),
  ]),
]);

