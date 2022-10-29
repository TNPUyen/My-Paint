import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { BoardController } from './controllers/board/board.controller';
import { BoardService } from './services/board/board.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, BoardController],
  providers: [AppService, UserService, BoardService],
})
export class AppModule {}
