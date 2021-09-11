import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CreatedUpdatedTime } from './common/created.updated.time.entity';
import { Stores } from './stores.entity';

@Entity()
export class Reviews extends CreatedUpdatedTime {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'text', default: '' })
  content: string;

  @Column({ type: 'smallint' })
  starRating: number;

  @ManyToOne(() => Stores, (store) => store.reviews)
  store: Stores;
}
