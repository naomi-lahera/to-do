import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

export enum Status{
    open = 'Open',
    onProgres = 'On Progres',
    done = 'Done'
}

@ObjectType()
@Entity()
export class TodoEntity{
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id?: number;

    @Column()
    @Field(type => String)
    name: string;

    @Column()
    @Field(type => String, {nullable: true})
    description: string;

    @Column({default: Status.open})
    @Field(type => Status)
    status: Status;
}
