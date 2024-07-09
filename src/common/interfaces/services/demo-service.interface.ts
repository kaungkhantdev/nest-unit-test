import { Demo } from '@modules/demo/entities/demo.entity';

export type Create = {
  name: string;
  description: string;
};

export type Update = {
  name?: string;
  description?: string;
};

export interface IDemoService {
  findAll(): Promise<Demo[]>;
  findOne(id: number): Promise<Demo | null>;
  create(demo: Create): Promise<Demo>;
  update(id: number, demo: Partial<Update>): Promise<Demo | null>;
}
