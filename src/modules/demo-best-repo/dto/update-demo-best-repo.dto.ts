import { PartialType } from '@nestjs/mapped-types';
import { CreateDemoBestRepoDto } from './create-demo-best-repo.dto';

export class UpdateDemoBestRepoDto extends PartialType(CreateDemoBestRepoDto) {}
