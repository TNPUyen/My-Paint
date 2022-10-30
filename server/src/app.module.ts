import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardController } from './controllers/board/board.controller';
import { BoardService } from './services/board/board.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './module/user/user.module';
import databaseConfig from './configuration/database.config';

@Module({
  imports: [
    MongooseModule.forRoot(databaseConfig().appDatabase),
    UserModule
  ],
  controllers: [AppController, BoardController],
  providers: [AppService,BoardService],
})
export class AppModule {}
