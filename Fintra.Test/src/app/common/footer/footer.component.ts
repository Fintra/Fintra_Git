import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ngOnInit() {
    /* Menu Toggle Script */
    // $('.overlay').hide();
    // $('.secondary-top-header').hide();

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

    // $('.menu-toggle').click(function(e) {
    //     e.preventDefault();
    //     $('#wrapper').toggleClass('toggled');
    //     $('.menu-toggle').toggleClass('highlight');
    // });

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

      // if ($(this).attr('title') == 'Expand') {
      //     $(this).attr('title', 'Minimize');
      // } else {
      //     $(this).attr('title', 'Expand');
      // }
    });

    $(document).ready(function() {
      // $('#menu').metisMenu();

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
  }
}
