import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() width: number;
  @Output() getAuthor = new EventEmitter();

  public author: any = {
    name: 'daniel',
    lastname: 'medina',
    github: 'dnrm'
  }

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.slider').bxSlider({
        mode: 'fade',
        slideWidth: this.width,
        auto: true,
        autoControls: true
      });
    });
  }

  emit(event) {
    this.getAuthor.emit(this.author);
  }

}
