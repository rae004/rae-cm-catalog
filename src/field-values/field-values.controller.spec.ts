import { Test, TestingModule } from '@nestjs/testing';
import { FieldValuesController } from '@/field-values/field-values.controller';
import { FieldValuesService } from '@/field-values/field-values.service';

describe('FieldValuesController', () => {
  let controller: FieldValuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldValuesController],
      providers: [FieldValuesService],
    }).compile();

    controller = module.get<FieldValuesController>(FieldValuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
