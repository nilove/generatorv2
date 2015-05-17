
! function($) {
    "use strict";

    function e(e) {
        var a = $(e);
        "placeholder" === a.val() ? a.addClass("placeholder") : a.removeClass("placeholder")
    }

  });
} else {
  console.warn('not loaded -> rangeslider.min.js');
}



// Placeholder functionality for selects (forms)
// ---------------------------------------------------------
function selectPlaceholder(el) {
  var $el = $(el);

  if ($el.val() === 'placeholder') {
    $el.addClass('placeholder');
  } else {
    $el.removeClass('placeholder');
  }
}

$('select').each(function () {
  selectPlaceholder(this);
}).change(function () {
  selectPlaceholder(this);
});





// ---------------------------------------------------------
// BLOCKS
// BLOCKS
// BLOCKS
// BLOCKS
// BLOCKS
// ---------------------------------------------------------





// .uou-block-1a
// ---------------------------------------------------------
$('.uou-block-1a').each(function () {
  var $block = $(this);

  // search
  $block.find('.search').each(function () {
    var $this = $(this);

    $this.find('.toggle').on('click', function (event) {
      event.preventDefault();
      $this.addClass('active');
      setTimeout(function () {
        $this.find('.search-input').focus();
      }, 100);
    });

    $this.find('input[type="text"]').on('blur', function () {
      $this.removeClass('active');
    });
  });

  // language
  $block.find('.language').each(function () {
    var $this = $(this);

    $this.find('.toggle').on('click', function (event) {
      event.preventDefault();

      if (!$this.hasClass('active')) {
        $this.addClass('active');
      } else {
        $this.removeClass('active');
      }
    });
  });
});



// .uou-block-1b
// ---------------------------------------------------------
$('.uou-block-1b').each(function () {
  var $block = $(this);

  // language
  $block.find('.language').each(function () {
    var $this = $(this);

    $this.find('.toggle').on('click', function (event) {
      event.preventDefault();

      if (!$this.hasClass('active')) {
        $this.addClass('active');
      } else {
        $this.removeClass('active');
      }
    });
  });
});



// .uou-block-1e
// ---------------------------------------------------------
$('.uou-block-1e').each(function () {
  var $block = $(this);

  // language
  $block.find('.language').each(function () {
    var $this = $(this);

    $this.find('.toggle').on('click', function (event) {
      event.preventDefault();

      if (!$this.hasClass('active')) {
        $this.addClass('active');
      } else {
        $this.removeClass('active');
      }
    });
  });
});



// .uou-block-5b
// ---------------------------------------------------------
$('.uou-block-5b').each(function () {
  var $block = $(this),
      $tabs = $block.find('.tabs > li');

  $tabs.on('click', function () {
    var $this = $(this),
        target = $this.data('target');

    if (!$this.hasClass('active')) {
      $block.find('.' + target).addClass('active').siblings('blockquote').removeClass('active');

      $tabs.removeClass('active');
      $this.addClass('active');

      return false;
    }
  });
});



// .uou-block-5c
// ---------------------------------------------------------
$('.uou-block-5c').each(function () {
  var $block = $(this);

  if ($.fn.flexslider) {
    $block.find('.flexslider').flexslider({
      slideshowSpeed: 10000,
      animationSpeed: 1000,
      prevText: '',
      nextText: '',
      controlNav: false,
      smoothHeight: true
    });
  } else {
    console.warn('not loaded -> jquery.flexslider-min.js');
  }
});



// .uou-block-7g
// ---------------------------------------------------------
$('.uou-block-7g').each(function () {
  var $block = $(this),
      $badge = $block.find('.badge'),
      badgeColor = $block.data('badge-color');

  if (badgeColor) {
    $badge.css('background-color', '#' + badgeColor);
  }
});



// .uou-block-7h
// ---------------------------------------------------------
$('.uou-block-7h').each(function () {
  var $block = $(this);

  if ($.fn.flexslider) {
    $block.find('.flexslider').flexslider({
      slideshowSpeed: 10000,
      animationSpeed: 1000,
      prevText: '',
      nextText: '',
      directionNav: false,
      smoothHeight: true
    });
  } else {
    console.warn('not loaded -> jquery.flexslider-min.js');
  }
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



// .uou-block-12a
// ---------------------------------------------------------
$('.uou-block-12a').each(function () {
  var $block = $(this),
      $map = $block.find('.map-container .map');

  // Map
  var map,
      height = $map.data('height'),
      centerLat = $map.data('center-lat'),
      centerLng = $map.data('center-lng');

  $map.css('height', height + 'px');

  function initialize () {
    var mapOptions = {
      scrollwheel: false,
      zoom: 14,
      center: new google.maps.LatLng(centerLat, centerLng)
    };

    map = new google.maps.Map($map[0], mapOptions);

    for (var i = 0; i < markers.length; i++) {
      var marker = markers[i];

      new google.maps.Marker({
        position: new google.maps.LatLng(marker.lat, marker.lng),
        map: map,
        title: marker.title
      });
    }
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  google.maps.event.addDomListener(window, 'resize', function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });
});



// .uou-block-12b
// ---------------------------------------------------------
$('.uou-block-12b').each(function () {
  var $block = $(this),
      $map = $block.find('.map-container .map');

  // Map
  var map,
      height = $map.data('height'),
      centerLat = $map.data('center-lat'),
      centerLng = $map.data('center-lng');

  $map.css('height', height + 'px');

  function initialize () {
    var mapOptions = {
      scrollwheel: false,
      zoom: 14,
      center: new google.maps.LatLng(centerLat, centerLng)
    };

    map = new google.maps.Map($map[0], mapOptions);

    for (var i = 0; i < markers.length; i++) {
      var marker = markers[i];

      new google.maps.Marker({
        position: new google.maps.LatLng(marker.lat, marker.lng),
        map: map,
        title: marker.title
      });
    }

  }

  google.maps.event.addDomListener(window, 'load', initialize);

  google.maps.event.addDomListener(window, 'resize', function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });
});



// .uou-block-12c
// ---------------------------------------------------------
$('.uou-block-12c').each(function () {
  var $block = $(this),
      $map = $block.find('.map-container .map');

  // Map
  var map,
      height = $map.data('height'),
      centerLat = $map.data('center-lat'),
      centerLng = $map.data('center-lng');

  $map.css('height', height + 'px');

  function initialize () {
    var mapOptions = {
      scrollwheel: false,
      zoom: 14,
      center: new google.maps.LatLng(centerLat, centerLng)
    };

    map = new google.maps.Map($map[0], mapOptions);

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(centerLat, centerLng),
      map: map,
      title: ''
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  google.maps.event.addDomListener(window, 'resize', function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });
});



  $(".swipebox").swipebox();


$(window).load(function(){
  // ISOTOPE FILTERS
  $('.uou-portfolio').each(function() {
    var $container = $('.portfolio-filters-content');
    // initialize
    $container.masonry({
      itemSelector: 'article'
    });

    var filterFns = {};

    $('.uou-portfolio .filters li a').on( 'click', function() {
      var filterValue = $( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $container.isotope({ filter: filterValue });

      $('.uou-portfolio .filters li a').each(function(){
        $(this).removeClass("active");
      });
      $(this).addClass("active");

      return false;
    });
  });
});






  // $("#slider").owlCarousel({
  //   singleItem: true
  // });

  // // BACKGROUND FOR EACH SLIDE
  // $( '#slider' ).each(function(){

  //   var self = $(this),
  //   slide = self.find( '.slide' );

  //   // SET BG IMAGES
  //   slide.each(function(){
  //     var img =  $(this).find( '.background' );
  //     if ( img.length > 0 ) {
  //       $(this).css( 'background-image', 'url(' + img.attr( 'src' ) + ')' );
  //       img.hide();
  //     }
  //   });
  // });




      $('.flexslider').flexslider();

      $("#clients-slider").owlCarousel({
        items: 6
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


  




}(jQuery));

    var a = $("body"),
        n = [{
            lat: 37.780823,
            lng: -122.4231,
            title: "Marker 1"
        }, {
            lat: 37.768068680454725,
            lng: -122.430739402771,
            title: "Marker 2"
        }, {
            lat: 37.7791272169824,
            lng: -122.4296236038208,
            title: "Marker 3"
        }, {
            lat: 37.770715,
            lng: -122.392631,
            title: "Marker 4"
        }, {
            lat: 37.78197638783258,
            lng: -122.45829105377197,
            title: "Marker 5"
        }, {
            lat: 37.769629187677,
            lng: -122.46798992156982,
            title: "Marker 6"
        }],
        t = !1;
    a.on("touchmove", function() {
        t = !0
    }), a.on("touchstart", function() {
        t = !1
    }), $(".has-bg-image").each(function() {
        var e = $(this),
            a = e.data("bg-image"),
            n = e.data("bg-color"),
            t = e.data("bg-opacity"),
            o = $("<div/>", {
                "class": "content"
            }),
            i = $("<div/>", {
                "class": "background"
            });
        t ? (e.children().wrapAll(o), e.append(i), e.css({
            "background-image": "url(" + a + ")"
        }), i.css({
            "background-color": "#" + n,
            opacity: t
        })) : e.css({
            "background-image": "url(" + a + ")",
            "background-color": "#" + n
        })
    }), $.fn.superfish ? $(".sf-menu").superfish() : console.warn("not loaded -> superfish.min.js and hoverIntent.js"), $(".mobile-sidebar-toggle").on("click", function() {
        return a.toggleClass("mobile-sidebar-active"), !1
    }), $(".mobile-sidebar-open").on("click", function() {
        return a.addClass("mobile-sidebar-active"), !1
    }), $(".mobile-sidebar-close").on("click", function() {
        return a.removeClass("mobile-sidebar-active"), !1
    }), $.fn.uouTabs ? $(".uou-tabs").uouTabs() : console.warn("not loaded -> uou-tabs.js"), $.fn.uouAccordions ? $(".uou-accordions").uouAccordions() : console.warn("not loaded -> uou-accordions.js"), $(".alert").each(function() {
        var e = $(this);
        e.hasClass("alert-dismissible") && e.children(".close").on("click", function(a) {
            a.preventDefault(), e.remove()
        })
    }), $.fn.flexslider ? $(".default-slider").flexslider({
        slideshowSpeed: 1e4,
        animationSpeed: 1e3,
        prevText: "",
        nextText: ""
    }) : console.warn("not loaded -> jquery.flexslider-min.js"), $.fn.rangeslider ? $('input[type="range"]').rangeslider({
        polyfill: !1,
        onInit: function() {
            this.$range.wrap('<div class="uou-rangeslider"></div>').parent().append('<div class="tooltip">' + this.$element.data("unit-before") + "<span></span>" + this.$element.data("unit-after") + "</div>")
        },
        onSlide: function(e, a) {
            var n = this.$range.parent().find(".tooltip span");
            n.html(a)
        }
    }) : console.warn("not loaded -> rangeslider.min.js"), $("select").each(function() {
        e(this)
    }).change(function() {
        e(this)
    }), $(".uou-block-1a").each(function() {
        var e = $(this);
        e.find(".search").each(function() {
            var e = $(this);
            e.find(".toggle").on("click", function(a) {
                a.preventDefault(), e.addClass("active"), setTimeout(function() {
                    e.find(".search-input").focus()
                }, 100)
            }), e.find('input[type="text"]').on("blur", function() {
                e.removeClass("active")
            })
        }), e.find(".language").each(function() {
            var e = $(this);
            e.find(".toggle").on("click", function(a) {
                a.preventDefault(), e.hasClass("active") ? e.removeClass("active") : e.addClass("active")
            })
        })
    }), $(".uou-block-1b").each(function() {
        var e = $(this);
        e.find(".language").each(function() {
            var e = $(this);
            e.find(".toggle").on("click", function(a) {
                a.preventDefault(), e.hasClass("active") ? e.removeClass("active") : e.addClass("active")
            })
        })
    }), $(".uou-block-1e").each(function() {
        var e = $(this);
        e.find(".language").each(function() {
            var e = $(this);
            e.find(".toggle").on("click", function(a) {
                a.preventDefault(), e.hasClass("active") ? e.removeClass("active") : e.addClass("active")
            })
        })
    }), $(".uou-block-5b").each(function() {
        var e = $(this),
            a = e.find(".tabs > li");
        a.on("click", function() {
            var n = $(this),
                t = n.data("target");
            return n.hasClass("active") ? void 0 : (e.find("." + t).addClass("active").siblings("blockquote").removeClass("active"), a.removeClass("active"), n.addClass("active"), !1)
        })
    }), $(".uou-block-5c").each(function() {
        var e = $(this);
        $.fn.flexslider ? e.find(".flexslider").flexslider({
            slideshowSpeed: 1e4,
            animationSpeed: 1e3,
            prevText: "",
            nextText: "",
            controlNav: !1,
            smoothHeight: !0
        }) : console.warn("not loaded -> jquery.flexslider-min.js")
    }), $(".uou-block-7g").each(function() {
        var e = $(this),
            a = e.find(".badge"),
            n = e.data("badge-color");
        n && a.css("background-color", "#" + n)
    }), $(".uou-block-7h").each(function() {
        var e = $(this);
        $.fn.flexslider ? e.find(".flexslider").flexslider({
            slideshowSpeed: 1e4,
            animationSpeed: 1e3,
            prevText: "",
            nextText: "",
            directionNav: !1,
            smoothHeight: !0
        }) : console.warn("not loaded -> jquery.flexslider-min.js")
    }), $(".uou-block-11a").each(function() {
        var e = $(this);
        e.find(".main-nav").each(function() {
            var e = $(this).children("ul");
            e.find("li").each(function() {
                var e = $(this);
                e.children("ul").length > 0 && (e.addClass("has-submenu"), e.append('<span class="arrow"></span>'))
            });
            var a = e.find(".has-submenu");
            a.children(".arrow").on("click", function(e) {
                var a = $(this),
                    n = a.parent("li");
                n.hasClass("active") ? (n.removeClass("active"), n.children("ul").slideUp()) : (n.addClass("active"), n.children("ul").slideDown())
            })
        })
    }), $(".uou-block-12a").each(function() {
        function e() {
            var e = {
                scrollwheel: !1,
                zoom: 14,
                center: new google.maps.LatLng(s, l)
            };
            o = new google.maps.Map(t[0], e);
            for (var a = 0; a < n.length; a++) {
                var i = n[a];
                new google.maps.Marker({
                    position: new google.maps.LatLng(i.lat, i.lng),
                    map: o,
                    title: i.title
                })
            }
        }
        var a = $(this),
            t = a.find(".map-container .map"),
            o, i = t.data("height"),
            s = t.data("center-lat"),
            l = t.data("center-lng");
        t.css("height", i + "px"), google.maps.event.addDomListener(window, "load", e), google.maps.event.addDomListener(window, "resize", function() {
            var e = o.getCenter();
            google.maps.event.trigger(o, "resize"), o.setCenter(e)
        })
    }), $(".uou-block-12b").each(function() {
        function e() {
            var e = {
                scrollwheel: !1,
                zoom: 14,
                center: new google.maps.LatLng(s, l)
            };
            o = new google.maps.Map(t[0], e);
            for (var a = 0; a < n.length; a++) {
                var i = n[a];
                new google.maps.Marker({
                    position: new google.maps.LatLng(i.lat, i.lng),
                    map: o,
                    title: i.title
                })
            }
        }
        var a = $(this),
            t = a.find(".map-container .map"),
            o, i = t.data("height"),
            s = t.data("center-lat"),
            l = t.data("center-lng");
        t.css("height", i + "px"), google.maps.event.addDomListener(window, "load", e), google.maps.event.addDomListener(window, "resize", function() {
            var e = o.getCenter();
            google.maps.event.trigger(o, "resize"), o.setCenter(e)
        })
    }), $(".uou-block-12c").each(function() {
        function e() {
            var e = {
                scrollwheel: !1,
                zoom: 14,
                center: new google.maps.LatLng(i, s)
            };
            t = new google.maps.Map(n[0], e);
            var a = new google.maps.Marker({
                position: new google.maps.LatLng(i, s),
                map: t,
                title: ""
            })
        }
        var a = $(this),
            n = a.find(".map-container .map"),
            t, o = n.data("height"),
            i = n.data("center-lat"),
            s = n.data("center-lng");
        n.css("height", o + "px"), google.maps.event.addDomListener(window, "load", e), google.maps.event.addDomListener(window, "resize", function() {
            var e = t.getCenter();
            google.maps.event.trigger(t, "resize"), t.setCenter(e)
        })
    })
}(jQuery);

