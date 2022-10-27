import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {

  chosenShape = {
    id: 0,
    name: 'rectangle',
    shapeIcon: 'fi fi-rr-rectangle-horizontal',
  }
  shapes = [
    {
      id: 0,
      name: 'rectangle',
      shapeIcon: 'fi fi-rr-rectangle-horizontal',
    },
    {
      id: 1,
      name: 'circle',
      shapeIcon: 'fi fi-rr-circle',
    },
    {
      id: 2,
      name: 'square',
      shapeIcon: 'fi fi-rr-square',
    },
    {
      id: 3,
      name: 'triangle',
      shapeIcon: 'fi fi-rr-triangle',
    },
    {
      id: 4,
      name: 'star',
      shapeIcon: 'fi fi-rr-star',
    },
  ]

  constructor() { }

  pickShape(shape: any){
    this.chosenShape = shape;
  }
}
