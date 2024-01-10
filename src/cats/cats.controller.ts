import { Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { CatsService } from './cats.service';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return 'current cat';
  }

  @Post('signup')
  async signup() {
    return 'signup';
  }

  @Post('signin')
  async signin() {
    return 'signin';
  }

  @Post('signout')
  async signout() {
    return 'signout';
  }

  @Post('upload/cats')
  async uploadCatImg() {
    return 'upload a cat image';
  }
}
