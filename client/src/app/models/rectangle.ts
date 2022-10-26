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

    draw(ctx: any, e: any) {
        ctx.fill
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