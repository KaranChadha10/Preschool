import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IStudent } from 'src/app/_models/student.model';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  addStudentForm : FormGroup;
  Gender =['Male','Female','Others'];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.InitializeForm();
  
  }

  

  AddStudent(student: IStudent){
    
  }

  InitializeForm(){
    this.addStudentForm = this._formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      class : ['',Validators.required],
      gender: ['',Validators.required],
      religion: ['',Validators.required],
      phoneNumber : ['',Validators.required],
      admissionNumber : ['',Validators.required],
      dateOfBirth : ['',Validators.required],
      address : ['',Validators.compose([Validators.required,Validators.maxLength(1000)])],
    });
    
  }
  changeGender(event: any) {
    this.addStudentForm.controls['gender'].setValue(event.target.value, {
      onlySelf: true,
    });
  }

  changeDateOfBirth(event: any) {
    this.addStudentForm.controls['dateOfBirth'].setValue(event.target.value, {
      onlySelf: true,
    });
  }

  onSubmit(){
    console.log(this.addStudentForm.value)
  }

}
