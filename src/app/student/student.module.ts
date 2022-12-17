import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentlistComponent,
    AddstudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
  ]
})
export class StudentModule { }
