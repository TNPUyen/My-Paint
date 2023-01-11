import { Point } from "../classes/point.class";

export interface ShapeData {
    type: string;
    start: Point;
    end: Point;
    color: string;
    isFill: boolean;
}

export class Shape implements ShapeData {
    type: string;
    start: Point;
    end: Point;
    color: string;
    isFill: boolean;

    constructor(data: ShapeData) {
        this.type = data.type;
        this.start = data.start;
        this.end = data.end;
        this.color = data.color;
        this.isFill = data.isFill;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        switch (this.type) {
            case "line":
                ctx.moveTo(this.start.x, this.start.y);
                ctx.lineTo(this.end.x, this.end.y);
                break;
            case "rect":
                ctx.rect(this.start.x, this.start.y, this.end.x - this.start.x, this.end.y - this.start.y);
                break;
            case "circle":
                ctx.arc(this.start.x, this.start.y, Math.sqrt(Math.pow(this.end.x - this.start.x, 2) + Math.pow(this.end.y - this.start.y, 2)), 0, 2 * Math.PI);
                break;
            case "triangle":
                ctx.moveTo(this.start.x, this.start.y);
                ctx.lineTo(this.end.x, this.end.y);
                ctx.lineTo(this.start.x + this.end.x - this.start.x, this.start.y);
                ctx.lineTo(this.start.x, this.start.y);
                break;
            default:
                break;
        }
        if (this.isFill) {
            ctx.fill();
        } else {
            ctx.stroke();
        }
    }

    review(ctx: CanvasRenderingContext2D, startPoint: Point, endPoint: Point) {



    }
}