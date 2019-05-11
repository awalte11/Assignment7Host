import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { AppComponent } from './app.component';


/**
 * Routing here
 */
const routes: Routes = [
    { path: '', redirectTo : '/tasks', pathMatch: 'full'},
    { path: 'tasks', component: TaskListComponent},
    { path: 'tasks/create', component: CreateTaskComponent},
    { path: 'tasks/:id', component: TaskDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
