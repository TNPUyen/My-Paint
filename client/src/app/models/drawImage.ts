import { Point } from "../classes/point.class";

export interface DrawImageData {
    src: string;
    position: Point;
}

export class DrawImage implements DrawImageData {
    src: string;
    position: Point;

    constructor(data: DrawImageData) {
        this.src = data.src;
        this.position = data.position;
    }

    draw(ctx: CanvasRenderingContext2D) {
        const img = new Image();
        img.src = this.src;
        ctx.drawImage(img, this.position.x, this.position.y);
    }

    review(ctx: CanvasRenderingContext2D, startPoint: Point, endPoint: Point) {
        const img = new Image();
        img.src = this.src;
        ctx.drawImage(img, startPoint.x, startPoint.y, endPoint.x - startPoint.x, endPoint.y - startPoint.y);
    }

}