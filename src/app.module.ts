import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoResolver } from './todo/resolver/todo.resolver';
import { TodoService } from './todo/service/todo.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo/entity/todo.entity';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TodoModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
