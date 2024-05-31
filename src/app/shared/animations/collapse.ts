import {animate, AUTO_STYLE, state, style, transition, trigger} from '@angular/animations';
import {add_to_array_optional} from 'src/app/shared/util/array';

const DEFAULT_DURATION = 600;

export enum ECollapseAnimation {
  NO_ANIMATION,
  ANIMATE_IN,
  ANIMATE_OUT,
  ANIMATE_BOTH
}

export const Collapse = (collapseAnimation: ECollapseAnimation) => trigger('collapse', [
  state('in', style({
    height: AUTO_STYLE,
    visibility: AUTO_STYLE,
    opacity: AUTO_STYLE
  })),
  state('out', style({
    height: '0px',
    visibility: 'hidden',
    opacity: 0,
  })),
  ...add_to_array_optional(
    collapseAnimation === ECollapseAnimation.ANIMATE_BOTH || collapseAnimation === ECollapseAnimation.ANIMATE_OUT,
    transition('in => out', [
      animate(DEFAULT_DURATION + 'ms ease-in')
    ])
  ),
  ...add_to_array_optional(
    collapseAnimation === ECollapseAnimation.ANIMATE_BOTH || collapseAnimation === ECollapseAnimation.ANIMATE_IN,
    transition('out => in', [
      animate(DEFAULT_DURATION + 'ms ease-out')
    ])
  ),
])
