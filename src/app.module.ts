import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '@/database/dataSource';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ContentTypeModule } from '@/content-type/content-type.module';
import { FieldModule } from '@/field/field.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ContentTypeModule,
    FieldModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
