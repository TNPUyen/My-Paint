import { Point } from "./point.class";
import { Shape } from "./shapes/shape.class";

export class Pen{
    position: Point;

    constructor(position: Point){
        this.position = position;
    }

    draw(ctx: any){
       ctx?.lineTo(this.position.x, this.position.y);
       ctx?.stroke();
    }
}