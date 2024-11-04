// src/inventory/inventory.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private inventoryService: InventoryService) {}

  // API: Lấy danh sách tồn kho (phân trang bằng cursor)
  @Get()
  getAllInventory(
    @Query('cursor') cursor?: number,
    @Query('limit') limit: number = 40,
  ) {
    return this.inventoryService.getAllInventory(cursor, limit);
  }

  // API: Lấy tồn kho của sản phẩm theo foodId
  @Get(':foodId')
  getInventoryByFoodId(@Param('foodId') foodId: string) {
    return this.inventoryService.getInventoryByFoodId(Number(foodId));
  }

  // API: Thêm sản phẩm vào kho
  @Post()
  createInventory(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoryService.createInventory(createInventoryDto);
  }

  // API: Cập nhật số lượng tồn kho của sản phẩm
  @Put(':foodId')
  updateInventory(
    @Param('foodId') foodId: string,
    @Body() updateInventoryDto: UpdateInventoryDto,
  ) {
    return this.inventoryService.updateInventory(
      Number(foodId),
      updateInventoryDto,
    );
  }

  // API: Xóa tồn kho của sản phẩm
  @Delete(':foodId')
  deleteInventory(@Param('foodId') foodId: string) {
    return this.inventoryService.deleteInventory(Number(foodId));
  }
}
