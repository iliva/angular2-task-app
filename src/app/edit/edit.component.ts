import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
	
	task: Task = {name: '', description: '', active: true}
	
	constructor(
		private location: Location,
		private route: ActivatedRoute,
		private taskService: TaskService) { }
	
	onSubmit(): void { 
		this.taskService.update(this.task)
		this.location.back();
	}
	ngOnInit(): void {
		this.route.params
		  .switchMap((params: Params) => this.taskService.getTask(+params['id']))
		  .subscribe(task => this.task = task);
	}
}
