import { Injectable } from '@angular/core';
import {IBreakpointModel} from '../model/breakpoint.model';
import {BreakpointObserver} from '@angular/cdk/layout';
import {map} from 'rxjs';

interface IBreakpointQueryValue<T> {
  query: string;
  value: T;
}

@Injectable({
  providedIn: 'root'
})
export class BreakpointsService {

  constructor(private breakpointObserver: BreakpointObserver) {}

  public observe<T>(breakpoints: IBreakpointModel<T>[]) {
    const queryValues: IBreakpointQueryValue<T>[] = breakpoints.map(b => ({
      query: this.createMediaQuery(b),
      value: b.value,
    }));
    return this.breakpointObserver.observe(queryValues.map(qv => qv.query)).pipe(
      map(r => {
        if (!r.matches) return null;
        return Object.keys(r.breakpoints).find(k => r.breakpoints[k])
      })
    );
  }

  private createMediaQuery<T>(breakpoint: IBreakpointModel<T>) {
    const queries = [];
    if (breakpoint.orientation != null)
      queries.push(`(orientation: ${breakpoint.orientation ? 'portrait' : 'landscape'})`);
    if (breakpoint.minWidth != null)
      queries.push(`(min-width: ${breakpoint.minWidth}px)`);
    if (breakpoint.maxWidth != null)
      queries.push(`(max-width: ${breakpoint.maxWidth}px)`);
    if (breakpoint.minWidth != null)
      queries.push(`(min-height: ${breakpoint.minHeight}px)`);
    if (breakpoint.maxWidth != null)
      queries.push(`(min-height: ${breakpoint.maxHeight}px)`);
    return queries.reduce((prev, curr) => `${prev} and ${curr}`);
  }
}
