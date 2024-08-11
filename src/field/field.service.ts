import { Injectable } from '@nestjs/common';
import { CreateFieldDto } from '@/field/dto/create-field.dto';
import { UpdateFieldDto } from '@/field/dto/update-field.dto';

@Injectable()
export class FieldService {
  create(createFieldDto: CreateFieldDto) {
    return `This action adds a new field dto ${createFieldDto}`;
  }

  findAll() {
    return `This action returns all field`;
  }

  findOne(id: number) {
    return `This action returns a #${id} field`;
  }

  update(id: number, updateFieldDto: UpdateFieldDto) {
    return `This action updates a #${id} field dto: ${updateFieldDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} field`;
  }
}
