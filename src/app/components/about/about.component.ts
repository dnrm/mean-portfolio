import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;
  public website: string;

  constructor(private _title: Title) {
    this.title = 'Daniel Medina';
    this.subtitle = 'Web Developer';
    this.email = 'daniel@medina.com';
    this.website = 'dannermm.com';
  }

  ngOnInit(): void {
    this._title.setTitle('about | dannermm')
  }

}
