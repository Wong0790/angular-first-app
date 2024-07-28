import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NewTaskComponent } from './components/new-task/new-task.component';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
  declarations: [TasksComponent, NewTaskComponent, TasksComponent],
  imports: [CommonModule, FormsModule],
  exports: [TasksComponent],
})
export class TasksModule {}
