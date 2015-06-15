! function($) {
    "use strict";
    var e = {};
    $.fn.uouAccordions = function(a) {
        var i = $.extend({}, e, a);
        return this.each(function() {
            var e = $(this),
                a = e.find("> li > a"),
                i = e.find("> li > div");
            a.on("click", function(e) {
                e.preventDefault();
                var a = $(this),
                    i = a.parent("li"),
                    t = a.siblings("div"),
                    n = i.siblings("li").children("div");
                i.hasClass("active") ? t.slideUp(250, function() {
                    i.removeClass("active")
                }) : (n.slideUp(250, function() {
                    $(this).parent("li").removeClass("active")
                }), t.slideDown(250, function() {
                    i.addClass("active")
                }))
            })
        })
    }
}(jQuery);