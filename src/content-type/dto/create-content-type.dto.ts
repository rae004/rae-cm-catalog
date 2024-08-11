import { IsNotEmpty, IsString } from 'class-validator';

export class CreateContentTypeDto {
  @IsNotEmpty()
  @IsString()
  displayName: string;
  @IsNotEmpty()
  @IsString()
  parameterName: string;
  @IsNotEmpty()
  @IsString()
  slug: string;
}
