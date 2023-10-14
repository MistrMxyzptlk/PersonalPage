import {Component, HostListener, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {OnAppearDirective} from '../../../shared/directives/on-appear.directive';
import {
  slideIn,
  SlideInAnimationsStateName
} from '../../../shared/animations/slide-in.animation';
import {zoomIn, ZoomInAnimationStateName} from '../../../shared/animations/zoom-in.animation';
import {BreakpointObserver} from '@angular/cdk/layout';
import {filter, map, merge, tap} from 'rxjs';
import {UntilDestroy} from '@ngneat/until-destroy';
import {BreakpointsService} from '../../../shared/services/breakpoints.service';
import {IAnimationState} from '../../../shared/model/animation-state.model';

interface IGridSettings {
  rowHeight: string;
  gutterSize: string;
  cols: number;
}

@UntilDestroy()
@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatIconModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  hostDirectives: [{
    directive: OnAppearDirective,
    outputs: ['appAppear: appear']
  }],
  animations: [
    slideIn(100, 100),
    zoomIn(.8),
  ],
})
export class FeaturesComponent implements OnInit {
  protected animationStates: IAnimationState<SlideInAnimationsStateName | ZoomInAnimationStateName>[] = [
    {state: 'left'},
    {state: 'zoomOut'},
    {state: 'right'},
  ];

  @HostListener('appear')
  onAppear() {
    this.animationStates = this.animationStates.map(() => ({state: 'initial'}));
  }

  public gridSettings: IGridSettings = {
    rowHeight: '1:1',
    gutterSize: '20',
    cols: 3,
  };

  constructor(
    private breakpointObserver: BreakpointObserver,
    private breakPointService: BreakpointsService,
  ) {}

  ngOnInit(): void {
    merge(
      this.createBreakpoint(1440,  10000, '100'),
      this.createBreakpoint(960, 1439.98, '40'),
      this.createBreakpoint( 0,   959.98,  '20'),
    ).pipe(
      tap(gutterSize => this.gridSettings.gutterSize = gutterSize)
    ).subscribe();

    this.breakpointObserver.observe([
      this.createMediaQuery(0, 850)
    ]).pipe(
      tap(result => {
        if (result.matches) {
          this.gridSettings.rowHeight = '256px';
          this.gridSettings.cols = 1;
        } else {
          this.gridSettings.rowHeight = '1:1';
          this.gridSettings.cols = 3;
        }
      })
    ).subscribe();
  }

  private createBreakpoint(minWidth: number, maxWidth: number, value: string) {
    return this.breakpointObserver.observe(this.createMediaQuery(minWidth, maxWidth)).pipe(
      filter(result => result.matches),
      map(() => value),
    );
  }

  private createMediaQuery(minWidth: number, maxWidth: number) {
    return `(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
  }
}
