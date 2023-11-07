import {InjectionToken} from '@angular/core';

export interface IIntersectionObserver {
    rootElement: HTMLElement | null;
}

export const TIntersectionObserver = new InjectionToken<IIntersectionObserver>('IntersectionObserverToken');
