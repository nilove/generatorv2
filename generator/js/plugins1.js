! function($) {
    "use strict";
    var e = {
        accordionOn: ["xs"]
    };
    $.fn.uouTabs = function(a) {
        var i = $.extend({}, e, a),
            t = "";
        return $.each(i.accordionOn, function(e, a) {
            t += " accordion-" + a
        }), this.each(function() {
            var e = $(this),
                a = e.children(".tabs").find("> li > a"),
                i = e.children(".content"),
                n = i.children("div");
            e.addClass(t), a.each(function(e) {
                var i = $(this),
                    t = i.attr("href"),
                    n = "",
                    s = "",
                    c = "";
                i.parent("li").hasClass("active") && (n = " active"), 0 === e ? s = " first" : e === a.length - 1 && (c = " last"), i.clone(!1).addClass("accordion-link" + n + s + c).insertBefore(t)
            });
            var s = i.children(".accordion-link");
            a.on("click", function(e) {
                e.preventDefault();
                var a = $(this),
                    t = a.parent("li"),
                    c = t.siblings("li"),
                    o = a.attr("href"),
                    l = i.children('a[href="' + o + '"]');
                t.hasClass("active") || (t.addClass("active"), c.removeClass("active"), n.removeClass("active"), $(o).addClass("active"), s.removeClass("active"), l.addClass("active"))
            }), s.on("click", function(i) {
                i.preventDefault();
                var t = $(this),
                    c = t.attr("href"),
                    o = e.find('li > a[href="' + c + '"]').parent("li");
                t.hasClass("active") || (s.removeClass("active"), t.addClass("active"), n.removeClass("active"), $(c).addClass("active"), a.parent("li").removeClass("active"), o.addClass("active"))
            })
        })
    }
}(jQuery);