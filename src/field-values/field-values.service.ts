import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFieldValueDto } from '@/field-values/dto/create-field-value.dto';
import { UpdateFieldValueDto } from '@/field-values/dto/update-field-value.dto';
import { FieldValue } from '@/field-values/entities/field-value.entity';

@Injectable()
export class FieldValuesService {
  constructor(
    @InjectRepository(FieldValue)
    private readonly fieldValueRepository: Repository<FieldValue>,
  ) {}

  create(createFieldValueDto: CreateFieldValueDto) {
    return `This action adds a new fieldValue with the following data: ${createFieldValueDto}`;
  }

  findAll() {
    return this.fieldValueRepository.find();
  }

  findOne(id: number) {
    return this.fieldValueRepository.findOne({ where: { id } });
  }

  update(id: number, updateFieldValueDto: UpdateFieldValueDto) {
    return `This action updates a #${id} fieldValue with the following data: ${updateFieldValueDto}`;
  }

  remove(id: number) {
    return this.fieldValueRepository.delete(id);
  }
}
