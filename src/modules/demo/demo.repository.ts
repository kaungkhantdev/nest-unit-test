import {
  Create,
  IDemoRepo,
  Update,
} from '@common/interfaces/repositories/demo-repo.interface';
import { Injectable } from '@nestjs/common';
import { Demo } from './entities/demo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DemoRepo implements IDemoRepo {
  constructor(
    @InjectRepository(Demo)
    private model: Repository<Demo>,
  ) {}
  async getAll(): Promise<Demo[]> {
    return await this.model.find();
  }

  async getOne(id: number): Promise<Demo | null> {
    const result = await this.model.findOneBy({ id });
    if (!id || !result) {
      return null;
    }
    return result;
  }

  async createOne(demo: Create): Promise<Demo> {
    return await this.model.create(demo);
  }

  async updateOne(id: number, demo: Partial<Update>): Promise<Demo | null> {
    await this.model.update(id, demo);
    return this.model.findOne({ where: { id } });
  }
}
