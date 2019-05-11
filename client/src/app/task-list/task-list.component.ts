import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
/**
 * The one for task lists. Doens't really do anything on its own
 */
export class TaskListComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  tasks: Task[];

  /**
   * Gets tasks from the service
   */
  getTasks(): void {
    console.log("At tlc getTasks");

    this.tasks = []
    this.taskService.getAllTasks().subscribe(tasks => this.tasks = tasks);
  }

  /**
   * Just loading the tasks
   */
  ngOnInit() {
    this.getTasks();
  }

}
