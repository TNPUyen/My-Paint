import { Point } from "./point";

export class Eraser{
    position: Point;

    constructor(position: Point) {
        this.position = position;
    }
    
    draw(ctx: any, chosenSize: any) {
        ctx.strokeStyle = 'white';
        ctx.lineCap = 'round';
        ctx.lineTo(this.position.x + chosenSize, this.position.y + chosenSize);
        ctx.stroke();
    }
}