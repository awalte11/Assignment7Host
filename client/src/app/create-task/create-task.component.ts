import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
/**
 * Task creation handled here.
 */
export class CreateTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
  }
  /**
   * Creates the task, pulling data from the form.
   * Well, no, really it just feeds the data to the service
   */
  createTask(): void {
    const desc  = ( document.getElementById('desc') as HTMLInputElement).value;
    if (desc) {
        //this.taskService.CreateTask((desc));
        this.router.navigate(['']); 
    }

  }


 
}
