import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'student',
    component: LayoutComponent,
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'teacher',
    component: LayoutComponent,
    loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule)
  },
  
  
  
  
  {
    path: 'business',
    component: LayoutComponent,
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
