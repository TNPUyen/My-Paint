import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BoardService } from 'src/app/services/board/board.service';
import { ToolsService } from 'src/app/services/tools/tools.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  [x: string]: any;


  chosenOption!: string;
  @Output() changeOptionEvent: EventEmitter<string> = new EventEmitter();


  constructor(public boardService: BoardService, public toolService: ToolsService) {
    if (boardService.chosenBg == '"Dot"' || boardService.chosenBg == 'Dot') {
      this.chosenOption = 'Dot'
      // console.log(boardService.chosenBg)

    }
    else if (boardService.chosenBg == '"Graph"' || boardService.chosenBg == 'Graph') {
      // console.log(boardService.chosenBg)
      this.chosenOption = 'Graph'
    } else {
      this.chosenOption = 'Default'
    }

  }

  ngOnInit(): void {
  }

  selectOption(option: string) {
    console.log(option);
    this.changeOptionEvent.emit(option);
  }

}
