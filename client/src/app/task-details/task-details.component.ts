import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})

/**
 * This is the class for displaying task details
 * Also for editing them in update mode
 */

export class TaskDetailsComponent implements OnInit {
    @Input() task: Task;
    @Input() update: boolean;
    complete: boolean;
    desc: string;

  constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) { }

    /**
     * Loads in the task.
     * Copies desc and complete into temporary values so the user can cancel out if need be
     */
  ngOnInit() {
      this.getTask();
      this.desc = this.task.description;
      this.complete = this.task.isComplete;
  }

  /**
   * Gets task value ...
   * parseInt turns the string into something that can be compared to a number
   * the funny if statement ensures the function only does anything if called when viewing a single task
   * At the list view it's not needed
   */
  getTask(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
        //this.task = this.taskService.getTask(id);
        this.update = true;
    
  }

  /**
   * Feeds update command to the service
   * Then returns to main screen
   */
  updateTask(): void {
    this.taskService.updateTask(this.desc, this.task, this.complete);
    this.router.navigate(['']);
  }
  /**
   * Pretties up the complete-or-not output.
   * Probably a better way to do this via pure HTML but I didn't find it
   */
  parseComplete(): string {
      if (this.complete) {
        return 'Completed on ' + this.task.dateCompleted;
      } else {
        return 'Not Completed';
      }
  }


}
