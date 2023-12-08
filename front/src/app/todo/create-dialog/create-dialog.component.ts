import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TodoService } from '../services/todo.service';
import { Status, getStatus } from '../interfaces/Todo';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrl: './create-dialog.component.css',
  animations: [
    trigger('transitionMessages', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.5s', style({ opacity: 0 })),
      ]),
    ]),
  ]
})
export class CreateDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private service: TodoService) {}

    todoForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      status: ['']
    });

    Status = Status;

  closeDialog(): void{
    this.dialogRef.close()
  }

  submitForm(): void {
    if (this.todoForm.valid) {
      console.log(this.todoForm.value) 
      
      if (this.todoForm.value.name)
      {
        let status =  getStatus(this.todoForm.value.status);
        let description =  this.todoForm.value.description == null || '' ? undefined : this.todoForm.value.description; 

        console.log({
          name: this.todoForm.value.name,
          status: status,
          description: description
        })

        this.createTodo(this.todoForm.value.name, status, description)
      }

      this.closeDialog()
    }
   }

  createTodo(name: string, status?: Status | null, description?: string) {
    this.service.createTodo(name, status, description).subscribe(({data, error}: any) => {
      if (!error){
        console.log('Done')
      }
    })
  }
}
