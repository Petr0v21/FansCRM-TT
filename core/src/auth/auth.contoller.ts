import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginDto } from './dto/Login.dto';
import { UserService } from 'src/user/user.service';
import { RequestContextType } from './types';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() { login, password }: LoginDto) {
    const user = await this.authService.validateUser(login, password);
    return this.authService.login(user);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req: RequestContextType) {
    const { password, ...user } = (
      await this.userService.findOne({
        id: req.user.userId,
      })
    ).dataValues;
    return user;
  }
}
