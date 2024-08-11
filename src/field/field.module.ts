import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldService } from '@/field/field.service';
import { FieldController } from '@/field/field.controller';
import { Field } from '@/field/entities/field.entity';
import { ContentTypeModule } from '@/content-type/content-type.module';

@Module({
  imports: [TypeOrmModule.forFeature([Field]), ContentTypeModule],
  controllers: [FieldController],
  providers: [FieldService],
})
export class FieldModule {}
