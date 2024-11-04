import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaymentsController } from './payment.controller';
import { PaymentsService } from './payment.service';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService, PrismaService],
})
export class PaymentModule {}
