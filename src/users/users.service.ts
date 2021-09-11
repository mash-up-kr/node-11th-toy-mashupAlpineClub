import { Injectable } from '@nestjs/common';
import { Users } from '../entities/users.entity';

@Injectable()
export class UsersService {
  async create(createUserDto: any) {
    const data = await Users.createUser(createUserDto);
    return data;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: any) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
