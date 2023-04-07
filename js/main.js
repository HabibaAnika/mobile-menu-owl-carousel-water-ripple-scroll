(function($){
    
    'use srict'

    $('.fa-bars').on('click', function(){
        $('.main-menu').slideDown();
        $('.fa-xmark').show();
        $(this).hide();
    });

    $('.fa-xmark').on('click', function(){
        $('.main-menu').slideUp();
        $('.fa-bars').show();
        $(this).hide();
    });

    $(window).resize(function(){
      var screenSize = $(window).width();

      if (screenSize > 991) {
        $('.main-menu').removeAttr('style')
      }

    });

    $(window).scroll(function(){
        var down = $(window).scrollTop();
        $('.box').text(down);
        
        // Scroll Button
        if (down > 1000) {
          $('.scroll-button').fadeIn();
        }

        else{
          $('.scroll-button').fadeOut();
        }
        
        // Fixed header

        if (down > 100) {
          $('header').addClass('header-area');
        }
        
        else{
          $('header').removeClass('header-area');
        }


    });

    $('.scroll-button').on('click', function(){
      $('html').animate({scrollTop : 0});
    });
    
    // Ripples
    $('.banner').ripples();
    
    // OWL CAROUSEL
    $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          autoplay:true,
          autoplayTimeout:3000,
          navText:['<i class="fa-solid fa-circle-arrow-left"></i>','<i class="fa-solid fa-circle-arrow-right"></i>'],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
          }
      })

})(jQuery);