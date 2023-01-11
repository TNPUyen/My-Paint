/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaperController } from 'src/controllers/paper/paper.controller';
import { Paper, PaperSchema } from 'src/models/paper.model';
import { PaperService } from 'src/services/paper/paper.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Paper.name, schema: PaperSchema }])
    ],
    controllers: [],
    providers: [PaperService,PaperController]
})
export class PaperModule {}
