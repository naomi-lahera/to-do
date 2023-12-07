import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  data = [
    { name: 'Tarea 1', description: 'Descripción de la tarea 1', status: 'Completada' },
    { name: 'Tarea 2', description: 'Descripción de la tarea 2', status: 'En progreso' },
  ];

columns = [
  { field: 'name', header: 'Nombre' },
  { field: 'description', header: 'Descripción' },
  { field: 'status', header: 'Estado' }
];
}
