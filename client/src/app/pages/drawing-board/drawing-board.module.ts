import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawingBoardRoutingModule } from './drawing-board-routing.module';
import { DrawingBoardComponent } from './drawing-board.component';
import { BoardSideBarComponent } from './components/board-side-bar/board-side-bar.component';


@NgModule({
  declarations: [
    DrawingBoardComponent,
    BoardSideBarComponent
  ],
  imports: [
    CommonModule,
    DrawingBoardRoutingModule
  ]
})
export class DrawingBoardModule { }
