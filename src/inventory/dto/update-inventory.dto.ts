// src/inventory/dto/update-inventory.dto.ts
import { IsInt, IsPositive, Min } from 'class-validator';

export class UpdateInventoryDto {
  @IsInt()
  @Min(0)
  stockQuantity: number;
}
