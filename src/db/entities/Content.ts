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
export class Content extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  type: "text" | "picture" | "video";

  @Column()
  value: {
    size?: number;
    text?: string;

    // "picture" | "video"
    file?: string;
  };

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
