import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {defaultSidebarState, ESideBars, ISideBar, ISidebarState} from "../model/layout/sidebar.model";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _sidebarState$ = new BehaviorSubject(defaultSidebarState);
  public sidebarState$ = this._sidebarState$.asObservable();

  constructor() { }

  open(sidebar: ESideBars) {
    let state = this._sidebarState$.value;
    state[sidebar].open = true;
    this._sidebarState$.next(state);
  }

  close(sidebar: ESideBars) {
    let state = this._sidebarState$.value;
    state[sidebar].open = false;
    this._sidebarState$.next(state);
  }

  setSidebarState(sidebar: ESideBars, newState: ISideBar) {
    let state = this._sidebarState$.value;
    state[sidebar] = newState;
    this._sidebarState$.next(state);
  }
}
