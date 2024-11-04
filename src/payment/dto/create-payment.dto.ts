import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsNumber()
  orderId: number; // ID of the order associated with the payment

  @IsNotEmpty()
  @IsNumber()
  amount: number; // Amount of the payment

  @IsNotEmpty()
  @IsString()
  paymentStatus: string; // Status of the payment, e.g., "completed", "pending"

  @IsNotEmpty()
  @IsString()
  paymentMethod: string; // Method of payment, e.g., "credit card", "paypal"
}
