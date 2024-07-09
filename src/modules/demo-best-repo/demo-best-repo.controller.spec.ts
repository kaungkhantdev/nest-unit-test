import { Test, TestingModule } from '@nestjs/testing';
import { DemoBestRepoController } from './demo-best-repo.controller';
import { DemoBestRepoService } from './demo-best-repo.service';

describe('DemoBestRepoController', () => {
  let controller: DemoBestRepoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoBestRepoController],
      providers: [DemoBestRepoService],
    }).compile();

    controller = module.get<DemoBestRepoController>(DemoBestRepoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
