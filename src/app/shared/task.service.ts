import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Task } from './task';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class TaskService {

	private tasksUrl = 'app/tasks';
	private headers = new Headers({'Content-Type': 'application/json'});

	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}

	constructor(private http: Http) { }
	
	getTasks(): Promise<Task[]> {
		return this.http.get(this.tasksUrl).toPromise()
		.then(response => response.json().data as Task[])
		.catch(this.handleError);
  	}

	getTask(id: number): Promise<Task> {
	  return this.getTasks().then(tasks => tasks.find(task => task.id === id));
	}	
	update(task: Task): Promise<Task> {
	  const url = `${this.tasksUrl}/${task.id}`;
	  return this.http
	    .put(url, JSON.stringify(task), {headers: this.headers})
	    .toPromise()
	    .then(() => task)
	    .catch(this.handleError);
	}
	create(task: Task): Promise<Task> {
	  return this.http
	    .post(this.tasksUrl, JSON.stringify(task), {headers: this.headers})
	    .toPromise()
	    .then(()=>null)
	    .catch(this.handleError);
	}	
	delete(id: number): Promise<void> {
	  const url = `${this.tasksUrl}/${id}`;
	  return this.http.delete(url, {headers: this.headers})
	    .toPromise()
	    .then(()=>null)
	    .catch(this.handleError);
	}	

}

