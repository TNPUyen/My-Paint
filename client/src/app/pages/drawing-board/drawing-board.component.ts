import { Component, OnInit, HostListener, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Circle } from 'src/app/classes/shapes/circle.class';
import { Eraser } from 'src/app/classes/eraser.class';
import { Line } from 'src/app/classes/line.class';
import { Pen } from 'src/app/classes/pen.class';
import { Rectangle } from 'src/app/classes/shapes/rectangle.class';
import { Square } from 'src/app/classes/shapes/square.class';
import { Star } from 'src/app/classes/shapes/star.class';
import { Triangle } from 'src/app/classes/shapes/triangle.class';
import { ColorsService } from 'src/app/services/colors/colors.service';
import { ShapeService } from 'src/app/services/shapes/shape.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { BoardService } from 'src/app/services/board/board.service';

@Component({
  selector: 'app-drawing-board',
  templateUrl: './drawing-board.component.html',
  styleUrls: ['./drawing-board.component.scss'],
})
export class DrawingBoardComponent implements OnInit, OnChanges {
  isDrawing!: boolean;
  startPoint: any;
  snapshot: any;
  bg: any;

  constructor(
    public tools: ToolsService,
    private colors: ColorsService,
    private shapes: ShapeService,
    public boardService: BoardService,
  ) {}
  ngOnChanges(): void {
    console.log(this.boardService.chosenBg)
    console.log(this.bg)
  }

  @ViewChild('eraserCursor') eraserCursor: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
    if (this.tools.chosenTool == 'Eraser') {
      this.eraserCursor.nativeElement.style.left = event.clientX + 'px';
      this.eraserCursor.nativeElement.style.top = event.clientY + 'px';
    }
  }

  ngOnInit(): void {
    let canvas = document.getElementById('board') as HTMLCanvasElement;

    this.fixCanvasBlurry(canvas);

    let ctx = canvas.getContext('2d');

    this.isDrawing = false;

    canvas.addEventListener('mousedown', (e) => {
      this.isDrawing = true;
      this.startPoint = { x: e.offsetX, y: e.offsetY };
      ctx?.beginPath();
      this.snapshot = ctx?.getImageData(0, 0, canvas.width, canvas.height);
    });
    canvas.addEventListener('mouseup', (e) => {
      this.isDrawing = false;
    });
    canvas.addEventListener('mousemove', (e) => {
      this.checkDrawWhat(ctx, e);
    });

  }

  fixCanvasBlurry(canvas: any) {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 1100 * dpr;
    canvas.height = 470 * dpr;
  }

  checkDrawWhat(ctx: any, e: any) {
    if (!this.isDrawing) return;
    ctx.putImageData(this.snapshot, 0, 0);
    ctx.lineWidth = this.tools.chosenSize;
    ctx.strokeStyle = this.colors.chosenColor;

    if (this.tools.chosenTool == 'Pen') {
      let pen = new Pen({ x: e.offsetX, y: e.offsetY });
      ctx.lineCap = 'round';
      pen.draw(ctx);
    } else if (this.tools.chosenTool == 'Shape') {
      // let shape = new Rectangle(this.startPoint, { x: e.offsetX, y: e.offsetY }, this.colors.chosenColor);
      // shape.draw(ctx);
      if (this.shapes.isFillingShape) {
        this.drawFillShape(ctx, e);
      } else {
        this.drawShape(ctx, e);
      }
    } else if (this.tools.chosenTool == 'Eraser') {
      this.erase(ctx, e);
    }
  }

  drawShape(ctx: any, e: any) {
    if (this.shapes.chosenShape.name == 'rectangle') {
      let rectangle = new Rectangle(
        this.startPoint,
        { x: e.offsetX, y: e.offsetY },
        this.colors.chosenColor
      );
      rectangle.draw(ctx);
    }
    if (this.shapes.chosenShape.name == 'circle') {
      let circle = new Circle(
        this.startPoint,
        { x: e.offsetX, y: e.offsetY },
        this.colors.chosenColor
      );
      circle.draw(ctx);
    }
    if (this.shapes.chosenShape.name == 'square') {
      let square = new Square(
        this.startPoint,
        { x: e.offsetX, y: e.offsetY },
        this.colors.chosenColor
      );
      square.draw(ctx);
    }
    if (this.shapes.chosenShape.name == 'triangle') {
      let triangle = new Triangle(
        this.startPoint,
        { x: e.offsetX, y: e.offsetY },
        this.colors.chosenColor
      );
      triangle.draw(ctx);
    }
    if (this.shapes.chosenShape.name == 'star') {
      let star = new Star(
        this.startPoint,
        { x: e.offsetX, y: e.offsetY },
        this.colors.chosenColor
      );
      star.draw(ctx);
    }
    if (this.shapes.chosenShape.name == 'line') {
      let line = new Line(
        this.startPoint,
        { x: e.offsetX, y: e.offsetY },
        this.colors.chosenColor
      );
      line.draw(ctx);
    }
    return false;
  }

  drawFillShape(ctx: any, e: any) {
    if (this.shapes.chosenShape.name == 'rectangle') {
      let rectangle = new Rectangle(
        this.startPoint,
        { x: e.offsetX, y: e.offsetY },
        this.colors.chosenColor
      );
      rectangle.fillColor(ctx);
    }
    if (this.shapes.chosenShape.name == 'circle') {
      let circle = new Circle(
        this.startPoint,
        { x: e.offsetX, y: e.offsetY },
        this.colors.chosenColor
      );
      circle.fillColor(ctx);
    }
    if (this.shapes.chosenShape.name == 'square') {
      let square = new Square(
        this.startPoint,
        { x: e.offsetX, y: e.offsetY },
        this.colors.chosenColor
      );
      square.fillColor(ctx);
    }
    if (this.shapes.chosenShape.name == 'triangle') {
      let triangle = new Triangle(
        this.startPoint,
        { x: e.offsetX, y: e.offsetY },
        this.colors.chosenColor
      );
      triangle.fillColor(ctx);
    }
    if (this.shapes.chosenShape.name == 'star') {
      let star = new Star(
        this.startPoint,
        { x: e.offsetX, y: e.offsetY },
        this.colors.chosenColor
      );
      star.fillColor(ctx);
    }
    return false;
  }

  erase(ctx: any, e: any) {
    let eraser = new Eraser({ x: e.offsetX, y: e.offsetY });
    ctx.lineWidth = this.tools.chosenSize * 10;
    eraser.draw(ctx, this.tools.chosenSize);
  }

  clearBoard(event: any) {
    if (event) {
      let canvas = document.getElementById('board') as HTMLCanvasElement;
      let ctx = canvas.getContext('2d');
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  changeBoardBg(ctx: any, canvas: any) {
    switch(this.boardService.chosenBg){
      case 'Dot': this.boardService.drawDot(canvas, ctx); break;
      case 'Graph':this.boardService.drawGrid(canvas,ctx);break;
      default: break;
    }
  }
}
