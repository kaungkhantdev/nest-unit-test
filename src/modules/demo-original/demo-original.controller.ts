import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DemoOriginalService } from './demo-original.service';
import { CreateDemoOriginalDto } from './dto/create-demo-original.dto';
import { UpdateDemoOriginalDto } from './dto/update-demo-original.dto';

@Controller('demo-original')
export class DemoOriginalController {
  constructor(private readonly demoOriginalService: DemoOriginalService) {}

  @Post()
  create(@Body() createDemoOriginalDto: CreateDemoOriginalDto) {
    return this.demoOriginalService.create(createDemoOriginalDto);
  }

  @Get()
  findAll() {
    return this.demoOriginalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demoOriginalService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDemoOriginalDto: UpdateDemoOriginalDto,
  ) {
    return this.demoOriginalService.update(id, updateDemoOriginalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demoOriginalService.remove(id);
  }
}
