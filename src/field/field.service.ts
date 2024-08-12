import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFieldDto } from '@/field/dto/create-field.dto';
import { UpdateFieldDto } from '@/field/dto/update-field.dto';
import { Field } from '@/field/entities/field.entity';

@Injectable()
export class FieldService {
  constructor(
    @InjectRepository(Field)
    private fieldRepository: Repository<Field>,
  ) {}

  create(createFieldDto: CreateFieldDto) {
    return `This action adds a new field with dto: ${createFieldDto}`;
  }

  findAll() {
    return this.fieldRepository.find();
  }

  findOne(id: number) {
    return this.fieldRepository.findOne({ where: { id } });
  }

  update(id: number, updateFieldDto: UpdateFieldDto) {
    return `This action updates a #${id} field with dto: ${updateFieldDto}`;
  }

  remove(id: number) {
    return this.fieldRepository.delete({ id });
  }
}
