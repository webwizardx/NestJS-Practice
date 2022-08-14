import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from '../shared/interfaces';
import { Public } from '../shared/decorators/public-route.decorator';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { LoginSwagger } from './api-documentation';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @LoginSwagger()
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    return this.authService.login(req.user);
  }
}
