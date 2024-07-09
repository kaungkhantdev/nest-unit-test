import { Module } from '@nestjs/common';
import { DemoBestRepoService } from './demo-best-repo.service';
import { DemoBestRepoController } from './demo-best-repo.controller';

@Module({
  controllers: [DemoBestRepoController],
  providers: [DemoBestRepoService],
})
export class DemoBestRepoModule {}
