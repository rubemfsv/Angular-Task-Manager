import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../shared';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.listAllTasks();
  }

  listAllTasks(): Task[] {
    return this.taskService.listAllTasks();
  }

  remove($event: any, task: Task): void {
    $event.preventDefault();

    if (confirm('Do you want to remove')) {
    }
  }
}
