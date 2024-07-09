import { Test, TestingModule } from '@nestjs/testing';
import { DemoOriginalController } from './demo-original.controller';
import { DemoOriginalService } from './demo-original.service';

describe('DemoOriginalController', () => {
  let controller: DemoOriginalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoOriginalController],
      providers: [DemoOriginalService],
    }).compile();

    controller = module.get<DemoOriginalController>(DemoOriginalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
