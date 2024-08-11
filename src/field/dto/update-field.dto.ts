import { PartialType } from '@nestjs/mapped-types';
import { CreateFieldDto } from '@/field/dto/create-field.dto';

export class UpdateFieldDto extends PartialType(CreateFieldDto) {}
