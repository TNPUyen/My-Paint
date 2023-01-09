/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import databaseConfig from './configuration/database.config';
import { BoardModule } from './modules/board/board.module';

@Module({
  imports: [
    MongooseModule.forRoot(databaseConfig().appDatabase),
    UserModule,
    BoardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
