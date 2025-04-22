import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(productId: number) {
    return this.prisma.product.findUnique({
      where: { productId },
    });
  }

  async create(data: { name: string; price: number }) {
    return this.prisma.product.create({
      data,
    });
  }

  async update(productId: number, data: { name?: string; price?: number }) {
    return this.prisma.product.update({
      where: { productId },
      data,
    });
  }

  async delete(productId: number) {
    return this.prisma.product.delete({
      where: { productId },
    });
  }
}
