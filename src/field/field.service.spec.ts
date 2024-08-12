import { Test, TestingModule } from '@nestjs/testing';
import { FieldService } from '@/field/field.service';

describe('FieldService', () => {
  let service: FieldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldService],
    })
      .useMocker(() => {
        return {
          findOne: jest.fn((entity) => entity),
          save: jest.fn((entity) => entity),
        };
      })
      .compile();

    service = module.get<FieldService>(FieldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
