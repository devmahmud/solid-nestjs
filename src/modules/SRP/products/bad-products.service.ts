import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';

@Injectable()
export class BadProductsService {
  constructor(private readonly prisma: PrismaService) {}

  // Product management
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

  // Order management (violating SRP by mixing responsibilities)
  async createOrder(productIds: number[]) {
    const products = await this.prisma.product.findMany({
      where: { productId: { in: productIds } },
    });

    const totalPrice = products.reduce(
      (sum, product) => sum + product.price,
      0,
    );

    return this.prisma.order.create({
      data: {
        totalPrice,
        products: {
          connect: products.map((product) => ({
            productId: product.productId,
          })),
        },
      },
    });
  }

  // Email notification (violating SRP by mixing responsibilities)
  async sendProductNotification(productId: number) {
    const product = await this.findOne(productId);
    if (!product) {
      throw new Error('Product not found');
    }
    // Simulate sending email
    console.log(`Sending notification about product: ${product.name}`);
    return { success: true };
  }

  // Analytics (violating SRP by mixing responsibilities)
  async getProductAnalytics() {
    const products = await this.findAll();
    const totalProducts = products.length;
    const averagePrice =
      products.reduce((sum, p) => sum + p.price, 0) / totalProducts;
    return {
      totalProducts,
      averagePrice,
    };
  }
}
