import { Routes } from '@angular/router';

import { ListTasksComponent } from './list-tasks';

export const TaskRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/list-tasks',
  },
  {
    path: 'tasks/list-tasks',
    component: ListTasksComponent,
  },
];
