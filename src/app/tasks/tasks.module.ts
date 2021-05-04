import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService } from './shared';
import { ListTasksComponent, RegisterTaskComponent } from './';

@NgModule({
  declarations: [ListTasksComponent, RegisterTaskComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [TaskService],
})
export class TasksModule {}
