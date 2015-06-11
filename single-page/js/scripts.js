;(function($) {

"use strict";

var $body = $('body');
// var $head = $('head');
// var $mainWrapper = $('#main-wrapper');



// Mediaqueries
// ---------------------------------------------------------
// var XS = window.matchMedia('(max-width:767px)');
// var SM = window.matchMedia('(min-width:768px) and (max-width:991px)');
// var MD = window.matchMedia('(min-width:992px) and (max-width:1199px)');
// var LG = window.matchMedia('(min-width:1200px)');
// var XXS = window.matchMedia('(max-width:480px)');
// var SM_XS = window.matchMedia('(max-width:991px)');
// var LG_MD = window.matchMedia('(min-width:992px)');

$(document).ready(function() {

	$('.flexslider').flexslider();

	$("#clients-slider").owlCarousel({
		items: 6
	});

	// Mobile Sidebar
	// ---------------------------------------------------------
	$('.mobile-sidebar-toggle').on('click', function () {
	  $body.toggleClass('mobile-sidebar-active');
	  return false;
	});

	$('.mobile-sidebar-open').on('click', function () {
	  $body.addClass('mobile-sidebar-active');
	  return false;
	});

	$('.mobile-sidebar-close').on('click', function () {
	  $body.removeClass('mobile-sidebar-active');
	  return false;
	});


	// .uou-block-11a
	// ---------------------------------------------------------
	$('.uou-block-11a').each(function () {
	  var $block = $(this);

	  // nav
	  $block.find('.main-nav').each(function () {
	    var $this = $(this).children('ul');

	    $this.find('li').each(function () {
	      var $this = $(this);

	      if ($this.children('ul').length > 0) {
	        $this.addClass('has-submenu');
	        $this.append('<span class="arrow"></span>');
	      }
	    });

	    var $submenus = $this.find('.has-submenu');

	    $submenus.children('.arrow').on('click', function (event) {
	      var $this = $(this),
	          $li = $this.parent('li');

	      if (!$li.hasClass('active')) {
	        $li.addClass('active');
	        $li.children('ul').slideDown();
	      } else {
	        $li.removeClass('active');
	        $li.children('ul').slideUp();
	      }
	    });
	  });
	});

	// BACKGROUND FOR EACH SLIDE
  $( '#slider' ).each(function(){

    var self = $(this),
    slide = self.find( '.slide' );

    // SET BG IMAGES
    slide.each(function(){
      var img =  $(this).find( '.background' );
      if ( img.length > 0 ) {
        $(this).css( 'background-image', 'url(' + img.attr( 'src' ) + ')' );
        img.hide();
      }
    });
  });

  $(".swipebox").swipebox();
});

$(window).load(function(){
	// ISOTOPE FILTERS
	$('#portfolio').each(function() {
	  var $container = $('.portfolio-filters-content');
		// initialize
		$container.masonry({
			itemSelector: 'article'
		});

		var filterFns = {};

	  $('#portfolio .filters li a').on( 'click', function() {
	    var filterValue = $( this ).attr('data-filter');
	    // use filterFn if matches value
	    filterValue = filterFns[ filterValue ] || filterValue;
	    $container.isotope({ filter: filterValue });

	    $('#portfolio .filters li a').each(function(){
	      $(this).removeClass("active");
	    });
	    $(this).addClass("active");

	    return false;
	  });
	});
});



// Touch
// ---------------------------------------------------------
var dragging = false;

$body.on('touchmove', function() {
	dragging = true;
});

$body.on('touchstart', function() {
	dragging = false;
});



}(jQuery));
