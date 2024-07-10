import { Test, TestingModule } from '@nestjs/testing';
import { DemoOriginalController } from './demo-original.controller';
import { DemoOriginalService } from './demo-original.service';
import { DemoOriginal } from './entities/demo-original.entity';

const DEMO_ORG_DATA = {
  id: 1,
  name: 'demo org',
  description: 'demo org',
};

describe('DemoOriginalController', () => {
  let controller: DemoOriginalController;
  let service: DemoOriginalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoOriginalController],
      providers: [
        {
          provide: DemoOriginalService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<DemoOriginalController>(DemoOriginalController);
    service = module.get<DemoOriginalService>(DemoOriginalService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('find all', () => {
    test('should be return demo originals', async () => {
      const data: DemoOriginal[] = [DEMO_ORG_DATA];
      jest.spyOn(service, 'findAll').mockResolvedValue(data);

      const result = await controller.findAll();
      expect(result).toEqual(data);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('find one', () => {
    test('should be return demo original', async () => {
      const data: DemoOriginal = DEMO_ORG_DATA;
      jest.spyOn(service, 'findOne').mockResolvedValue(data);
      const result = await controller.findOne('1');
      expect(result).toEqual(data);
      expect(service.findOne).toHaveBeenCalledWith('1');
    });

    test('should be return null', async () => {
      jest.spyOn(service, 'findOne').mockResolvedValue(null);
      const result = await controller.findOne('1');
      expect(result).toBeNull();
      expect(service.findOne).toHaveBeenCalledWith('1');
    });
  });

  describe('create', () => {
    test('should be return demo original', async () => {
      const data: DemoOriginal = DEMO_ORG_DATA;
      jest.spyOn(service, 'create').mockResolvedValue(data);
      const result = await controller.create(data);
      expect(result).toEqual(data);
      expect(service.create).toHaveBeenCalledWith(data);
    });
  });

  describe('update', () => {
    test('should be return demo original', async () => {
      const data: DemoOriginal = DEMO_ORG_DATA;
      jest.spyOn(service, 'update').mockResolvedValue(data);
      const result = await controller.update('1', data);
      expect(result).toEqual(data);
      expect(service.update).toHaveBeenCalledWith('1', data);
    });

    test('should be return null', async () => {
      jest.spyOn(service, 'update').mockResolvedValue(null);
      const result = await controller.update('1', DEMO_ORG_DATA);
      expect(result).toBeNull();
      expect(service.update).toHaveBeenCalledWith('1', DEMO_ORG_DATA);
    });
  });
});
