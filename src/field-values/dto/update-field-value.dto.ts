import { PartialType } from '@nestjs/mapped-types';
import { CreateFieldValueDto } from '@/field-values/dto/create-field-value.dto';

export class UpdateFieldValueDto extends PartialType(CreateFieldValueDto) {}
