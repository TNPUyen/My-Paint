import { Body, Controller, Post} from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){

    }

    @Post()
    async createUser(@Body() user: any){
        return await this.userService.create(user);
    }
}
