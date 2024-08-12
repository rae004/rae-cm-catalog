import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldValuesService } from '@/field-values/field-values.service';
import { FieldValuesController } from '@/field-values/field-values.controller';
import { FieldValue } from '@/field-values/entities/field-value.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FieldValue])],
  controllers: [FieldValuesController],
  providers: [FieldValuesService],
})
export class FieldValuesModule {}
