/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from 'src/controllers/user/user.controller';
import { User, UserSchema } from 'src/models/user.model';
import { UserService } from 'src/services/user/user.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
    ],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
