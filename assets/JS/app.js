$(function () {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrolOffset = 0;
$(window).on("scrol", function () {
        scrolOffset = $(this).scrollTop();
        if ( scrolOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });


});