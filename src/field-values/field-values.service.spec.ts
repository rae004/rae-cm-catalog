import { Test, TestingModule } from '@nestjs/testing';
import { FieldValuesService } from '@/field-values/field-values.service';

describe('FieldValuesService', () => {
  let service: FieldValuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldValuesService],
    })
      .useMocker(() => {
        return {
          findOne: jest.fn((entity) => entity),
          save: jest.fn((entity) => entity),
        };
      })
      .compile();

    service = module.get<FieldValuesService>(FieldValuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
