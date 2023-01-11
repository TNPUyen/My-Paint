import { Point } from "../classes/point.class";

export interface DrawableObject {
    draw(ctx: CanvasRenderingContext2D): void;
    review(ctx: CanvasRenderingContext2D, startPoint: Point, endPoint: Point): void;

}