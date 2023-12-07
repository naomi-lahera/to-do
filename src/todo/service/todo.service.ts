import { BadRequestException, Injectable } from '@nestjs/common';
import { Status, TodoEntity } from '../entity/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDto } from '../dto/create-todo.dto';
import { UpdateDto } from '../dto/update.dto';
import { Mutation } from '@nestjs/graphql';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(TodoEntity) private repository: Repository<TodoEntity>) {}
    
    async getAll(): Promise<TodoEntity[]>{
        return await this.repository.find()
    }

    @Mutation()
    async create(newTodoDto: CreateDto): Promise<TodoEntity>{
        let todo = new TodoEntity()

        todo.name = newTodoDto.name;
        todo.description = newTodoDto.desription;
        if(!newTodoDto.status)
            newTodoDto.status = Status.open;

        this.repository.create(todo);
        return await this.repository.save(todo)
    }

    async update(newTodo: UpdateDto): Promise<TodoEntity>{
        let todo = await this.repository.findOne({where: {id: newTodo.id}})

        if(!todo)
            throw new BadRequestException(`${newTodo} is a no valid todo`);

        await this.repository.update(newTodo.id, todo)
        return await this.repository.save(todo);
    }
}
