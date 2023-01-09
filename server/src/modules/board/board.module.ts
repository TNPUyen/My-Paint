import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardController } from 'src/controllers/board/board.controller';
import { Board, BoardSchema } from 'src/models/board.model';
import { BoardService } from 'src/services/board/board.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Board.name, schema: BoardSchema }])
    ],
    controllers: [BoardController],
    providers: [BoardService]
})
export class BoardModule {}
