import { Field, ID, InterfaceType } from "type-graphql";
import { CreateDateColumn, ObjectID, ObjectIdColumn, UpdateDateColumn, } from "typeorm";

@InterfaceType()
export abstract class BaseSchema {
  @Field(() => ID, { nullable: true })
  @ObjectIdColumn()
  _id!: ObjectID;

  @Field(() => Date, { nullable: true })
  @CreateDateColumn()
  createAt!: Date;

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn()
  updatedAt!: Date;
}
