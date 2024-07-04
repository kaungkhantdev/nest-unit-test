import { Module } from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Demo } from './entities/demo.entity';
import { DemoRepo } from './demo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Demo])],
  controllers: [DemoController],
  providers: [DemoService, DemoRepo],
})
export class DemoModule {}
