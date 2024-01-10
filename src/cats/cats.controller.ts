import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    console.log('find all');
    return { cats: 'all cats' };
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe, PositiveIntPipe) id: number) {
    console.log(`id: ${id}`);
    return 'a cat';
  }

  @Post()
  create() {
    return 'create a new cat';
  }

  @Put(':id')
  update() {
    return 'update a cat';
  }

  @Patch(':id')
  updateAttr() {
    return 'update attributes of a cat ';
  }

  @Delete(':id')
  delete() {
    return 'delete a cat';
  }
}
