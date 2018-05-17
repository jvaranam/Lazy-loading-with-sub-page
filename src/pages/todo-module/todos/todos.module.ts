import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodosPage } from './todos';
import { AddTodoPage } from './../add-todo/add-todo';

@NgModule({
  declarations: [
    TodosPage,
    AddTodoPage
  ],
  imports: [

    IonicPageModule.forChild(TodosPage),
  ],
  entryComponents:[AddTodoPage]
})
export class TodosPageModule {}
