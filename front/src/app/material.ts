import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [
        MatToolbarModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatListModule
    ],
    exports: [
        MatToolbarModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatListModule
    ]
})
export class MaterialModule{
}