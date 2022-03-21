import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Post extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  type: "post" | "comment";

  // user_id
  @Column()
  parent: string;

  // user_id
  @Column()
  user: string;

  // content_id
  @Column()
  contents: string[];

  @Column()
  published: boolean;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
