import { Point } from "../classes/point.class";

export interface EraserData {
    points: Point[];
    size: number;
}

export class Eraser implements EraserData {
    points: Point[];
    size: number;

    constructor(data: EraserData) {
        this.points = data.points;
        this.size = data.size;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "white";
        ctx.lineWidth = this.size;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.stroke();
    }

    review(ctx: CanvasRenderingContext2D, startPoint: Point, endPoint: Point) {
        ctx.strokeStyle = "white";
        ctx.lineWidth = this.size;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        ctx.stroke();
    }

}