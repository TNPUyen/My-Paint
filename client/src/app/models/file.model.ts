import { Paper } from "./paper.model";
import { User } from "./user.model";

export interface File{
    _id: string;
    createdAt: number;
    updatedAt: number;
    title: string;
    owner: User;
    papers: Paper[];
}
