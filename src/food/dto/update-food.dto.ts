// src/food/dto/update-food.dto.ts
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateFoodDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  price?: number;
}
