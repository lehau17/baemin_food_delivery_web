// src/food/food.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FoodService {
  constructor(private prisma: PrismaService) {}

  // Lấy danh sách tất cả các món ăn với phân trang cursor
  async getAllFoods(cursor?: number, limit = 40) {
    return this.prisma.food.findMany({
      take: limit,
      skip: cursor ? 1 : 0,
      ...(cursor && { cursor: { id: cursor } }),
      orderBy: { id: 'asc' },
    });
  }

  // Tìm món ăn theo ID
  async getFoodById(id: number) {
    return this.prisma.food.findUnique({
      where: { id },
    });
  }

  // Tạo món ăn mới
  async createFood(data: {
    name: string;
    description?: string;
    price: number;
    categoryId: number;
  }) {
    return this.prisma.food.create({
      data,
    });
  }

  // Cập nhật món ăn theo ID
  async updateFood(
    id: number,
    data: { name?: string; description?: string; price?: number },
  ) {
    return this.prisma.food.update({
      where: { id },
      data,
    });
  }

  // Xóa món ăn theo ID
  async deleteFood(id: number) {
    return this.prisma.food.delete({
      where: { id },
    });
  }
}
