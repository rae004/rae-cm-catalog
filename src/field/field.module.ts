import { Module } from '@nestjs/common';
import { FieldService } from '@/field/field.service';
import { FieldController } from '@/field/field.controller';

@Module({
  controllers: [FieldController],
  providers: [FieldService],
})
export class FieldModule {}
