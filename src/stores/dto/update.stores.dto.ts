import { PartialType } from '@nestjs/swagger';
import { CreateStoresDTO } from './create.stores.dto';

export class UpdateStoresDTO extends PartialType(CreateStoresDTO) {}
