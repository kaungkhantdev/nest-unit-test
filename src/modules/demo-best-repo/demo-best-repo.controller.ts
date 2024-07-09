import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemoBestRepoService } from './demo-best-repo.service';
import { CreateDemoBestRepoDto } from './dto/create-demo-best-repo.dto';
import { UpdateDemoBestRepoDto } from './dto/update-demo-best-repo.dto';

@Controller('demo-best-repo')
export class DemoBestRepoController {
  constructor(private readonly demoBestRepoService: DemoBestRepoService) {}

  @Post()
  create(@Body() createDemoBestRepoDto: CreateDemoBestRepoDto) {
    return this.demoBestRepoService.create(createDemoBestRepoDto);
  }

  @Get()
  findAll() {
    return this.demoBestRepoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demoBestRepoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemoBestRepoDto: UpdateDemoBestRepoDto) {
    return this.demoBestRepoService.update(+id, updateDemoBestRepoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demoBestRepoService.remove(+id);
  }
}
