import { DrawableObject } from "./drawable-object";

export interface Paper {
    _id: string;
    background: string;
    objects: DrawableObject[];
}