import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class UpdateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(5)
  price: number;
}