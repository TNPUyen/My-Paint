import { Point } from "./point";

export interface Shape{
    startPoint: Point;
    endPoint: Point;
    color: string;

    draw(ctx: any): any;
    move(point: Point): any;
    resize(point: Point): any;
    rotate(angle: number): any;
    fillColor(ctx: any): any;
    strokeColor(color: string): any;
}