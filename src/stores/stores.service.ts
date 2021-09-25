import { Injectable } from '@nestjs/common';
import { Stores } from 'src/entities/stores.entity';
import { CreateStoresDTO } from './dto/create.stores.dto';
import { UpdateStoresDTO } from './dto/update.stores.dto';

@Injectable()
export class StoresService {
  async create(createStoresDTO: CreateStoresDTO): Promise<Stores> {
    const createStore = new Stores();
    createStore.name = createStoresDTO.name;
    createStore.position = createStoresDTO.position;
    createStore.telephone = createStoresDTO.telephone;
    createStore.thumbnailUrl = createStoresDTO.thumbnailUrl;
    createStore.businessHour = createStoresDTO.businessHour;
    createStore.minDeliveryPrice = createStoresDTO.minDeliveryPrice;
    return await createStore.save();
  }

  async findAll(): Promise<Stores[]> {
    const stores = await Stores.find({
      relations: ['analytics', 'user', 'menus', 'reviews', 'categories'],
    });
    return stores;
  }

  async findOne(id: number): Promise<Stores> {
    const store = await Stores.findOne(id);
    return store;
  }

  async findAndUpdate(
    id: number,
    {
      name,
      position,
      telephone,
      thumbnailUrl,
      businessHour,
      minDeliveryPrice,
    }: UpdateStoresDTO,
  ): Promise<Stores> {
    const store = await Stores.findOne(id);
    store.name = name;
    store.position = position;
    store.telephone = telephone;
    store.thumbnailUrl = thumbnailUrl;
    store.businessHour = businessHour;
    store.minDeliveryPrice = minDeliveryPrice;
    return await store.save();
  }

  async removeById(id: number): Promise<Stores> {
    const store = await this.findOne(id);
    if (!store) {
      throw Error('해당하는 가게가 없습니다.');
    }

    return await store.remove();
  }
}
