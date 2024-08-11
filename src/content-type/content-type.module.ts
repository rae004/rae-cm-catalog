import { Module } from '@nestjs/common';
import { ContentTypeService } from '@/content-type/content-type.service';
import { ContentTypeController } from '@/content-type/content-type.controller';

@Module({
  controllers: [ContentTypeController],
  providers: [ContentTypeService],
})
export class ContentTypeModule {}
