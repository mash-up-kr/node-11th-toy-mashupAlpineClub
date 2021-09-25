import { IsNumber, IsString } from 'class-validator';

export class CreateUsersDTO {
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsNumber()
  point?: number;

  @IsString()
  phone?: string;
}
