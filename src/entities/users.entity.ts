import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CreatedUpdatedTime } from './common/created.updated.time.entity';
import { Stores } from './stores.entity';

@Entity()
export class Users extends CreatedUpdatedTime {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  @Index({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ type: 'integer', default: 0 })
  point: number;

  @Column()
  phone: string;

  @OneToMany(() => Stores, (store) => store.user)
  stores: Stores;

  static async createUser(user: Users) {
    return this.createQueryBuilder()
      .insert()
      .into(Users)
      .values(user)
      .execute();
  }
}
