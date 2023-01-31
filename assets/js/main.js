$(document).ready(function(){
    
// Burger accordeon
    $('#burger').on('click', function() {
        $('#menu').slideToggle(500)
    });


    // work
    $('#work-photo-slider').slick({
        arrows: false,
        centerMode: true,
        variableWidth: true,
    });

    // promotion
    $('#promotion-slides').slick({
        arrows: false,
        infinite: false,
        centerMode: true,
        variableWidth: true,

        dots: true,
    });
});