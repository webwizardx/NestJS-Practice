import { Controller, Get } from '@nestjs/common';
import { Public } from './shared/decorators/public-route.decorator';

@Controller()
export class AppController {
  @Public()
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
