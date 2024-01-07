import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    return 'all cats';
  }

  @Get(':id')
  findById() {
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
