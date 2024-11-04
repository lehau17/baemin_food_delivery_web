import { Module } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { RolesController } from './role.controller';
import { RolesService } from './role.service';

@Module({
  controllers: [RolesController],
  providers: [RolesService, PrismaService],
})
export class RoleModule {}
