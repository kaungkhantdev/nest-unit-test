import { Test, TestingModule } from '@nestjs/testing';
import { DemoService } from './demo.service';
import { DemoRepo } from './demo.repository';
import { Demo } from './entities/demo.entity';

const DEMO_DATA: Demo = {
  id: 1,
  name: 'demo',
  description: 'demo description',
};

describe('DemoService', () => {
  let service: DemoService;
  let repo: DemoRepo;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DemoService,
        {
          provide: DemoRepo,
          useFactory: () => ({
            getAll: jest.fn(),
            getOne: jest.fn(),
            createOne: jest.fn(),
            updateOne: jest.fn(),
          }),
        },
      ],
    }).compile();

    service = module.get<DemoService>(DemoService);
    repo = module.get<DemoRepo>(DemoRepo);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('repo should be defined', () => {
    expect(repo).toBeDefined();
  });

  describe('find all', () => {
    test('should return array of demos', async () => {
      const mockDemos: Demo[] = [DEMO_DATA];
      jest.spyOn(repo, 'getAll').mockResolvedValue(mockDemos);

      const result = await service.findAll();
      expect(result).toEqual(mockDemos);
      expect(repo.getAll).toHaveBeenCalled();
    });
  });

  describe('find one', () => {
    test('should return a demo by id', async () => {
      const mockDemo: Demo = DEMO_DATA;
      jest.spyOn(repo, 'getOne').mockResolvedValue(mockDemo);

      const result = await service.findOne(DEMO_DATA.id);
      expect(result).toEqual(mockDemo);
      expect(repo.getOne).toHaveBeenCalled();
    });

    test('should return null of demo is not found', async () => {
      jest.spyOn(repo, 'getOne').mockResolvedValue(null);

      const result = await service.findOne(DEMO_DATA.id);
      expect(result).toEqual(null);
      expect(repo.getOne).toHaveBeenCalled();
    });
  });

  describe('create', () => {
    test('should create a demo', async () => {
      const mockDemo = {
        name: DEMO_DATA.name,
        description: DEMO_DATA.description,
      };
      jest.spyOn(repo, 'createOne').mockResolvedValue(DEMO_DATA);

      const result = await service.create(mockDemo);
      expect(result).toEqual(DEMO_DATA);
      expect(repo.createOne).toHaveBeenCalledWith(mockDemo);
    });
  });

  describe('update', () => {
    test('should update a demo', async () => {
      const updateDemoDto = { description: 'Updated Description' };
      const mockUpdatedDemo = {
        id: DEMO_DATA.id,
        name: DEMO_DATA.name,
        ...updateDemoDto,
      };
      jest.spyOn(repo, 'updateOne').mockResolvedValue(mockUpdatedDemo);

      const result = await service.update(DEMO_DATA.id, updateDemoDto);
      expect(result).toEqual(mockUpdatedDemo);
      expect(repo.updateOne).toHaveBeenCalledWith(DEMO_DATA.id, updateDemoDto);
    });

    it('should return null if demo to update is not found', async () => {
      const demoId = 999;
      const updateDemoDto = { description: 'Updated Description' };
      jest.spyOn(repo, 'updateOne').mockResolvedValue(null);

      const result = await service.update(demoId, updateDemoDto);
      expect(result).toBeNull();
      expect(repo.updateOne).toHaveBeenCalledWith(demoId, updateDemoDto);
    });
  });
});
