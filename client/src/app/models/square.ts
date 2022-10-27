import { Point } from "./point";
import { Shape } from "./shape";

export class Square implements Shape {
    startPoint: Point;
    endPoint: Point;
    color: string;
    constructor(startPoint: Point, endPoint: Point, color: string) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.color = color;
    }

    draw(ctx: any) { 
        let size = this.endPoint.x - this.startPoint.x;
        ctx.strokeRect(this.startPoint.x, this.startPoint.y, size, size);
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
    fillColor(ctx:any) {
        let size = this.endPoint.x - this.startPoint.x;
        ctx.fillRect(this.startPoint.x, this.startPoint.y, size, size);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = this.color;
        ctx.stroke();
    }
    strokeColor(color: string) {
        throw new Error("Method not implemented.");
    }

}