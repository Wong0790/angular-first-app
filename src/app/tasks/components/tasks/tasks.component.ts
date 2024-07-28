import { Component, Input } from '@angular/core';
import { User } from '../../../types/user';
import { TasksService } from '../../../services/tasks.service';
import { Task } from '../../../types/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() selectedUser: User | undefined;
  isAddindTask: boolean = false;
  userTasks: Task[] = [];

  constructor(private readonly tasksSevice: TasksService) {
    if (this.selectedUser) {
      this.userTasks = tasksSevice.getUserTask(this.selectedUser.id);
    }
  }

  onCompleteTask(id: string): void {
    this.tasksSevice.removeTask(id);
  }

  onStartAddTask(): void {
    this.isAddindTask = true;
  }

  onCloseAddTasks(): void {
    this.isAddindTask = false;
  }
}
