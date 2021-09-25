import { Injectable } from '@nestjs/common';
import { Users } from '../entities/users.entity';
import { CreateUsersDTO } from './dto/create.users.dto';
import { UpdateUsersDTO } from './dto/update.users.dto';

@Injectable()
export class UsersService {
  async create(createUsersDto: CreateUsersDTO): Promise<Users> {
    const createUser = new Users();
    createUser.email = createUsersDto.email;
    createUser.name = createUsersDto.name;
    createUser.password = createUsersDto.password;
    createUser.phone = createUsersDto.phone;
    createUser.point = createUsersDto.point ?? 0;
    return await createUser.save();
  }

  async findAll(): Promise<Users[]> {
    const users = await Users.find({ relations: ['stores'] });
    return users;
  }

  async findOne(id: number): Promise<Users> {
    const user = await Users.findOne(id);
    return user;
  }

  async findAndUpdate(
    id: number,
    { email, name, phone }: UpdateUsersDTO,
  ): Promise<Users> {
    const user = await Users.findOne(id);
    user.email = email;
    user.name = name;
    user.phone = phone;
    return await user.save();
  }

  async removeById(id: number): Promise<Users> {
    const user = await this.findOne(id);
    if (!user) {
      throw Error('해당하는 유저가 없습니다.');
    }

    return await user.remove();
  }
}
