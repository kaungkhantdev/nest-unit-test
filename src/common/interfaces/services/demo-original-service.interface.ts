import { DemoOriginal } from '@modules/demo-original/entities/demo-original.entity';

export type Create = {
  name: string;
  description: string;
};

export type Update = {
  name?: string;
  description?: string;
};

export interface IDemoOriginalService {
  create(data: Create): Promise<DemoOriginal>;
  findAll(): Promise<DemoOriginal[] | null>;
  findOne(id: string): Promise<DemoOriginal | null>;
  update(id: string, data: Update): Promise<DemoOriginal | null>;
  remove(id: string): Promise<null>;
}
