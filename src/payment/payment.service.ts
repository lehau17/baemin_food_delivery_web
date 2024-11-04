import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Payment } from '@prisma/client';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePaymentDto): Promise<Payment> {
    return this.prisma.payment.create({
      data,
    });
  }

  async findAll(): Promise<Payment[]> {
    return this.prisma.payment.findMany();
  }

  async findOne(id: number): Promise<Payment> {
    return this.prisma.payment.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdatePaymentDto): Promise<Payment> {
    return this.prisma.payment.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Payment> {
    return this.prisma.payment.delete({
      where: { id },
    });
  }
}
