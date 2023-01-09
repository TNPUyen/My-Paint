import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {  IsNotEmpty } from 'class-validator';

export type BoardDocument = Board & Document;

@Schema({ timestamps: true })
export class Board {

    @Prop({ default: '' })
    displayName: string;

    @Prop({ default: '' })
    photoURL: string; 
}

export const BoardSchema = SchemaFactory.createForClass(Board);

