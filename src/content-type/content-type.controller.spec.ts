import { Test, TestingModule } from '@nestjs/testing';
import { ContentTypeController } from '@/content-type/content-type.controller';
import { ContentTypeService } from '@/content-type/content-type.service';

describe('ContentTypeController', () => {
  let controller: ContentTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentTypeController],
      providers: [ContentTypeService],
    })
      .useMocker(() => {
        return {
          findOne: jest.fn((entity) => entity),
          save: jest.fn((entity) => entity),
        };
      })
      .compile();

    controller = module.get<ContentTypeController>(ContentTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
