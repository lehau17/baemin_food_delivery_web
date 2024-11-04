import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Message } from 'src/common/deco/message';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @Message('Login success')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('/register')
  @Message('Register user')
  async register(@Body() payload: RegisterDto) {
    return this.authService.register(payload);
  }
}
