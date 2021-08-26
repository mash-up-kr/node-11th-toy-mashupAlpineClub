import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number

  @Column({unique: true})
  email: string

  @Column()
  password: string

  @Column()
  name: string

  @Column({nullable: true})
  point: string

  @Column({nullable: true})
  phone: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  static async createUser(user: Users) {
    return this.createQueryBuilder()
      .insert()
      .into(Users)
      .values(user)
      .execute()
  }

}