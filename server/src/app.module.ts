/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { PaperModule } from './modules/paper/paper.module';
import { FileModule } from './modules/file/file.module';

import databaseConfig from './configuration/database.config';

@Module({
  imports: [
    MongooseModule.forRoot(databaseConfig().appDatabase),
    UserModule,
    PaperModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}
