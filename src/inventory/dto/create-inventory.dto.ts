// src/inventory/dto/create-inventory.dto.ts
import { IsInt, IsPositive } from 'class-validator';

export class CreateInventoryDto {
  @IsInt()
  foodId: number;

  @IsInt()
  @IsPositive()
  stockQuantity: number;
}
