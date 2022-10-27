import { Component, OnInit } from '@angular/core';
import { Circle } from 'src/app/models/circle';
import { Pen } from 'src/app/models/pen';
import { Rectangle } from 'src/app/models/rectangle';
import { ColorsService } from 'src/app/services/colors/colors.service';
import { ShapeService } from 'src/app/services/shapes/shape.service';
import { ToolsService } from 'src/app/services/tools/tools.service';

@Component({
  selector: 'app-drawing-board',
  templateUrl: './drawing-board.component.html',
  styleUrls: ['./drawing-board.component.scss'],
})
export class DrawingBoardComponent implements OnInit {
  isDrawing!: boolean;
  startPoint: any;
  snapshot: any;

  constructor(private tools: ToolsService, private colors: ColorsService, private shapes: ShapeService) {}

  ngOnInit(): void {
    let canvas = document.getElementById('board') as HTMLCanvasElement;

    this.fixCanvasBlurry(canvas);

    let ctx = canvas.getContext('2d');

    this.isDrawing = false;


    canvas.addEventListener('mousedown', (e)=> {
      this.isDrawing = true;
      this.startPoint = { x: e.offsetX, y: e.offsetY };
      ctx?.beginPath();
      this.snapshot = ctx?.getImageData(0, 0, canvas.width, canvas.height);
    });
    canvas.addEventListener('mouseup', (e)=> {
      this.isDrawing = false;
      console.log(e.offsetX, e.offsetY);
    });
    canvas.addEventListener('mousemove', (e) => {
      this.checkDrawWhat(ctx, e);
    });
  }

  fixCanvasBlurry(canvas: any){
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 900 * dpr;
    canvas.height = 400  * dpr; 
  }

  checkDrawWhat(ctx: any, e: any){
    if(!this.isDrawing) return; 
    ctx.putImageData(this.snapshot, 0, 0);

    if(this.tools.chosenTool == 'Pen'){
      let pen = new Pen({ x: e.offsetX, y: e.offsetY });
      ctx.strokeStyle = this.colors.chosenColor;
      ctx.lineCap = 'round';
      pen.draw(ctx);
    }else if(this.tools.chosenTool == 'Shape'){
      // let shape = new Rectangle(this.startPoint, { x: e.offsetX, y: e.offsetY }, this.colors.chosenColor);
      // shape.draw(ctx);
      this.checkShape(ctx, e);
    }
  }

  checkShape(ctx: any, e: any){
    if(this.shapes.chosenShape.name == 'rectangle'){
      let rectangle = new Rectangle(this.startPoint, { x: e.offsetX, y: e.offsetY }, this.colors.chosenColor);
      rectangle.draw(ctx);
    }
    if(this.shapes.chosenShape.name == 'circle'){
      let circle = new Circle(this.startPoint, { x: e.offsetX, y: e.offsetY }, this.colors.chosenColor);
      circle.draw(ctx);
    }
    return false;
  }

}
