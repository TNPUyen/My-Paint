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
import { Paper } from 'src/app/models/paper.model';
import { Observable } from 'rxjs';
import { Freedraw } from 'src/app/models/freedraw';

@Component({
  selector: 'app-drawing-board',
  templateUrl: './drawing-board.component.html',
  styleUrls: ['./drawing-board.component.scss'],
})
export class DrawingBoardComponent implements OnInit {
  isDrawing!: boolean;
  startPoint: any;
  snapshot: any;
  bg: any;
  paper: Paper = {
    _id: '',
    background: 'Default',
    objects: [],
  };
  canvas: any;
  ctx: any;
  drawingPic: any;
  test$: Observable<any> = this.boardService.getMessage();

  constructor(
    public tools: ToolsService,
    private colors: ColorsService,
    private shapes: ShapeService,
    public boardService: BoardService,
  ) {

  }

  // ngOnChanges(): void {
  //   console.log(this.boardService.chosenBg)
  //   console.log(this.bg)
  // }

  @ViewChild('eraserCursor') eraserCursor: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
    if (this.tools.chosenTool == 'Eraser') {
      this.eraserCursor.nativeElement.style.left = event.clientX + 'px';
      this.eraserCursor.nativeElement.style.top = event.clientY + 'px';
    }
  }

  ngOnInit(): void {

    this.canvas = document.getElementById('board') as HTMLCanvasElement;
    this.fixCanvasBlurry(this.canvas);
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });

    let chosenBg = this.boardService.chosenBg;
    if (chosenBg == '"Dot"') {
      this.boardService.drawDot(this.canvas, this.ctx);
    } else if (chosenBg == '"Graph"') {
      this.boardService.drawGrid(this.canvas, this.ctx);
    }
    this.reDrawAll(this.ctx, this.canvas);
    this.isDrawing = false;

    this.canvas.addEventListener('mousedown', (e: any) => {

      if (this.tools.chosenTool != 'Pointer') {
        this.isDrawing = true;
        this.startPoint = { x: e.offsetX, y: e.offsetY };
        this.ctx?.beginPath();
        this.snapshot = this.ctx?.getImageData(0, 0, this.canvas.width, this.canvas.height);

        this.drawingPic = {
          tool: this.tools.chosenTool,
          color: this.colors.chosenColor,
          size: this.tools.chosenSize,
          startPoint: this.startPoint,
          isFillingShape: this.shapes.isFillingShape,
          chosenShape: this.shapes.chosenShape,
          pointList: [],
        };
      }


    });
    this.canvas.addEventListener('mouseup', (e: any) => {
      if (this.tools.chosenTool != 'Pointer') {
        this.boardService.drawingList.push(this.drawingPic);
        this.isDrawing = false;
        console.log(this.boardService.drawingList);
        this.paper.objects.push(
          new Freedraw({
            color: this.drawingPic.color,
            size: this.drawingPic.size,
            points: this.drawingPic.pointList,
          })
        )
        this.paper = {
          ...this.paper,
          background: this.boardService.chosenBg,
        }
        this.boardService.sendMessage(this.paper)
        localStorage.setItem('drawingList', JSON.stringify(this.boardService.drawingList));
        localStorage.setItem('background', JSON.stringify(this.boardService.chosenBg));
        this.drawingPic = null;
      }
    });

    this.canvas.addEventListener('mousemove', (e: any) => {
      this.checkDrawWhat(this.ctx, e);
    });
    // this.changeBoardBg(ctx, canvas);

    this.test$.subscribe((data) => {
      console.log(data)
    })
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
    this.drawingPic.pointList.push({ x: e.offsetX, y: e.offsetY });

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
      this.boardService.chosenBg = 'Default';
      this.boardService.drawingList = [];
      localStorage.setItem('background', JSON.stringify('Default'));
      localStorage.removeItem('drawingList');
    }
  }

  changeBoardBg(event: any) {
    let canvas = document.getElementById('board') as HTMLCanvasElement;
    let ctx = canvas.getContext('2d');
    this.boardService.chosenBg = event;
    switch (event) {
      case 'Dot':
        localStorage.setItem('background', JSON.stringify('Dot'));
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        this.boardService.drawDot(this.canvas, this.ctx);
        this.reDrawAll(ctx, canvas);
        break;
      case 'Graph':
        localStorage.setItem('background', JSON.stringify('Graph'));
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        this.boardService.drawGrid(this.canvas, this.ctx);
        this.reDrawAll(ctx, canvas); break;
      case 'Default':
        localStorage.setItem('background', JSON.stringify('Default'));
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        this.reDrawAll(ctx, canvas); break;
      default: break;
    }
  }

  reDrawAll(ctx: any, canvas: any) {
    // console.log('reDrawAll');
    let temp = localStorage.getItem('drawingList');
    if (temp) {
      // this.clearBoard(true);
      this.boardService.drawingList = JSON.parse(temp)
      this.boardService.drawAll(canvas, ctx);
    }
  }
}
