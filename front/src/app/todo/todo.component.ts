import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './interfaces/Todo';
import { Status } from './services/type/status';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  constructor(private service: TodoService) {
    // this.service.getAllTodos().subscribe(({ data, error }: any) => {
    //   this.todos = data.getAllTodos;
    //   this.error = error;
    // });
  }

  todos!: Todo[];
  error!: any;

  displayedColumns: string[] = ['name', 'description', 'status'];

  ngOnInit(): void {
    this.service.getAllTodos().subscribe(({ data, error }: any) => {
      this.todos = data.getAll;

      //El resultado de de getAllTodos es es undefined
      console.log("Test OnInit")
      console.log(this.todos == undefined)
      console.log(this.todos[0].name)

      this.error = error;
    });
  }
 
  getAllTodos() {
    this.service.getAllTodos().subscribe(({ data, error }: any) => {
      this.todos = data.getAll;
      this.error = error;
    });
  }
 
  createTodo(name: string, description?: string, status?: Status) {
    this.service.createTodo(name, status, description).subscribe(({ data, error }: any) => {
      if (!error) {
        this.todos.push(data.createTodo);
        // this.service.getAllTodos().subscribe(({ data, error }: any) => {
        //   this.todos = data.getAll;
        //   this.error = error;
        // });
      }
    });
  }
 
  updateTodo(id: string, name: string, description?: string, status?: Status) {
    this.service.updateTodo(id, name, status, description).subscribe(({ data, error }: any) => {

      if (!error) {
        // const index = this.todos.findIndex(todo => todo.id === id);
        // this.todos[index] = data.updateTodo;

        this.service.getAllTodos().subscribe(({ data, error }: any) => {
          this.todos = data.getAll;
          this.error = error;
        });
      }
    });
  }
}
