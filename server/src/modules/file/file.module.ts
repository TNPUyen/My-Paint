/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileController } from 'src/controllers/file/file.controller';
import { DrawFile, DrawFileSchema } from 'src/models/drawFile.model';
import { FileService } from 'src/services/file/file.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: DrawFile.name, schema: DrawFileSchema }])
    ],
    controllers: [FileController],
    providers: [FileService]
})
export class FileModule {}
