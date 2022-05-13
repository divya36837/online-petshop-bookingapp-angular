import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName!:string;
  lastName!:string;
  role!:string;
  mobileNumber!:string;
  email!:string;
  password!:string;
  confirmPassword!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
