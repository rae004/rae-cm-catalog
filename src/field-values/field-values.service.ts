import { Injectable } from '@nestjs/common';
import { CreateFieldValueDto } from '@/field-values/dto/create-field-value.dto';
import { UpdateFieldValueDto } from '@/field-values/dto/update-field-value.dto';

@Injectable()
export class FieldValuesService {
  create(createFieldValueDto: CreateFieldValueDto) {
    return `This action adds a new fieldValue dto: ${createFieldValueDto}`;
  }

  findAll() {
    return `This action returns all fieldValues`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fieldValue`;
  }

  update(id: number, updateFieldValueDto: UpdateFieldValueDto) {
    return `This action updates a #${id} fieldValue dto: ${updateFieldValueDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} fieldValue`;
  }
}
