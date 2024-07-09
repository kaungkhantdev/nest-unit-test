import { Test, TestingModule } from '@nestjs/testing';
import { DemoOriginalService } from './demo-original.service';

describe('DemoOriginalService', () => {
  let service: DemoOriginalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoOriginalService],
    }).compile();

    service = module.get<DemoOriginalService>(DemoOriginalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
