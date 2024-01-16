import {Component, OnInit} from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {defaultSidebarState, ISidebarState} from '../../model/layout/sidebar.model';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {tap} from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  sidebarState: ISidebarState = defaultSidebarState;

  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit(): void {
    this.sidebarService.sidebarState$.pipe(
      untilDestroyed(this),
      tap(state => this.sidebarState = state),
    ).subscribe();
  }
}
