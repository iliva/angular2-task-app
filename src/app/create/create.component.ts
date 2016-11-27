import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';

@Component({
	templateUrl: './create.component.html',
})

export class CreateComponent {

	task: Task = {name: '', description: '', active: true}
	
	constructor(
		private location: Location,
		private taskService: TaskService) { }
	
	onSubmit(): void { 
		this.taskService.create(this.task)
		this.location.back();
	}
}
