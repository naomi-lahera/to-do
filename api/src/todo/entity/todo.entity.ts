import { Field, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

export enum Status{
    open = 'Open',
    onProgres = 'On Progres',
    done = 'Done'
}

registerEnumType(Status, {
    name: 'Status',
    description: 'The status of a task',
  });

@ObjectType()
@Entity()
export class TodoEntity{
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id?: number;

    @Column()
    @Field(type => String)
    name: string;

    @Column({nullable: true})
    @Field(type => String, {nullable: true})
    description?: string;

    @Column({default: 'Open'})
    @Field(type => Status)
    status: Status;
}
