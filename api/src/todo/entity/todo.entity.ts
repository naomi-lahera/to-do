import { Field, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

export enum Status{
    open = 'open',
    onProgress = 'onProgress',
    done = 'done'
}

export function getStatus(status?: string | null){
    switch (status){
        case 'done':
            return Status.done;
        case 'onProgress':
            return Status.onProgress;
        case 'open':
            return Status.open;
        default:
            return null;
    }
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

    @Column({default: Status.open})
    @Field(type => Status)
    status: Status;
}
