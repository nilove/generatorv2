!function($){"use strict";var t=$("body");$(document).ready(function(){$("#slider").owlCarousel({singleItem:!0}),$("#clients-slider").owlCarousel({items:6}),$("#slider").each(function(){var t=$(this),i=t.find(".slide");i.each(function(){var t=$(this).find(".background");t.length>0&&($(this).css("background-image","url("+t.attr("src")+")"),t.hide())})})}),$(window).load(function(){$("#portfolio").each(function(){var t=$(".portfolio-filters-content");t.masonry({itemSelector:"article"});var i={};$("#portfolio .filters li a").on("click",function(){var o=$(this).attr("data-filter");return o=i[o]||o,t.isotope({filter:o}),$("#portfolio .filters li a").each(function(){$(this).removeClass("active")}),$(this).addClass("active"),!1})})});var i=!1;t.on("touchmove",function(){i=!0}),t.on("touchstart",function(){i=!1})}(jQuery);