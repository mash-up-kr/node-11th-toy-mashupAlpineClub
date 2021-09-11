import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreatedUpdatedTime } from './common/created.updated.time.entity';

@Entity()
export class StoreAnalytics extends CreatedUpdatedTime {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'integer' })
  reviewCount: number;

  @Column({ type: 'float' })
  averageStarRating: number;
}
