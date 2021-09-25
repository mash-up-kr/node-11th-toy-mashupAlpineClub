import { PickType } from '@nestjs/swagger';
import { CreateUsersDTO } from './create.users.dto';

export class UpdateUsersDTO extends PickType(CreateUsersDTO, [
  'email',
  'name',
  'phone',
] as const) {}
