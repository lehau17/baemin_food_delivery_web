import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { CategoryModule } from './category/category.module';
import { FoodModule } from './food/food.module';
import { InventoryModule } from './inventory/inventory.module';
import { ResourceModule } from './resource/resource.module';
import { RoleModule } from './role/role.module';
import { RoleResourceModule } from './role-resource/role-resource.module';
import { UserModule } from './user/user.module';
import { PaymentModule } from './payment/payment.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    CategoryModule,
    FoodModule,
    InventoryModule,
    ResourceModule,
    RoleModule,
    RoleResourceModule,
    UserModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
