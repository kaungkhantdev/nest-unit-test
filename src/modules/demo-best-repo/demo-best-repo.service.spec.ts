import { Test, TestingModule } from '@nestjs/testing';
import { DemoBestRepoService } from './demo-best-repo.service';

describe('DemoBestRepoService', () => {
  let service: DemoBestRepoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoBestRepoService],
    }).compile();

    service = module.get<DemoBestRepoService>(DemoBestRepoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
