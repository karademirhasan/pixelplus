"use strict";

$(document).ready(function () {

    $('.down-button').click(function(e){
        e.preventDefault;
        $("html, body").animate({
            scrollTop: 600
        }, 500);
    });

    var pageHeight = document.body.scrollHeight;
    var downloadSection = $('.download').height();
    var footerSection = $('.footer').height();
    var lineHeight = pageHeight - (footerSection + downloadSection);
    console.log(lineHeight)
    $('.lines').css({
            'min-height': lineHeight
    })

    function moveToSelected(element) {

        if (element == "next") {
            var selected = $(".selected").next();
        } else if (element == "prev") {
            var selected = $(".selected").prev();
        } else {
            var selected = element;
        }

        var next = $(selected).next();
        var prev = $(selected).prev();
        var prevSecond = $(prev).prev();
        var nextSecond = $(next).next();

        $(selected).removeClass().addClass("selected");

        $(prev).removeClass().addClass("prev");
        $(next).removeClass().addClass("next");

        $(nextSecond).removeClass().addClass("nextRightSecond");
        $(prevSecond).removeClass().addClass("prevLeftSecond");

        $(nextSecond).nextAll().removeClass().addClass('hideRight');
        $(prevSecond).prevAll().removeClass().addClass('hideLeft');

    }

    // Eventos teclado
    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
            moveToSelected('prev');
            break;

            case 39: // right
            moveToSelected('next');
            break;

            default: return;
        }
        e.preventDefault();
    });

    $('#carousel div').click(function() {
        moveToSelected($(this));
    });

    $('#prev').click(function() {
        moveToSelected('prev');
    });

    $('#next').click(function() {
        moveToSelected('next');
    });


    
});








$(window).resize(function () {

});