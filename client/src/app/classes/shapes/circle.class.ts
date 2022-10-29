import { Point } from "../point.class";
import { Shape } from "./shape.class";

export class Circle implements Shape{
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
        let radius = Math.sqrt(Math.pow(this.startPoint.x - this.endPoint.x, 2) + Math.pow(this.startPoint.y - this.endPoint.y, 2));
        ctx.arc(this.startPoint.x, this.startPoint.y, radius, 0, 2 * Math.PI);
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
        ctx.beginPath();
        let radius = Math.sqrt(Math.pow(this.startPoint.x - this.endPoint.x, 2) + Math.pow(this.startPoint.y - this.endPoint.y, 2));
        ctx.arc(this.startPoint.x, this.startPoint.y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = this.color;
        ctx.stroke();
    }
    strokeColor(color: string) {
        throw new Error("Method not implemented.");
    }

}