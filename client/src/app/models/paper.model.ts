import { Point } from "../classes/point.class";
import { User } from "./user.model";

export interface File{
    _id: string;
    createdAt: number;
    updatedAt: number;
    title: string;
    owner: User;
    papers: Paper[];
}



export interface Freedraw{
    points: Point[];
    color: string;
    size: number;
}

export interface Shape{
    type: string;
    start: Point;
    end: Point;
    color: string;
    isFill: boolean;
}

export interface Text{
    text: string;
    position: Point;
    color: string;
    size: number;
}

export interface Image{
    src: string;
    position: Point;
}

export interface Eraser{
    points: Point[];
    size: number;
}

export interface Paper{
    _id: string;
    background: string;
    freedraws: Freedraw[];
    shapes: Shape[];
    texts: Text[];
    images: Image[];
    erasers: Eraser[];
}