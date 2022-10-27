import { Point } from "./point";
import { Shape } from "./shape";

export class Line implements Shape{
    startPoint: Point;
    endPoint: Point;
    color: string;

    constructor(startPoint: Point, endPoint: Point, color: string) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.color = color;
    }
    draw(ctx: any) {
        ctx.beginPath();
        ctx.moveTo(this.startPoint.x, this.startPoint.y);
        ctx.lineTo(this.endPoint.x, this.endPoint.y);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    }
    move(point: Point) {
        throw new Error("Method not implemented.");
    }
    resize(point: Point) {
        throw new Error("Method not implemented.");
    }
    rotate(angle: number) {
        throw new Error("Method not implemented.");
    }
    fillColor(ctx: any) {
        throw new Error("Method not implemented.");
    }
    strokeColor(color: string) {
        throw new Error("Method not implemented.");
    }
    
}