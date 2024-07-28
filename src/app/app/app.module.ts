import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TasksModule } from '../tasks/tasks.module';
import { AppComponent } from '../components/root/app.component';
import { HeaderComponent } from '../components/header/header.component';
import { UserComponent } from '../components/user/user.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  imports: [CommonModule, BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
