import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FieldService } from '@/field/field.service';
import { CreateFieldDto } from '@/field/dto/create-field.dto';
import { UpdateFieldDto } from '@/field/dto/update-field.dto';

@Controller('field')
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}

  @Post()
  create(@Body() createFieldDto: CreateFieldDto) {
    return this.fieldService.create(createFieldDto);
  }

  @Get()
  findAll() {
    return this.fieldService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fieldService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFieldDto: UpdateFieldDto) {
    return this.fieldService.update(+id, updateFieldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fieldService.remove(+id);
  }
}
