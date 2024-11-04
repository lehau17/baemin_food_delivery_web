import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Resource } from '@prisma/client';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';

@Injectable()
export class ResourcesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateResourceDto): Promise<Resource> {
    return this.prisma.resource.create({
      data,
    });
  }

  async findAll(): Promise<Resource[]> {
    return this.prisma.resource.findMany();
  }

  async findOne(id: number): Promise<Resource> {
    return this.prisma.resource.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateResourceDto): Promise<Resource> {
    return this.prisma.resource.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Resource> {
    return this.prisma.resource.delete({
      where: { id },
    });
  }
}
