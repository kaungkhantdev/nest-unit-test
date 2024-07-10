import { Injectable } from '@nestjs/common';
import {
  Create,
  IDemoService,
  Update,
} from '@common/interfaces/services/demo-service.interface';
import { Demo } from './entities/demo.entity';
import { DemoRepo } from './demo.repository';

@Injectable()
export class DemoService implements IDemoService {
  constructor(private repo: DemoRepo) {}

  async findAll(): Promise<Demo[]> {
    return await this.repo.getAll();
  }

  async findOne(id: number): Promise<Demo | null> {
    return await this.repo.getOne(id);
  }

  async create(demo: Create): Promise<Demo> {
    return await this.repo.createOne(demo);
  }

  async update(id: number, demo: Partial<Update>): Promise<Demo | null> {
    return await this.repo.updateOne(id, demo);
  }
}
