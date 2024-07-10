import { DemoOriginal } from '@modules/demo-original/entities/demo-original.entity';
import { Demo } from '@modules/demo/entities/demo.entity';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get('database.host'),
      port: +this.configService.get('database.port'),
      username: this.configService.get('database.user'),
      password: this.configService.get('database.password'),
      database: this.configService.get('database.name'),
      entities: [Demo, DemoOriginal],
      synchronize: true,
    };
  }
}
