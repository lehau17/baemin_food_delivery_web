import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ResourcesService } from './resource.service';
import { Resource } from '@prisma/client';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';

@Controller('resources')
export class ResourcesController {
  constructor(private readonly resourcesService: ResourcesService) {}

  @Post()
  async create(@Body() data: CreateResourceDto): Promise<Resource> {
    return this.resourcesService.create(data);
  }

  @Get()
  async findAll(): Promise<Resource[]> {
    return this.resourcesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Resource> {
    return this.resourcesService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateResourceDto,
  ): Promise<Resource> {
    return this.resourcesService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Resource> {
    return this.resourcesService.remove(+id);
  }
}
