import { Component, ElementRef, OnInit } from '@angular/core';
declare var $: any;
import {CookieService} from 'angular2-cookie/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  styleDiv: any;
  exp: any;
  now: any;
  constructor(private _cookieService: CookieService,  private element: ElementRef, private router: Router) {}
  themePickerOpened = false;
  showThemePicker = () => {
      this.themePickerOpened = !this.themePickerOpened;
  }
  logout = () => {
    this.router.navigate(['/login']);
  }
//   setTheme = (name) => {
//     this.now = new (<any>window).Date();
//     // this will set the expiration to 2 months
//     this.exp = (<any>window).Date(this.now.getFullYear(), this.now.getMonth() + 2, this.now.getDate());
//     this._cookieService.put('themeColor', name, {
//       expires: this.exp
//     });
//     console.log('nativeElement', this.element.nativeElement.querySelector('#container'));
//     this.element.nativeElement.querySelector('#container').removeClass(function(index, className) {
//       return (className.match(/\btheme-\S+/g) || []).join(' ');
//   }).addClass(name);
// }
// setLayout = (size) => {
//   this.now = new (<any>window).Date();
//   // this will set the expiration to 2 months
//   this.exp = (<any>window).Date(this.now.getFullYear(), this.now.getMonth() + 2, this.now.getDate());
//   this._cookieService.put('themeLayout', size, {
//       expires: this.exp
//   });
//   if (size === 'narrow') {
//       this.element.nativeElement.querySelector('.hostUpdate').addClass('tab-content').removeClass('hostUpdate');
//       this.element.nativeElement.querySelector('.custom-input-group1').addClass('custom-input-group').removeClass('custom-input-group1');
//       this.element.nativeElement.querySelector('.container-fluid').addClass('container').removeClass('container-fluid');
//   } else if (size === 'wide') {
//       if (this.element.nativeElement.querySelector('#wrapper')[0].className === '') {
//           this.element.nativeElement.querySelector('#wrapper').addClass('toggled');
//       }
//       this.element.nativeElement.querySelector('.hostUpdate').addClass('hostUpdate').removeClass('tab-content');
//       this.element.nativeElement.querySelector('.custom-input-group').addClass('custom-input-group1').removeClass('custom-input-group');
//       this.element.nativeElement.querySelector('.container').addClass('container-fluid').removeClass('container');
//   }
// }
ngOnInit() {
    $('.primary-search-form').click(function(e) {
      e.preventDefault();
      $('.primary-top-header').hide();
      $('.secondary-top-header').show(0);
      $('.secondary-top-header').addClass('animated bounce');
      $('.overlay').show();
      $('.big_search_box').focus();
    });

    $('.hide_big_search_box_btn, .overlay').click(function(e) {
      e.preventDefault();
      $('.overlay').hide();
      $('.secondary-top-header').hide();
      $('.primary-top-header').show();
    });
    $('.expand_div_btn').click(function(e) {
      e.preventDefault();
      $('.zoomable').toggle();
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .toggle();
      $(this)
        .parent()
        .parent()
        .parent()
        .toggleClass('div_expanded');
      $('.table-responsive').toggleClass('more-height-zoomin');
      $(this)
        .children('i')
        .toggleClass('fa-minus');
    });
    $(document).ready(function() {
      $('.right-sidebar').on('click', function() {
        return false;
      });
      // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
      $('.dropdown').on('show.bs.dropdown', function(e) {
        $(this)
          .find('.dropdown-menu')
          .first()
          .stop(true, true)
          .addClass('animated bounceInRight')
          .fadeIn();
      });
      // ADD SLIDEUP ANIMATION TO DROPDOWN //
      $('.dropdown').on('hide.bs.dropdown', function(e) {
        $(this)
          .find('.dropdown-menu')
          .first()
          .stop(true, true)
          .hide();
      });
    });
    // if (this._cookieService.get('themeColor')) {
    //   this.setTheme(this._cookieService.get('themeColor'));
    // }
    // if (this._cookieService.get('themeLayout')) {
    //   this.setLayout(this._cookieService.get('themeLayout'));
    // }
  }
}
