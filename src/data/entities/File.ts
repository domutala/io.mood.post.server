import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class File extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ nullable: true })
  name: string;

  @Column()
  type: string;

  @Column()
  value: string;

  @Column()
  path: string;
}
