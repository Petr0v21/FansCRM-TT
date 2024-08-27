import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Op } from 'sequelize';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() args: CreateUserDto) {
    const existedUser = await this.userService.findOne({
      [Op.or]: [{ login: args.login }, { phone: args.phone }],
    });
    if (existedUser) {
      throw new BadRequestException(
        'User with this login or phone already exist!',
      );
    }
    return this.userService.createUser(args);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.userService.findOne({ id });
  }
}
