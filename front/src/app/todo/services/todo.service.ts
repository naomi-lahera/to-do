import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from 'apollo-angular';
import { Status } from './type/status';

@Injectable({
 providedIn: 'root'
})
export class TodoService {
 constructor(private apollo: Apollo) { }

 createTodo(name: string, status?: Status, description?: string) {
 return this.apollo.mutate({
  mutation: gql`
    mutation CreateTodo($name: String!, $description: String, $status: Status!) {
      create(input: {name: $name, description: $description, status: $status}) {
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
      update(input: {id: $id, name: $name, description: $description, status: $status}) {
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
