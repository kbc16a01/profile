import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string;
  name: string;
  age: number;
  job: string;
  constructor() {}
  ngOnInit() {
    this.title = 'My Profile';
    this.name = '';
    this.age = null;
    this.job = '';
  }
}
