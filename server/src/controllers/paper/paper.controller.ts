import { Body, Controller, Logger, Post, Query } from '@nestjs/common';
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'http';
import { Paper } from 'src/models/paper.model';
import { PaperService } from 'src/services/paper/paper.service';

@WebSocketGateway({
    cors: {
        origin: '*',
    }, transports: ['websocket']
})
export class PaperController {

    @WebSocketServer()
    server: Server;

    constructor(private readonly paperService: PaperService) { }

    handleDisconnect(client: any) {
        console.log(`Client ${client.id} is disconnected`);
    }

    handleConnection(client: any, ...args: any[]) {
        console.log(`Client ${client.id} is csonnected`)
    }

    @SubscribeMessage('save')
    async save(@MessageBody('paper') paper: any) {
        console.log('save', paper);
        const msg = await this.paperService.save(paper);
        this.server.emit('saved', msg);
    }

    @SubscribeMessage('createPaper')
    create(@MessageBody() createPaperDto: Paper) {
        return this.paperService.create(createPaperDto);
    }

    @SubscribeMessage('findAllPaper')
    findAll() {
        return this.paperService.findAll();
    }

    @SubscribeMessage('findOnePaper')
    findOne(@MessageBody() id: number) {
        return this.paperService.findOne(id);
    }

    @SubscribeMessage('updatePaper')
    update(@MessageBody() updatePaperDto: Paper, @MessageBody('id') id: number) {
        return this.paperService.update(id, updatePaperDto);
    }

    @SubscribeMessage('removePaper')
    remove(@MessageBody() id: number) {
        return this.paperService.remove(id);
    }
}
