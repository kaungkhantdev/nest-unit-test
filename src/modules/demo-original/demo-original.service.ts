import { Injectable } from '@nestjs/common';
import { CreateDemoOriginalDto } from './dto/create-demo-original.dto';
import { UpdateDemoOriginalDto } from './dto/update-demo-original.dto';

@Injectable()
export class DemoOriginalService {
  create(createDemoOriginalDto: CreateDemoOriginalDto) {
    return 'This action adds a new demoOriginal';
  }

  findAll() {
    return `This action returns all demoOriginal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demoOriginal`;
  }

  update(id: number, updateDemoOriginalDto: UpdateDemoOriginalDto) {
    return `This action updates a #${id} demoOriginal`;
  }

  remove(id: number) {
    return `This action removes a #${id} demoOriginal`;
  }
}
