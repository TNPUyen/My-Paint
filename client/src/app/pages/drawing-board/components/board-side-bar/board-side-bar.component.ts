import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors/colors.service';
import { ShapeService } from 'src/app/services/shapes/shape.service';
import { ToolsService } from 'src/app/services/tools/tools.service';

@Component({
  selector: 'app-board-side-bar',
  templateUrl: './board-side-bar.component.html',
  styleUrls: ['./board-side-bar.component.scss']
})
export class BoardSideBarComponent implements OnInit {

  toolsList = this.tools.boardSideBarItems;
  isChooseColor: boolean = false;
  isChooseShape: boolean = false;
  constructor(public tools: ToolsService, public colors: ColorsService, public shapes: ShapeService) { }

  ngOnInit(): void {
  }

  openColor(){
    this.isChooseColor = !this.isChooseColor;
  }
  openShape(){
    this.isChooseShape = !this.isChooseShape;
  }

  pickColor(color: any){
    this.colors.pickColor(color);
    this.isChooseColor = !this.isChooseColor;
  }

  pickShape(shape: any){
    this.shapes.pickShape(shape);
    this.isChooseShape = !this.isChooseShape;
  }
}
