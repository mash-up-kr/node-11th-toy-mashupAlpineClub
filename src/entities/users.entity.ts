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

  @Column()
  status: string;

  @Column()
  token: string;

  @Column({nullable: true})
  confirmed_at: Date;

  static async createUser(user: any) {
    return this.createQueryBuilder()
      .insert()
      .into(Users)
      .values(user)
      .execute();
  }

  static async findByEmail(email: string) {
    return this.findOne(email)
  }
}
