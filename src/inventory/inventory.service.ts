// src/inventory/inventory.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  // Lấy danh sách tồn kho của tất cả sản phẩm
  async getAllInventory(cursor?: number, limit: number = 40) {
    const inventories = await this.prisma.inventory.findMany({
      take: limit,
      skip: cursor ? 1 : 0,
      ...(cursor && { cursor: { id: cursor } }),
      include: { food: true },
    });
    return inventories;
  }

  // Lấy thông tin tồn kho của sản phẩm theo ID
  async getInventoryByFoodId(foodId: number) {
    const inventory = await this.prisma.inventory.findUnique({
      where: { foodId },
      include: { food: true },
    });
    if (!inventory) throw new NotFoundException('Inventory not found');
    return inventory;
  }

  // Tạo mới tồn kho cho sản phẩm
  async createInventory(createInventoryDto: CreateInventoryDto) {
    const { foodId, stockQuantity } = createInventoryDto;
    return this.prisma.inventory.create({
      data: { foodId, stockQuantity },
    });
  }

  // Cập nhật số lượng tồn kho cho sản phẩm
  async updateInventory(
    foodId: number,
    updateInventoryDto: UpdateInventoryDto,
  ) {
    const { stockQuantity } = updateInventoryDto;
    const inventory = await this.prisma.inventory.findUnique({
      where: { foodId },
    });
    if (!inventory) throw new NotFoundException('Inventory not found');

    return this.prisma.inventory.update({
      where: { foodId },
      data: { stockQuantity },
    });
  }

  // Xóa tồn kho của sản phẩm
  async deleteInventory(foodId: number) {
    return this.prisma.inventory.delete({
      where: { foodId },
    });
  }
}
