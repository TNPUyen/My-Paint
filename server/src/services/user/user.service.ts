import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/models/user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ){

    }

    async create(user: User) {
        const user_Indb = await this.userModel.findOne({ email: user.email})
        if(!user_Indb){
          console.log(1);
          const newUser = new this.userModel();
          newUser.displayName = user.displayName;
          newUser.photoURL = user.photoURL;
          newUser.uid = user.uid;
          newUser.email = user.email;
          const _user = await newUser.save(); 
          return _user;
        }
        if(user_Indb){
          console.log(`user with email:${user.email} has exist `)
        }
    }
}
