import { Component, OnInit, Input } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() width: number;

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

}
