import {
  Entity,
  Column,
  BaseEntity,
  ObjectIdColumn,
  ObjectID,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Session extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  token: string;

  @Column()
  user: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
