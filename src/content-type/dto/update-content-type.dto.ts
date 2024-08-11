import { PartialType } from '@nestjs/mapped-types';
import { CreateContentTypeDto } from '@/content-type/dto/create-content-type.dto';

export class UpdateContentTypeDto extends PartialType(CreateContentTypeDto) {}
