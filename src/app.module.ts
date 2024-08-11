import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '@/database/dataSource';
import { ContentTypeModule } from '@/content-type/content-type.module';
import { FieldModule } from '@/field/field.module';
import { FieldValuesModule } from '@/field-values/field-values.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ContentTypeModule,
    FieldModule,
    FieldValuesModule,
  ],
})
export class AppModule {}
