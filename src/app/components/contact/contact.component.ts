import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider: number;
  public widthToSlider: number;

  constructor() { }

  ngOnInit(): void {
    
  }

  loadSlider() {
    this.widthToSlider = null;
    this.widthToSlider = this.widthSlider;
  }

  resetSlider() {
    this.widthToSlider = null;
  }

}
