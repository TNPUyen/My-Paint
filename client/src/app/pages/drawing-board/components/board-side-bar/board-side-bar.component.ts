import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors/colors.service';
import { ShapeService } from 'src/app/services/shapes/shape.service';
import { ToolsService } from 'src/app/services/tools/tools.service';

@Component({
  selector: 'app-board-side-bar',
  templateUrl: './board-side-bar.component.html',
  styleUrls: ['./board-side-bar.component.scss'],
})
export class BoardSideBarComponent implements OnInit {
  toolsList = this.tools.boardSideBarItems;
  isChooseColor: boolean = false;
  isChooseShape: boolean = false;
  isChooseSize: boolean = false;
  constructor(
    public tools: ToolsService,
    public colors: ColorsService,
    public shapes: ShapeService
  ) {}

  ngOnInit(): void {
  }

  openColor() {
    this.isChooseColor = !this.isChooseColor;
    this.isChooseShape = false;
    this.isChooseSize = false;
  }
  openShape() {
    this.isChooseColor = false;
    this.isChooseShape = !this.isChooseShape;
    this.isChooseSize = false;
  }

  openSize() {
    this.isChooseColor = false;
    this.isChooseShape = false;
    this.isChooseSize = !this.isChooseSize;
  }

  pickColor(color: any) {
    this.colors.pickColor(color);
    this.isChooseColor = !this.isChooseColor;
  }

  pickShape(shape: any) {
    this.shapes.pickShape(shape);
    this.isChooseShape = !this.isChooseShape;
  }

  fillShape() {
    this.shapes.isFillingShape = !this.shapes.isFillingShape;
    this.isChooseShape = !this.isChooseShape;
  }

  pickSize(value: any) {
    this.tools.chosenSize = value;
    this.isChooseSize = !this.isChooseSize;
  }
}
