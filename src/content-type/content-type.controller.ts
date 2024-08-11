import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContentTypeService } from '@/content-type/content-type.service';
import { CreateContentTypeDto } from '@/content-type/dto/create-content-type.dto';
import { UpdateContentTypeDto } from '@/content-type/dto/update-content-type.dto';

@Controller('content-type')
export class ContentTypeController {
  constructor(private readonly contentTypeService: ContentTypeService) {}

  @Post()
  create(@Body() createContentTypeDto: CreateContentTypeDto) {
    return this.contentTypeService.create(createContentTypeDto);
  }

  @Get()
  findAll() {
    return this.contentTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentTypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContentTypeDto: UpdateContentTypeDto,
  ) {
    return this.contentTypeService.update(+id, updateContentTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentTypeService.remove(+id);
  }
}
