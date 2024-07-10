import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from '@config/configuration.module';
import { DatabaseModule } from '@database/database.module';
import { DemoModule } from '@modules/demo/demo.module';
import { DemoOriginalModule } from '@modules/demo-original/demo-original.module';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    DemoModule,
    DemoOriginalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
