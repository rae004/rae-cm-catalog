import { Test, TestingModule } from '@nestjs/testing';
import { ContentTypeService } from '@/content-type/content-type.service';

describe('ContentTypeService', () => {
  let service: ContentTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentTypeService],
    })
      .useMocker(() => {
        return {
          findOne: jest.fn((entity) => entity),
          save: jest.fn((entity) => entity),
        };
      })
      .compile();

    service = module.get<ContentTypeService>(ContentTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
