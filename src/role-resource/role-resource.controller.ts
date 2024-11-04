import { Controller, Post, Delete, Param } from '@nestjs/common';
import { RoleResourceService } from './role-resource.service';

@Controller('role-resources')
export class RoleResourceController {
  constructor(private readonly roleResourceService: RoleResourceService) {}

  @Post(':roleId/resource/:resourceId')
  async addResourceToRole(
    @Param('roleId') roleId: number,
    @Param('resourceId') resourceId: number,
  ) {
    return this.roleResourceService.addResourceToRole(roleId, resourceId);
  }

  @Delete(':roleId/resource/:resourceId')
  async removeResourceFromRole(
    @Param('roleId') roleId: number,
    @Param('resourceId') resourceId: number,
  ) {
    return this.roleResourceService.removeResourceFromRole(roleId, resourceId);
  }
}
