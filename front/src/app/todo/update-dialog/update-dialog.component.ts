import { Component, Inject } from '@angular/core';
import { Status, getStatus } from '../interfaces/Todo';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrl: './update-dialog.component.css'
})
export class UpdateDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private service: TodoService) {}

    updateForm = this.fb.group({
      name: [''],
      description: [''],
      status: ['']
    });

  Status = Status;
  submitForm(){
    if(this.updateForm.value.name || this.updateForm.value.description || this.updateForm.value.status){
      let status =  getStatus(this.updateForm.value.status);

      console.log()

      this.update(this.data.id, this.updateForm.value.name, this.updateForm.value.description, status);
    }
    else{
      this.closeDialog();
    }
  }

  closeDialog(){
    this.dialogRef.close()
  }

  update(id: number, name?: string | null, description?: string | null, status?: Status | null) {
    this.service.updateTodo(id=id, name=name, description=description, status=status).subscribe(({ data, error }: any) => {

      if (!error) {
        location.reload();
        console.log('Update done');
      }
    });
  }
}
