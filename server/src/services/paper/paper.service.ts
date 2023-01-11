import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Paper, PaperDocument } from 'src/models/paper.model';

@Injectable()
export class PaperService {
    constructor(@InjectModel(Paper.name) private paperModel: Model<PaperDocument>,
    ) { }

    async save(paper: Paper) {
        return paper;
    }

    create(createPaperDto: Paper) {
        return 'This action adds a new paper';
    }

    findAll() {
        return `This action returns all paper`;
    }

    findOne(id: number) {
        return `This action returns a #${id} paper`;
    }

    update(id: number, updatePaperDto: Paper) {
        return `This action updates a #${id} paper`;
    }

    remove(id: number) {
        return `This action removes a #${id} paper`;
    }
}
