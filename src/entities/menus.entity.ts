import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CreatedUpdatedTime } from './common/created.updated.time.entity';
import { Stores } from './stores.entity';

@Entity()
export class Menus extends CreatedUpdatedTime {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  @Index()
  name: string;

  @Column({ type: 'integer' })
  price: number;

  @Column({ type: 'text' })
  description: string;

  @Column()
  thumbnailUrl: string;

  @ManyToOne(() => Stores, (store) => store.menus)
  store: Stores;
}
