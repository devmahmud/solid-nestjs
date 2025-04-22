import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll() {
    return this.productsService.findAll();
  }

  @Get(':productId')
  async findOne(@Param('productId') productId: string) {
    return this.productsService.findOne(Number(productId));
  }

  @Post()
  async create(@Body() data: { name: string; price: number }) {
    return this.productsService.create(data);
  }

  @Put(':productId')
  async update(
    @Param('productId') productId: string,
    @Body() data: { name?: string; price?: number },
  ) {
    return this.productsService.update(Number(productId), data);
  }

  @Delete(':productId')
  async delete(@Param('productId') productId: string) {
    return this.productsService.delete(Number(productId));
  }
}
