import { Point } from "../classes/point.class";
import { DrawableObject } from "./drawable-object";

export interface FreedrawData {
    points: Point[];
    color: string;
    size: number;
}

export class Freedraw implements DrawableObject {
    points: Point[];
    color: string;
    size: number;

    constructor(data: FreedrawData) {
        this.points = data.points;
        this.color = data.color;
        this.size = data.size;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = this.color;
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
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        ctx.stroke();
    }
}