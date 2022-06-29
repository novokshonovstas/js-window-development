import $ from 'jquery';

$(document).ready(function() {
    $("a.nav-link").click(function(){
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });
});
$(function () {
$('#slide').click(function () {
    $('#posts').slideToggle(1000);

});
});


$(window).scroll(function (event) {
    let top = $(window).scrollTop();
     if(top >= 500){
     $('.scrollUp').fadeIn(500);
     } else {
        $('.scrollUp').fadeOut(500);
     }
});



    


$('.scrollUp').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});


