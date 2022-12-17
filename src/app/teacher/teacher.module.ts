import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { TeacheraddComponent } from './teacheradd/teacheradd.component';


@NgModule({
  declarations: [
    TeacherlistComponent,
    TeacheraddComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
