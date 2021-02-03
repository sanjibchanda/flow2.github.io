//preloader
$(window).bind("load", function () {
  jQuery("#loader").fadeOut("slow");
  jQuery("#preloader").delay(0).fadeOut();
});

//sticky navbar
window.onscroll = function() {myFunction()};
  var header = document.getElementById("header");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }


//scroll to top script
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});  

//responsive slider
$('.autoplay').slick({
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [    
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});  

$('.autoplay2').slick({
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [    
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});   



//AOS script

AOS.init({
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// Accordian

$(".hide_box").hide();
      
// without arrow
// $(document).on('click', '.slide_box', function(){
//  $(this).find('.hide_box').slideToggle();
//  $(this).siblings().find('.hide_box').slideUp();

// });

//with arrow
$(document).on('click', '.slide_box', function(){
  $(this).find('.hide_box').slideToggle();
  if($(this).hasClass('active'))
  {
    console.log("yes");
    $(this).removeClass('active');
  }
  else {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  }
  $(this).siblings().find('.hide_box').slideUp();  
});
$('.slide_box:first').trigger('click');