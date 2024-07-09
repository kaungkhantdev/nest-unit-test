import { PartialType } from '@nestjs/mapped-types';
import { CreateDemoOriginalDto } from './create-demo-original.dto';

export class UpdateDemoOriginalDto extends PartialType(CreateDemoOriginalDto) {}
