// Parallax

// On
// About
$(window).on('load', function(){
    setTimeout(() => {
        $('.row p').addClass('muncul')
    }, 300);
})

//Scroll 
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();

// Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/5 +'%)'})

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'})

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll*1.3 +'%)'
    });


// Gallery
    if (wScroll > $('.portfolio').offset().top - 450) {
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(() => {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 1000 * i);
        })
    }
});