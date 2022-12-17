import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  studentList = [
    {
      "Id": "1",
      "Name": "Karan",
      "Class": "4"
    },
    {
      "Id": "2",
      "Name": "Himanshu",
      "Class": "5"
    },
    {
      "Id": "3",
      "Name": "Shivangi",
      "Class": "9"
    }
  ]

}
