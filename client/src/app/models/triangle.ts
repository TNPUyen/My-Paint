import { Point } from "./point";
import { Shape } from "./shape";

export class Triangle implements Shape{
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
        // moving triangle to the mouse pointer
        ctx.moveTo(this.startPoint.x, this.startPoint.y);
        // creating first line according to the mouse pointer
        ctx.lineTo(this.endPoint.x, this.endPoint.y);
        // creating bottom line of the triangle
        ctx.lineTo(this.startPoint.x * 2 - this.endPoint.x, this.endPoint.y);
        // closing path of a triangle so the third line draw automatically
        ctx.closePath();
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
        ctx.beginPath();
        // moving triangle to the mouse pointer
        ctx.moveTo(this.startPoint.x, this.startPoint.y);
        // creating first line according to the mouse pointer
        ctx.lineTo(this.endPoint.x, this.endPoint.y);
        // creating bottom line of the triangle
        ctx.lineTo(this.startPoint.x * 2 - this.endPoint.x, this.endPoint.y);
        // closing path of a triangle so the third line draw automatically
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
    }
    strokeColor(color: string) {
        throw new Error("Method not implemented.");
    }

}