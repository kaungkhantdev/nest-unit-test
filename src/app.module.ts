import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from '@config/configuration.module';
import { DatabaseModule } from '@database/database.module';
import { DemoModule } from '@modules/demo/demo.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule, DemoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
