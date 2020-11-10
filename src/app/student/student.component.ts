import { Component, OnInit } from '@angular/core';

export class Address {
  public line1: string;
  public line2: string;
  public city: string;
  public state: string;
  public zipcode: string;
}

export class Student {
  public name: string;
  public email: string;
  public password: string;
  public confirmPassword: string;
  public regdate: Date;
  public major: string; 
  public address: Address;
  public phone: string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component_r7.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() {
  }


  ngOnInit(): void {
    this.model.address = new Address();
  }


  model = new Student();

  get value():string {
    var val = JSON.stringify(this.model);
    console.log(val);
    return val;
  }

  Major: string[] = [
    'CS',
    'SE',
    'DS',
    'IT',
    'IS'
  ];

  States: string[] = [
    'IL',
    'IN',
    'MI',
    'WI',
    'MN'
  ];  
  onSubmit(form): void {
    console.log(form.value);
  }
}
