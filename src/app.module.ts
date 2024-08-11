import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ContentTypeModule } from '@/content-type/content-type.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '@/database/dataSource';

@Module({
  imports: [ContentTypeModule, TypeOrmModule.forRoot(dataSourceOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
