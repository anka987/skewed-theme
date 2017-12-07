$(document).ready(function(){
    
    // Kada skrolujem 150px, da se smanji padding headera
    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 150){
            $('header').addClass('py-2');
        }else{
           $('header').removeClass('py-2'); 
        }
    });
    
    // kada kliknem na link u nav, da polako spusti na taj deo
    
    $('.navbar-nav a').click(function(){
        $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 2000);
    });
    
    
    // prvi bxslider
    
    if($('.bxslider').length > 0){
        $('.lead-slider').bxSlider();
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
});