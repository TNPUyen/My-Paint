import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  chosenColor: string = 'black'
  colors = [
    {
      id: 0,
      color: '#eb4d4b'
    },
    {
      id: 1,
      color: '#f9ca24'
    },
    {
      id: 2,
      color: '#6ab04c'
    },
    {
      id: 3,
      color: '#130f40'
    },
    {
      id: 4,
      color: 'black'
    },
  ]

  constructor() { }

  pickColor(color: any){
    this.chosenColor = color.color;
  }
}
