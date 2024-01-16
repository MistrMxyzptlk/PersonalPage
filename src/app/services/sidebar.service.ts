import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {defaultSidebarState, ESideBars, ISideBar} from '../model/layout/sidebar.model';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _sidebarState$ = new BehaviorSubject(defaultSidebarState);
  public sidebarState$ = this._sidebarState$.asObservable();

  open(sidebar: ESideBars) {
    const state = this._sidebarState$.value;
    state[sidebar].open = true;
    this._sidebarState$.next(state);
  }

  close(sidebar: ESideBars) {
    const state = this._sidebarState$.value;
    state[sidebar].open = false;
    this._sidebarState$.next(state);
  }

  setSidebarState(sidebar: ESideBars, newState: ISideBar) {
    const state = this._sidebarState$.value;
    state[sidebar] = newState;
    this._sidebarState$.next(state);
  }
}
