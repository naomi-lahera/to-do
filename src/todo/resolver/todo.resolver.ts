import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoService } from '../service/todo.service';
import { TodoEntity } from '../entity/todo.entity';
import { CreateDto } from '../dto/create-todo.dto';
import { UpdateDto } from '../dto/update.dto';
import { StatusPipe } from '../pipe/status.pipe';

@Resolver()
export class TodoResolver {
    constructor(private service: TodoService) {}

    @Query(() => [TodoEntity])
    async getAll(){
        return await this.service.getAll();
    }

    @Mutation(() => TodoEntity)
    async create(@Args('data') data: CreateDto){
        return await this.service.create(data);
    }

    @Mutation(() => TodoEntity)
    async update(@Args('data') data: UpdateDto){
        const pipe = new StatusPipe();
        await pipe.transform(data.status);
        return await this.service.update(data);
    }
}
