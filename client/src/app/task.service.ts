import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';



const targetApp = 'https://webdevapp7.herokuapp.com/api/tasks';

@Injectable({
  providedIn: 'root'
})


/** For Task Logic
 * Create
 * Delete
 * Update
 * Get-by-ID
 * Get all
 */
export class TaskService implements OnInit {

  constructor(private http : HttpClient) {
    this.tasks = this.getAllTasks();

 }


  public tasks: Observable<Task[]>;
  key = 'storage';

  /**
   * Yes, I know this looks profoundly strange
   * What the foreach does is turn the string-ified version that's in the JSON back into a date object
   * the if statement prevents null date-complete entries being treated as time zero
   */

  /**
   * This makes the task and puts it into the JSON
   * @param desc - user input desc goes here
   */
  CreateTask(desc: string): void {/*
      request.post(targetApp + '/', {
      json : {
        description : desc
      }

    }, (error, res, body) => {
      if (error) {
        console.error(error);
        return;
      };

    });
    this.updateTasks();*/
  }


    /**
     * Kills tasks
     */
    DeleteTask(id: string): void {/*
      request.delete(targetApp + '/' + id, (error, res, body) => {
        if (error) {
          console.error(error)
          return
        }
        
      });
      this.updateTasks();*/
    }

    /**
     * Updates description
     * @param newDesc the new description
     * @param id the task to work on
     * @param complete determines if it's setting complete or not
     */
    updateTask(newDesc: string, taskToChange: Task, complete: boolean): void {/*
      request.patch(targetApp + '/' + taskToChange.id, {
        json : {
          description : newDesc,
          isComplete : complete
        }
      }, (error, res, body) => {
        if (error) {
          console.error(error)
          return
        }
        
      });
      this.updateTasks();*/
    }

    /**
     * Get one task by ID
     * @param id  ID number
     */
    /*
    getTask(id: string): Task {
        let outTask: Task;
        
        outTask = this.tasks.find(task => task.id === id);

        return outTask;
    }*/



    /**
     * Gets all the task
     */
    getAllTasks(): Observable<Task[]> {
      return this.http.get<Task[]>(targetApp);
    }

    ngOnInit() {
      console.log("before getall");
      this.tasks = this.getAllTasks();
      console.log(this.tasks.subscribe.length);
    }
}