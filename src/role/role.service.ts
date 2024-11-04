import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRoleDto): Promise<Role> {
    return this.prisma.role.create({
      data,
    });
  }

  async findAll(): Promise<Role[]> {
    return this.prisma.role.findMany({
      include: { resources: true }, // Include resources for role
    });
  }

  async findOne(id: number): Promise<Role> {
    return this.prisma.role.findUnique({
      where: { id },
      include: { resources: true },
    });
  }

  async update(id: number, data: UpdateRoleDto): Promise<Role> {
    return this.prisma.role.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Role> {
    return this.prisma.role.delete({
      where: { id },
    });
  }
}
