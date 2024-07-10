import { Demo } from '@modules/demo/entities/demo.entity';

export type Create = {
  name: string;
  description: string;
};

export type Update = {
  name?: string;
  description?: string;
};

export interface IDemoRepo {
  getAll(): Promise<Demo[]>;
  getOne(id: number): Promise<Demo | null>;
  createOne(demo: Create): Promise<Demo>;
  updateOne(id: number, demo: Partial<Update>): Promise<Demo | null>;
}
