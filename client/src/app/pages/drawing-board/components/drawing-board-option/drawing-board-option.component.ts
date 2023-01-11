import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardService } from 'src/app/services/board/board.service';
import { ToolsService } from 'src/app/services/tools/tools.service';

@Component({
  selector: 'app-drawing-board-option',
  templateUrl: './drawing-board-option.component.html',
  styleUrls: ['./drawing-board-option.component.scss']
})
export class DrawingBoardOptionComponent implements OnInit {

  @Output() clearBoardEvent: EventEmitter<any> = new EventEmitter();
  @Output() changeBgEvent: EventEmitter<string> = new EventEmitter();

  isChangeBg: boolean = false;

  constructor(public toolsService: ToolsService, public boardService: BoardService) { }

  ngOnInit(): void {
  }

  clearBoard(){
    this.clearBoardEvent.emit(true);
  }

  openBackgroundOption(){
    this.isChangeBg = !this.isChangeBg;
  }

  changeBackground(event: string){
    this.changeBgEvent.emit(event);
    this.isChangeBg = !this.isChangeBg;
  }

}
