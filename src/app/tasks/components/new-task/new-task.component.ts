import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input() userId!: string | undefined;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  constructor(private readonly tasksSevice: TasksService) {}

  onCloseAddTask(): void {
    this.close.emit();
  }

  onSubmit(): void {
    if (this.userId) {
      this.tasksSevice.addTask(
        {
          title: this.enteredTitle,
          summary: this.enteredSummary,
          dueDate: this.enteredDueDate,
        },
        this.userId
      );
    }
    this.close.emit();
  }
}
