import { Injectable } from '@nestjs/common';
import { CreateContentTypeDto } from '@/content-type/dto/create-content-type.dto';
import { UpdateContentTypeDto } from '@/content-type/dto/update-content-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentType } from '@/content-type/entities/content-type.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ContentTypeService {
  constructor(
    @InjectRepository(ContentType)
    private contentTypeRepository: Repository<ContentType>,
  ) {}

  create(createContentTypeDto: CreateContentTypeDto) {
    return `This action adds a new contentType dto ${createContentTypeDto}`;
  }

  findAll(): Promise<ContentType[]> {
    return this.contentTypeRepository.find();
  }

  findOne(id: number): Promise<ContentType | null> {
    return this.contentTypeRepository.findOne({ where: { id } });
  }

  update(id: number, updateContentTypeDto: UpdateContentTypeDto) {
    return `This action updates a #${id} contentType dto: ${updateContentTypeDto}`;
  }

  remove(id: number): Promise<DeleteResult> {
    return this.contentTypeRepository.delete({ id });
  }
}
