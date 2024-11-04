// src/food/food.controller.ts
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
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';

@Controller('foods')
export class FoodController {
  constructor(private foodService: FoodService) {}

  // API: Lấy danh sách tất cả các món ăn với phân trang cursor
  @Get()
  getAllFoods(
    @Query('cursor') cursor?: string,
    @Query('limit') limit?: string,
  ) {
    const cursorInt = cursor ? parseInt(cursor) : undefined;
    const limitInt = limit ? parseInt(limit) : undefined;
    return this.foodService.getAllFoods(cursorInt, limitInt);
  }

  // API: Lấy món ăn theo ID
  @Get(':id')
  getFoodById(@Param('id') id: string) {
    return this.foodService.getFoodById(Number(id));
  }

  // API: Tạo món ăn mới
  @Post()
  createFood(@Body() createFoodDto: CreateFoodDto) {
    return this.foodService.createFood(createFoodDto);
  }

  // API: Cập nhật món ăn theo ID
  @Put(':id')
  updateFood(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto) {
    return this.foodService.updateFood(Number(id), updateFoodDto);
  }

  // API: Xóa món ăn theo ID
  @Delete(':id')
  deleteFood(@Param('id') id: string) {
    return this.foodService.deleteFood(Number(id));
  }
}
