import { IsNumber, IsString } from 'class-validator';

export class CreateStoresDTO {
  @IsString()
  name: string;

  @IsString()
  position: string;

  @IsString()
  telephone: string;

  @IsString()
  thumbnailUrl: string;

  @IsString()
  businessHour: string;

  @IsNumber()
  minDeliveryPrice: number;
}
