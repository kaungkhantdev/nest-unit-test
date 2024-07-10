import { Module } from '@nestjs/common';
import { DemoOriginalService } from './demo-original.service';
import { DemoOriginalController } from './demo-original.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoOriginal } from './entities/demo-original.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DemoOriginal])],
  controllers: [DemoOriginalController],
  providers: [DemoOriginalService],
})
export class DemoOriginalModule {}
