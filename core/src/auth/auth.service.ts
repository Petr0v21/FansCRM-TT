import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/user/models/user.model';
import { JwtPayloadType } from './types';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, password: string): Promise<User> {
    const user = await this.userService.findOne({ login });
    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }
    throw new UnauthorizedException();
  }

  async login(user: User) {
    const payload: JwtPayloadType = { login: user.login, userId: user.id };
    return {
      accessToken: await this.jwtService.signAsync(payload, {
        secret: process.env.SECRET_TOKEN,
        expiresIn: '45m',
      }),
    };
  }
}
