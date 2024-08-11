import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ContentTypeModule } from '@/content-type/content-type.module';
import { FieldModule } from '@/field/field.module';
import { FieldValuesModule } from '@/field-values/field-values.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentType } from '@/content-type/entities/content-type.entity';
import { Field } from '@/field/entities/field.entity';
import { FieldValue } from '@/field-values/entities/field-value.entity';

@Module({
  imports: [
    ContentTypeModule,
    FieldModule,
    FieldValuesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'test',
      entities: [ContentType, Field, FieldValue],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
