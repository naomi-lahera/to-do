import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './interfaces/Todo';
// import { Status } from './services/type/status';
import { Status } from './interfaces/Todo'
import { MatDialog } from '@angular/material/dialog';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  constructor(private service: TodoService, public dialog: MatDialog) {
  }

  todos!: Todo[];
  error!: any;

  displayedColumns: string[] = ['name', 'description', 'status'];

  ngOnInit(): void {
    this.service.getAllTodos().subscribe(({ data, error }: any) => {
      this.todos = data.getAll;

      // //El resultado de de getAllTodos es es undefined
      // console.log("Test OnInit")
      // console.log(this.todos == undefined)
      // console.log(this.todos[0].name)

      this.error = error;
    });
  }
 
  getAllTodos() {
    this.service.getAllTodos().subscribe(({ data, error }: any) => {
      this.todos = data.getAll;
      this.error = error;
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

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '250px',
      data: { /* datos a pasar al diálogo */ }
    });
    
    dialogRef.afterClosed().subscribe((data) => {
      this.getAllTodos();
    })
   }
}
