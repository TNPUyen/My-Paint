import { Point } from "./point";
import { Shape } from "./shape";

export class Star implements Shape {
    endPoint: Point;
    startPoint: Point;
    color: string;

    constructor(startPoint: Point, endPoint: Point, color: string) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.color = color;
    }

    draw(ctx: any) {
        let radius = Math.sqrt(Math.pow(this.startPoint.x - this.endPoint.x, 2) + Math.pow(this.startPoint.y - this.endPoint.y, 2));
        let outerRadius = radius/2.5
        let spikes = 5
        let rot = Math.PI / 2 *3;
        let x = this.startPoint.x;
        let y = this.startPoint.y;
        let step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(this.startPoint.x, this.startPoint.y - radius)
        for (let i = 0; i < spikes; i++) {
            x = this.startPoint.x + Math.cos(rot) * radius;
            y = this.startPoint.y + Math.sin(rot) * radius;
            ctx.lineTo(x, y)
            rot += step

            x = this.startPoint.x + Math.cos(rot) * outerRadius;
            y = this.startPoint.y + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y)
            rot += step
        }
        ctx.lineTo(this.startPoint.x, this.startPoint.y - radius);
        ctx.closePath();
        ctx.lineWidth = 5;
        // ctx.strokeStyle = 'blue';
        ctx.stroke();
        // ctx.fillStyle = 'skyblue';
        // ctx.fill();
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
        let radius = Math.sqrt(Math.pow(this.startPoint.x - this.endPoint.x, 2) + Math.pow(this.startPoint.y - this.endPoint.y, 2));
        let outerRadius = radius/2.5
        let spikes = 5
        let rot = Math.PI / 2 *3;
        let x = this.startPoint.x;
        let y = this.startPoint.y;
        let step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(this.startPoint.x, this.startPoint.y - radius)
        for (let i = 0; i < spikes; i++) {
            x = this.startPoint.x + Math.cos(rot) * radius;
            y = this.startPoint.y + Math.sin(rot) * radius;
            ctx.lineTo(x, y)
            rot += step

            x = this.startPoint.x + Math.cos(rot) * outerRadius;
            y = this.startPoint.y + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y)
            rot += step
        }
        ctx.lineTo(this.startPoint.x, this.startPoint.y - radius);
        ctx.closePath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    strokeColor(color: string) {
        throw new Error("Method not implemented.");
    }

}