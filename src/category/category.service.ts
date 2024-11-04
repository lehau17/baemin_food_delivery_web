// src/category/category.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  // Lấy danh sách tất cả các danh mục với phân trang cursor
  async getAllCategories(cursor?: number, limit = 40) {
    return this.prisma.category.findMany({
      take: limit,
      skip: cursor ? 1 : 0,
      ...(cursor && { cursor: { id: cursor } }),
      orderBy: { id: 'asc' },
    });
  }

  async getCategoryById(id: number) {
    return this.prisma.category.findUnique({
      where: { id },
    });
  }

  async createCategory(data: { name: string; description?: string }) {
    return this.prisma.category.create({
      data,
    });
  }

  async updateCategory(
    id: number,
    data: { name?: string; description?: string },
  ) {
    return this.prisma.category.update({
      where: { id },
      data,
    });
  }

  async deleteCategory(id: number) {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
