import { Module } from '@nestjs/common';
import { RoleResourceService } from './role-resource.service';
import { RoleResourceController } from './role-resource.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RoleResourceController],
  providers: [RoleResourceService, PrismaService],
})
export class RoleResourceModule {}
