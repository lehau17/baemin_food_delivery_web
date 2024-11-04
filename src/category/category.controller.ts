// src/category/category.controller.ts
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
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  // API: Lấy danh sách tất cả các danh mục với phân trang cursor
  @Get()
  getAllCategories(
    @Query('cursor') cursor?: string,
    @Query('limit') limit?: string,
  ) {
    const cursorInt = cursor ? parseInt(cursor) : undefined;
    const limitInt = limit ? parseInt(limit) : undefined;
    return this.categoryService.getAllCategories(cursorInt, limitInt);
  }

  @Get(':id')
  getCategoryById(@Param('id') id: string) {
    return this.categoryService.getCategoryById(Number(id));
  }

  @Post()
  createCategory(@Body() data: { name: string; description?: string }) {
    return this.categoryService.createCategory(data);
  }

  @Put(':id')
  updateCategory(
    @Param('id') id: string,
    @Body() data: { name?: string; description?: string },
  ) {
    return this.categoryService.updateCategory(Number(id), data);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: string) {
    return this.categoryService.deleteCategory(Number(id));
  }
}
