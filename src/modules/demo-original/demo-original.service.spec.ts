import { Test, TestingModule } from '@nestjs/testing';
import { DemoOriginalService } from './demo-original.service';
import { Repository } from 'typeorm';
import { DemoOriginal } from './entities/demo-original.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

const DEMO_ORG_DATA = {
  id: 1,
  name: 'demo org',
  description: 'demo org',
} as DemoOriginal;

describe('DemoOriginalService', () => {
  let service: DemoOriginalService;
  let repo: Repository<DemoOriginal>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DemoOriginalService,
        {
          provide: getRepositoryToken(DemoOriginal),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<DemoOriginalService>(DemoOriginalService);
    repo = module.get<Repository<DemoOriginal>>(
      getRepositoryToken(DemoOriginal),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be define', () => {
    expect(repo).toBeDefined();
  });

  describe('create', () => {
    test('should be create demo original', async () => {
      jest.spyOn(repo, 'save').mockResolvedValue(DEMO_ORG_DATA);

      const createData = {
        name: DEMO_ORG_DATA.name,
        description: DEMO_ORG_DATA.description,
      };

      const result = await service.create(createData);

      expect(result).toEqual(DEMO_ORG_DATA);
      expect(result.name).toEqual(DEMO_ORG_DATA.name);
      expect(result.description).toEqual(DEMO_ORG_DATA.description);
      expect(repo.save).toHaveBeenCalled();
      expect(repo.save).toHaveBeenCalledWith(
        expect.objectContaining(createData),
      );
    });
  });

  describe('update', () => {
    test('should be update demo original', async () => {
      jest.spyOn(repo, 'save').mockResolvedValue(DEMO_ORG_DATA);
      jest.spyOn(repo, 'findOneBy').mockResolvedValue(DEMO_ORG_DATA);

      const updateData = {
        name: 'hello update',
      };

      const result = await service.update(
        DEMO_ORG_DATA.id.toString(),
        updateData,
      );
      expect(result).toEqual({ ...DEMO_ORG_DATA, ...updateData });
      expect(repo.findOneBy).toHaveBeenCalledWith({ id: DEMO_ORG_DATA.id });
      expect(repo.save).toHaveBeenCalledWith(
        expect.objectContaining(updateData),
      );
    });

    test('should be null update demo not exiting', async () => {
      jest.spyOn(repo, 'save').mockResolvedValue(null);
      jest.spyOn(repo, 'findOneBy').mockResolvedValue(null);

      const updateData = {
        name: 'hello update',
      };

      const result = await service.update('123', updateData);
      expect(result).toBeNull();
      expect(repo.findOneBy).toHaveBeenCalledWith({ id: 123 });
      expect(repo.save).not.toHaveBeenCalled();
    });
  });

  describe('find all', () => {
    test('should be return demo original array', async () => {
      jest.spyOn(repo, 'find').mockResolvedValue([DEMO_ORG_DATA]);

      const result = await service.findAll();
      expect(result).toEqual([DEMO_ORG_DATA]);
      expect(repo.find).toHaveBeenCalled();
    });
  });

  describe('find one', () => {
    test('should be return demo original', async () => {
      jest.spyOn(repo, 'findOneBy').mockResolvedValue(DEMO_ORG_DATA);

      const result = await service.findOne(DEMO_ORG_DATA.id.toString());
      expect(result).toEqual(DEMO_ORG_DATA);
      expect(repo.findOneBy).toHaveBeenCalled();
    });

    test('should be return null when demo original is not exit', async () => {
      jest.spyOn(repo, 'findOneBy').mockResolvedValue(null);
      const result = await service.findOne('123');
      expect(result).toBeNull();
      expect(repo.findOneBy).toHaveBeenCalled();
    });
  });
});
