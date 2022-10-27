import { Point } from "./point";
import { Shape } from "./shape";

export class Rectangle implements Shape {
    startPoint: Point;
    endPoint: Point;
    color: string;
    constructor(startPoint: Point, endPoint: Point, color: string) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.color = color;
    }

    draw(ctx: any) { 
        ctx.strokeRect(this.startPoint.x, this.startPoint.y, this.endPoint.x - this.startPoint.x, this.endPoint.y - this.startPoint.y);
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
    fillColor(color: string) {
        throw new Error("Method not implemented.");
    }
    strokeColor(color: string) {
        throw new Error("Method not implemented.");
    }

}