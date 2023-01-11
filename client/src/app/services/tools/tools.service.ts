import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  chosenTool: string = 'Pointer';
  chosenSize: number =  2;
  boardSideBarItems = [
    {
      id: 0,
      name: 'Pointer',
      icon: 'fi fi-sr-cursor',
    },
    {
      id: 1,
      name: 'Pen',
      icon: 'fi fi-sr-paint',
    },
    {
      id: 2,
      name: 'Text',
      icon: 'fi fi-rr-text',
    },
    {
      id: 3,
      name: 'Image',
      icon: 'fi fi-br-picture',
    },
  ]

  bgBoardOption = [
    'Default',
    'Dot',
    'Graph',
  ]

  constructor() { }

  pickTool(toolId: string){
    this.chosenTool = toolId;
    console.log(this.chosenTool)
  }

}
