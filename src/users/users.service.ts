import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

// todo: name
type Qwe = User & Document;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<Qwe>) {}

  async create(createUserDto: any): Promise<User> {
    return this.userModel.create(createUserDto);
    // return 'This action adds a new user';
  }

  async findAll(filter = {}): Promise<User[]> {
    return this.userModel.find(filter);
  }

  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email });
  }

  async findOne(id: string): Promise<User> {
    console.log('asdasdasd', id);
    return this.userModel.findOne({ _id: id });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
    // return `This action updates a #${id} user`;
  }

  async remove(id: string): Promise<any> {
    return this.userModel.remove({ _id: id });
    // return `This action removes a #${id} user`;
  }
}
