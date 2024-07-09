import { Module } from '@nestjs/common';
import { DemoOriginalService } from './demo-original.service';
import { DemoOriginalController } from './demo-original.controller';

@Module({
  controllers: [DemoOriginalController],
  providers: [DemoOriginalService],
})
export class DemoOriginalModule {}
