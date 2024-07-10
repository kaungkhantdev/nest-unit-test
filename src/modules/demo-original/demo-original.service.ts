import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DemoOriginal } from './entities/demo-original.entity';
import { Repository } from 'typeorm';
import {
  Create,
  IDemoOriginalService,
  Update,
} from '@common/interfaces/services/demo-original-service.interface';

@Injectable()
export class DemoOriginalService implements IDemoOriginalService {
  constructor(
    @InjectRepository(DemoOriginal)
    private readonly repo: Repository<DemoOriginal>,
  ) {}

  async create(data: Create): Promise<DemoOriginal> {
    const dO = new DemoOriginal();
    dO.name = data.name;
    dO.description = data.description;
    return await this.repo.save(dO);
  }

  async findAll(): Promise<DemoOriginal[] | null> {
    return await this.repo.find();
  }

  async findOne(id: string): Promise<DemoOriginal | null> {
    if (!id) return null;
    return await this.repo.findOneBy({ id: +id });
  }

  async update(
    id: string,
    data: Partial<Update>,
  ): Promise<DemoOriginal | null> {
    const demoOriginal = await this.repo.findOneBy({ id: +id });
    if (!id || !demoOriginal) {
      return null;
    }

    Object.assign(demoOriginal, data);
    await this.repo.save(demoOriginal);

    return this.repo.findOneBy({ id: +id });
  }

  async remove(id: string): Promise<null> {
    const cat = await this.repo.findOneBy({ id: +id });
    if (!cat) {
      return null;
    }
    await this.repo.remove(cat);
    return null;
  }
}
