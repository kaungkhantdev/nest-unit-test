import { Injectable } from '@nestjs/common';
import { CreateDemoBestRepoDto } from './dto/create-demo-best-repo.dto';
import { UpdateDemoBestRepoDto } from './dto/update-demo-best-repo.dto';

@Injectable()
export class DemoBestRepoService {
  create(createDemoBestRepoDto: CreateDemoBestRepoDto) {
    return 'This action adds a new demoBestRepo';
  }

  findAll() {
    return `This action returns all demoBestRepo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demoBestRepo`;
  }

  update(id: number, updateDemoBestRepoDto: UpdateDemoBestRepoDto) {
    return `This action updates a #${id} demoBestRepo`;
  }

  remove(id: number) {
    return `This action removes a #${id} demoBestRepo`;
  }
}
