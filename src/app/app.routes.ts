import { Routes } from '@angular/router';
import { PageLogin } from '@pages/login/login.component';

export const routes: Routes = [
  {
    path: 'ingresar',
    component: PageLogin,
  },
  {
    path: '',
    loadChildren: () => import('./layouts/student/student.routes').then(m => m.STUDENT_ROUTES),
  },
  {
    path: '**',
    redirectTo: '/ingresar'
  }
];
