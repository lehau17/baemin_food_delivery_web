import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResourcesController } from './resource.controller';
import { ResourcesService } from './resource.service';

@Module({
  controllers: [ResourcesController],
  providers: [ResourcesService, PrismaService],
})
export class ResourceModule {}
