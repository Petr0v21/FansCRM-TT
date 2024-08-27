import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { WhereOptions } from 'sequelize';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async createUser(args: CreateUserDto): Promise<User> {
    const hashedPassword = bcrypt.hashSync(args.password, 10);
    return this.userModel.create({ ...args, password: hashedPassword });
  }

  async findOne(where: WhereOptions<User>): Promise<User> {
    return this.userModel.findOne({ where });
  }
}
