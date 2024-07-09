import { Test, TestingModule } from '@nestjs/testing';
import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';
import { Demo } from './entities/demo.entity';
import {
  Create,
  Update,
} from '@common/interfaces/services/demo-service.interface';

const DEMO_DATA: Demo = {
  id: 1,
  name: 'demo',
  description: 'demo description',
};

describe('DemoController', () => {
  let controller: DemoController;
  let service: DemoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoController],
      providers: [
        {
          provide: DemoService,
          useValue: {
            create: jest.fn(),
            update: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<DemoController>(DemoController);
    service = module.get<DemoService>(DemoService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('controller should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('service should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    test('should create a new Demo', async () => {
      const createDemoDto: Create = {
        name: 'New Demo',
        description: 'New Description',
      };
      jest.spyOn(service, 'create').mockResolvedValue(DEMO_DATA);

      const result = await controller.create(createDemoDto);
      expect(result).toEqual(DEMO_DATA);
      expect(service.create).toHaveBeenCalledWith(createDemoDto);
    });
  });

  describe('update', () => {
    test('should update a demo', async () => {
      const updateDemoDto: Partial<Update> = {
        description: 'Updated Description',
      };
      const mockUpdatedDemo: Demo = {
        id: DEMO_DATA.id,
        name: DEMO_DATA.name,
        description: updateDemoDto.description!,
      };

      jest.spyOn(service, 'update').mockResolvedValue(mockUpdatedDemo);
      const result = await controller.update('1', updateDemoDto);
      expect(result).toEqual(mockUpdatedDemo);
      expect(service.update).toHaveBeenCalledWith(1, updateDemoDto);
    });

    test('should return null of demo to update is not found', async () => {
      const updateDemoDto: Partial<Update> = {
        description: 'Updated Description',
      };
      jest.spyOn(service, 'update').mockResolvedValue(null);

      const result = await controller.update('99', updateDemoDto);
      expect(result).toBeNull();
      expect(service.update).toHaveBeenCalledWith(99, updateDemoDto);
    });
  });

  describe('find all', () => {
    test('should find all demos', async () => {
      const mockDemos: Demo[] = [DEMO_DATA];
      jest.spyOn(service, 'findAll').mockResolvedValue(mockDemos);

      const result = await controller.findAll();
      expect(result).toEqual(mockDemos);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('find one', () => {
    test('should find a demo by id', async () => {
      const mockDemo: Demo = DEMO_DATA;
      jest.spyOn(service, 'findOne').mockResolvedValue(mockDemo);
      const result = await controller.findOne('1');
      expect(result).toEqual(mockDemo);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });

    it('should return null if demo is not found', async () => {
      jest.spyOn(service, 'findOne').mockResolvedValue(null);

      const result = await controller.findOne('999');
      expect(result).toBeNull();
      expect(service.findOne).toHaveBeenCalledWith(999);
    });
  });
});
