import { Test, TestingModule } from '@nestjs/testing';
import { FieldController } from '@/field/field.controller';
import { FieldService } from '@/field/field.service';

describe('FieldController', () => {
  let controller: FieldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldController],
      providers: [FieldService],
    }).compile();

    controller = module.get<FieldController>(FieldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
