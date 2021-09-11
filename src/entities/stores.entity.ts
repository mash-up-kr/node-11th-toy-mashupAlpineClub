import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Categories } from './categories.entity';
import { CreatedUpdatedTime } from './common/created.updated.time.entity';
import { Menus } from './menus.entity';
import { Reviews } from './reviews.entity';
import { StoreAnalytics } from './store.analytics.entity';
import { Users } from './users.entity';

@Entity()
export class Stores extends CreatedUpdatedTime {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  @Index()
  name: string;

  @Column()
  position: string;

  @Column()
  @Index()
  telephone: string;

  @Column()
  thumbnailUrl: string;

  @Column({ default: '' })
  businessHour: string;

  @Column({ type: 'integer', default: 0 })
  minDeliveryPrice: number;

  @OneToOne(() => StoreAnalytics)
  @JoinColumn()
  analytics: StoreAnalytics;

  @ManyToOne(() => Users, (user) => user.stores)
  user: Users;

  @OneToMany(() => Menus, (menu) => menu.store)
  menus: Menus[];

  @OneToMany(() => Reviews, (review) => review.store)
  reviews: Reviews[];

  @ManyToMany(() => Categories)
  @JoinTable()
  categories: Categories[];
}
