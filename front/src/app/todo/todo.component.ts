import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './interfaces/Todo';
// import { Status } from './services/type/status';
import { Status } from './interfaces/Todo'
import { MatDialog } from '@angular/material/dialog';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { TodoForm } from './interfaces/Todo-Form';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  constructor(private service: TodoService, public dialog: MatDialog) {
  }

  todos!: TodoForm[];
  error!: any;

  displayedColumns: string[] = ['name', 'description', 'status', 'edit'];

  ngOnInit(): void {
    this.service.getAllTodos().subscribe(({ data, error }: any) => {
      this.todos = data.getAll;
      this.error = error;
    });
  }
 
  getAllTodos() {
    this.service.getAllTodos().subscribe(({ data, error }: any) => {
      this.todos = data.getAll;
      this.error = error;
    });
  }

  edit(todo: TodoForm){
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      width: '250px',
      data: todo
    });
    
    dialogRef.afterClosed().subscribe(() => {
      this.getAllTodos();
      // location.reload();
    })
  }

  create(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '250px',
      data: {}
    });
    
    dialogRef.afterClosed().subscribe(() => {
      this.getAllTodos();
      // location.reload();
    })
   }
}
