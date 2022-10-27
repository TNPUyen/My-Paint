import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  chosenTool: string = 'Pointer';
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
  ]

  constructor() { }

  pickTool(toolId: string){
    console.log(toolId);
    this.chosenTool = toolId;
  }
}
