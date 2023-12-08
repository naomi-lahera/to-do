import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from 'apollo-angular';
// import { Status } from './type/status';
import { Status } from './../interfaces/Todo';

@Injectable({
 providedIn: 'root'
})
export class TodoService {
 constructor(private apollo: Apollo) { }

 createTodo(name: string, status?: Status | null, description?: string) {
 return this.apollo.mutate({
  mutation: gql`
    mutation CreateTodo($name: String!, $description: String, $status: Status) {
      create(data: {name: $name, description: $description, status: $status}) {
        id
        name
        description
        status
      }
    }
  `,
  variables: {
    name,
    description,
    status
  }
 });
 }

 getAllTodos() {
 return this.apollo.watchQuery({
  query: gql`
    query GetAllTodos {
      getAll {
        id
        name
        description
        status
      }
    }
  `
 }).valueChanges;
 }

 updateTodo(id: string, name?: string, status?: Status, description?: string) {
 return this.apollo.mutate({
  mutation: gql`
    mutation UpdateTodo($id: ID!, $name: String!, $description: String, $status: Status!) {
      update(data: {id: $id, name: $name, description: $description, status: $status}) {
        id
        name
        description
        status
      }
    }
  `,
  variables: {
    id,
    name,
    description,
    status
  }
 });
 }
}
