import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';

export type PaperDocument = Paper & Document;

@Schema({ timestamps: true })
export class Paper {

    @IsNotEmpty()
    @Prop()
    background: string;
    
    @Prop({ default: [] })
    freedraws: Freedraw[];
    
    @Prop({ default: [] })
    shapes: Shape[];
    
    @Prop({ default: [] })
    texts: Text[];
    
    @Prop({ default: [] })
    images: Image[];
    
    @Prop({ default: [] })
    erasers: Eraser[];

}

export const PaperSchema = SchemaFactory.createForClass(Paper);

export interface Point {
    x: number;
    y: number;
}

export interface Freedraw {
    points: Point[];
    color: string;
    size: number;
}

export interface Shape {
    type: string;
    start: Point;
    end: Point;
    color: string;
    isFill: boolean;
}

export interface Text {
    text: string;
    position: Point;
    color: string;
    size: number;
}

export interface Image {
    src: string;
    position: Point;
}

export interface Eraser {
    points: Point[];
    size: number;
}

