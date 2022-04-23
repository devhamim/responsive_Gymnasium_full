$(function(){


    $('.banner_main').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        infinite:true,
      });



    //   video

    $(document).ready(function(){
        $('.venobox').venobox({
            autoplay:true,
        }); 
    });

    //   video

    // test

    
$('.test_inner').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
    infinite:true,
  });

    // test

    // counter

    $('.num').counterUp({
        delay: 10,
        time: 1000
    });

    // counter

    // mixup

    var mixer = mixitup('.class_itam');

    // mixup

    // brand

    
$('.brand_main').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    
    prevArrow:'.prev',
    nextArrow:'.next',
  });

    // brand

    // lightbox

    lightbox.option({
        'resizeDuration': 500,
        'wrapAround': true,
        'disableScrolling':true,
        'showImageNumberLabel': false,
      })

    // lightbox


    // wow

    new WOW().init();

    // wow

    // back to top

    $(".back_to_top").click(function(){
      $("html, body").animate({
          scrollTop:0
      }, 700)
   });


  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 50){
        $(".back_to_top").fadeIn(1000);
    }
    else{
        $(".back_to_top").fadeOut(1000);
    }
    
  });

    // back to top

});