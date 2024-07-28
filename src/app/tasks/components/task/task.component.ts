import { Component, Input } from '@angular/core';
import { Task } from '../../../types/task';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task: Task | undefined;

  constructor(private readonly tasksService: TasksService) {}

  onCompleteTask(): void {
    if (this.task) {
      this.tasksService.removeTask(this.task.id);
    }
  }
}
