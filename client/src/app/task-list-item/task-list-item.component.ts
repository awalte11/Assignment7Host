import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})

/**
 * The one for the task component in the list.
 * Does deletion and switch to single-view
 */

export class TaskListItemComponent implements OnInit {

    @Input() task: Task;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  /**
   * The delete button. All work in service
   */
  deleteThis(): void {
   this.taskService.DeleteTask(this.task.id);
  }
}
