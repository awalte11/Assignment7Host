import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    TaskListComponent,
    TaskListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
