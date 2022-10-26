import { Component, OnInit } from '@angular/core';
import { Pen } from 'src/app/models/pen';
import { ColorsService } from 'src/app/services/colors/colors.service';
import { ToolsService } from 'src/app/services/tools/tools.service';

@Component({
  selector: 'app-drawing-board',
  templateUrl: './drawing-board.component.html',
  styleUrls: ['./drawing-board.component.scss'],
})
export class DrawingBoardComponent implements OnInit {
  isDrawing!: boolean;

  constructor(private tools: ToolsService, private colors: ColorsService) {}

  ngOnInit(): void {
    let canvas = document.getElementById('board') as HTMLCanvasElement;
    let ctx = canvas.getContext('2d');


    this.isDrawing = false;

    window.addEventListener('load', () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    });

    

    canvas.addEventListener('mousedown', ()=> {
      this.isDrawing = true;
      ctx?.beginPath();
    });
    canvas.addEventListener('mouseup', ()=> this.isDrawing = false);
    canvas.addEventListener('mousemove', (e) => {
      this.checkDrawWhat(ctx, e);
    });
  }

  checkDrawWhat(ctx: any, e: any){
    if(this.tools.chosenTool == 'Pen'){
      let pen = new Pen({ x: e.offsetX, y: e.offsetY });
      ctx.strokeStyle = this.colors.chosenColor;
      ctx.lineCap = 'round';
      pen.draw(ctx, this.isDrawing);
    }else if(this.tools.chosenTool == 'Shape'){

    }
  }

}
