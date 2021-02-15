import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider: number;
  public widthToSlider: number;
  public author: any;
  @ViewChild('title') title;

  constructor() { }

  ngOnInit(): void { }

  loadSlider() {
    this.widthToSlider = null;
    this.widthToSlider = this.widthSlider;
  }

  resetSlider() {
    this.widthToSlider = null;
  }

  getAuthor(event) {
    this.author = event;
    console.log(event);
    console.log(this.title);
  }
}
