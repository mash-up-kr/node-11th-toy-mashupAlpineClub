import {IsNumber, IsString} from 'class-validator'

export class CreateUserDTO {
  @IsString()
  email: string

  @IsString()
  password: string

  @IsString()
  name: string

  @IsString()
  point?: string

  @IsString()
  phone?: string
}

export class CreateUserDTO2 {
  @IsString()
  email: string

  @IsString()
  password: string

  @IsString()
  name: string

  @IsString({ each: true})
  point: string

  @IsString({ each: true})
  phone: string
}
