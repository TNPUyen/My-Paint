import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawingBoardRoutingModule } from './drawing-board-routing.module';
import { DrawingBoardComponent } from './drawing-board.component';
import { BoardSideBarComponent } from './components/board-side-bar/board-side-bar.component';
import { DrawingBoardOptionComponent } from './components/drawing-board-option/drawing-board-option.component';
import { ShareModule } from 'src/app/modules/share/share.module';


@NgModule({
  declarations: [
    DrawingBoardComponent,
    BoardSideBarComponent,
    DrawingBoardOptionComponent
  ],
  imports: [
    CommonModule,
    DrawingBoardRoutingModule,
    ShareModule
  ]
})
export class DrawingBoardModule { }
