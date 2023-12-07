import { Field, InputType} from "@nestjs/graphql";
import { Status } from "../entity/todo.entity";
import { IsNotEmpty } from 'class-validator'

@InputType()
export class CreateDto{
    @IsNotEmpty({message: 'You need to identify your task'})
    @Field(type => String)
    name: string;

    @Field(type => String, {nullable: true})
    description?: string;

    @Field(type => Status, {nullable: true})
    status?: Status;
}