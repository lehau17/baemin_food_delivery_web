import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoleResourceService {
  constructor(private prisma: PrismaService) {}

  async addResourceToRole(roleId: number, resourceId: number) {
    return this.prisma.roleResource.create({
      data: {
        roleId,
        resourceId,
      },
    });
  }

  async removeResourceFromRole(roleId: number, resourceId: number) {
    return this.prisma.roleResource.deleteMany({
      where: {
        roleId,
        resourceId,
      },
    });
  }

  async getResourcesByRole(roleId: number) {
    return this.prisma.roleResource.findMany({
      where: { roleId },
    });
  }
}
