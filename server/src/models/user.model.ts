import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {

    @Prop({ default: '' })
    displayName: string;

    @IsNotEmpty()
    @Prop()
    uid: string;

    @Prop({ default: '' })
    photoURL: string;

    @IsNotEmpty()
    @IsEmail()
    @Prop()
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

