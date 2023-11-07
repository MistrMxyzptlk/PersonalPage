import {animate, group, state, style, transition, trigger} from '@angular/animations';

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

export const SlideInOutAnimation = [
  trigger('slideInOut', [
    state('in', style({
      'max-height': '1000px', 'opacity': '1', 'visibility': 'visible'
    })),
    state('out', style({
      'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
    })),
    transition('in => out', [group([
        animate('400ms ease-in-out', style({
          'opacity': '0'
        })),
        animate('600ms ease-in-out', style({
          'max-height': '0px'
        })),
        animate('700ms ease-in-out', style({
          'visibility': 'hidden'
        }))
      ]
    )]),
    transition('out => in', [group([
        animate('1ms ease-in-out', style({
          'visibility': 'visible'
        })),
        animate('600ms ease-in-out', style({
          'max-height': '1000px'
        })),
        animate('800ms ease-in-out', style({
          'opacity': '1'
        }))
      ]
    )])
  ]),
]
