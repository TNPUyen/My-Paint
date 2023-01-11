import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { User } from './user.model';

export type DrawFileDocument = DrawFile & Document;

@Schema({ timestamps: true })
export class DrawFile {

    @Prop({ default: '' })
    title: string;

    @IsNotEmpty()
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'users' })
    owner: User;
}

export const DrawFileSchema = SchemaFactory.createForClass(DrawFile);

