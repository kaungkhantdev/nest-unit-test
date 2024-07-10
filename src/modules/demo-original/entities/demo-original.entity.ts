import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DemoOriginal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('text')
  description: string;
}
