import { Point } from "../classes/point.class";

export interface DrawTextData {
    text: string;
    position: Point;
    color: string;
    size: number;
}

export class DrawText implements DrawTextData {
    text: string;
    position: Point;
    color: string;
    size: number;

    constructor(data: DrawTextData) {
        this.text = data.text;
        this.position = data.position;
        this.color = data.color;
        this.size = data.size;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.font = `${this.size}px Arial`;
        ctx.fillText(this.text, this.position.x, this.position.y);
    }

    review(ctx: CanvasRenderingContext2D, startPoint: Point, endPoint: Point) {
        ctx.fillStyle = this.color;
        ctx.font = `${this.size}px Arial`;
        ctx.fillText(this.text, startPoint.x, startPoint.y);
    }
}