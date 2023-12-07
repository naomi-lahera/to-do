import { Field, Int, ObjectType, InputType } from "@nestjs/graphql";
import { Status } from "../entity/todo.entity";
import { IsNotEmpty } from "class-validator";

@InputType()
export class UpdateDto{
    @Field(type => Int)
    @IsNotEmpty()
    id: number;

    @Field({nullable: true})
    name?: string;

    @Field({nullable: true})
    description?: string;

    @Field({nullable: true, defaultValue: Status.open})
    status?: Status;
}