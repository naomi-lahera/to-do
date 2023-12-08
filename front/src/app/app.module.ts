import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateDialogComponent } from './todo/create-dialog/create-dialog.component';

const uri = 'http://localhost:3000/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {
  return {
    cache: new InMemoryCache(),
    link: httpLink.create({ uri }),
  };
}

@NgModule({
 declarations: [
  AppComponent,
  TodoComponent,
  CreateDialogComponent
 ],
 imports: [
  BrowserModule,
  BrowserAnimationsModule,
  MaterialModule,
  ApolloModule,
  HttpClientModule
 ],
 providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: createApollo,
    deps: [HttpLink]}
 ],
 bootstrap: [AppComponent]
})
export class AppModule { }
