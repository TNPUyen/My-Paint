import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  chosenBg: string = 'Default';

  constructor() { }

  clearBoard(canvas: any, ctx: any){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  drawGrid(canvas: any, ctx: any){
    ctx.beginPath();
    ctx.strokeStyle = '#f2f2f2';
    for(let i = 0; i < canvas.width; i += 20){
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
    }
    for(let i = 0; i < canvas.height; i += 20){
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
    }
    ctx.stroke();
  }


  drawDot(canvas: any, ctx: any){
    ctx.beginPath();
    ctx.strokeStyle = '#f2f2f2';
    for(let i = 0; i < canvas.width; i += 20){
      for(let j = 0; j < canvas.height; j += 20){
        ctx.moveTo(i, j);
        ctx.arc(i, j, 1, 0, 2 * Math.PI);
      }
    }
    ctx.stroke();
        
    // var r = 2,
    //   cw = 30,
    //   ch = 30;
  
    // for (var x = 20; x < canvas.width; x+=cw) {
    //   for (var y = 20; y < canvas.height; y+=ch) {
    //       ctx.fillStyle = '#000000';   
    //       ctx.fillRect(x-r/2,y-r/2,r,r);
    //     }
    // }
  }
}
