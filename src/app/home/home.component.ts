import { Component, OnInit} from '@angular/core';

import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  tasks: Task[];
  searchTerm: string;
  activeButtons: string[] = ['all', 'active', 'unactive'];
  showActive: string;

  constructor(
    private taskService: TaskService) { }


  getTasks(): void {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  toggleActive(task): void {
	task.active = !task.active;
	this.taskService.update(task);
  }

  remove(id): void {
    if( confirm('Are you sure?') ) {
        this.taskService.delete(id)
        .then(() => {
          this.tasks = this.tasks.filter(t => t.id !== id);
        });
	}
  }

  ngOnInit(): void {
    this.getTasks();
    this.showActive = this.activeButtons[0];
  }

}
