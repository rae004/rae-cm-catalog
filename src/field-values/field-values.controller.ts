import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FieldValuesService } from '@/field-values/field-values.service';
import { CreateFieldValueDto } from '@/field-values/dto/create-field-value.dto';
import { UpdateFieldValueDto } from '@/field-values/dto/update-field-value.dto';

@Controller('field-values')
export class FieldValuesController {
  constructor(private readonly fieldValuesService: FieldValuesService) {}

  @Post()
  create(@Body() createFieldValueDto: CreateFieldValueDto) {
    return this.fieldValuesService.create(createFieldValueDto);
  }

  @Get()
  findAll() {
    return this.fieldValuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fieldValuesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFieldValueDto: UpdateFieldValueDto,
  ) {
    return this.fieldValuesService.update(+id, updateFieldValueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fieldValuesService.remove(+id);
  }
}
