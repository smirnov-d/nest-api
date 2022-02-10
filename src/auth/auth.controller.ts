import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities/user.entity';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  async register(@Body() req: AuthDto): Promise<User> {
    return this.authService.register(req);
  }

  @Public()
  @Post('login')
  @HttpCode(200)
  async login(@Body() req: AuthDto): Promise<User> {
    return await this.authService.login(req);
  }
  // register(email: string, pass: string) {
  //   this.authService.register(email, pass);
  // }
}
