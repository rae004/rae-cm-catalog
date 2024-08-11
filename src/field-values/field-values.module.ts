import { Module } from '@nestjs/common';
import { FieldValuesService } from '@/field-values/field-values.service';
import { FieldValuesController } from '@/field-values/field-values.controller';

@Module({
  controllers: [FieldValuesController],
  providers: [FieldValuesService],
})
export class FieldValuesModule {}
