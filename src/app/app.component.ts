import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-portfolio';
  constructor(
    private _title: Title
  ) { }

  ngOnInit(): void {
    this._title.setTitle('dannermm')
  }

}
