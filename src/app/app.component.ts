import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    setTheme('bs4'); // or 'bs4'
  }
  title = 'designingDemo';
  menu: boolean = true;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1600: {
        items: 5
      },
      2300: {
        items: 6
      }
    },
    nav: true
  }

  heartIcons = {
    empty: '../assets/heart-empty.png',
    half: '../assets/heart-empty.png',
    full: '../assets/heart-full.png',
  }
  
  toggleMenu() {
    $(".main-menu").toggleClass("hide");
    if(this.menu == true){
      this.menu = false;
    }
    else{
      this.menu = true;
    }
  }


}
