import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawingBoardRoutingModule } from './drawing-board-routing.module';
import { DrawingBoardComponent } from './drawing-board.component';
import { BoardSideBarComponent } from './components/board-side-bar/board-side-bar.component';
import { DrawingBoardOptionComponent } from './components/drawing-board-option/drawing-board-option.component';


@NgModule({
  declarations: [
    DrawingBoardComponent,
    BoardSideBarComponent,
    DrawingBoardOptionComponent
  ],
  imports: [
    CommonModule,
    DrawingBoardRoutingModule
  ]
})
export class DrawingBoardModule { }
