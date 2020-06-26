$(function(){
    
  $(".slider_active").slick({
      arrows: true,
    nextArrow: ".right_btn",
    prevArrow: ".left_btn",
      autoplay:true,
      dots:true,
      
      
}); 
    
    
    
    
    
       
//mixitup 
  var mixer = mixitup('.mix_wrap');  
    
    
    
    
   //venobox
    $('.single_work').venobox({
         share      : ['facebook', 'twitter', 'download'],
        spinner: 'wave'
    }); 
    

    
    
    
    
  //COUNTERUP
$('.counter_up').counterUp({
    time: 1000,
    
});  
    
    
    
    //feedback slider
   
    $(".review_slide").slick({
       arrows:false,
     vertical:true,
      slidesToShow:2,
      slidesToScroll:1,
        dots: true,
        
      
        
}); 
    
    //feedback collepse
    
    
    
    $('.faq_header').on('click',function(){
        
        $('.faq_header button').removeClass('.active')
        $(this).children('button').addClass('.active')
        
        
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      
   var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init(); 
    
    
    
    
    
    
  
    
    //BLOG SLIDER
    
    
    
   $(".blog_slider").slick({
      arrows:false,
      vertical:true,
      slidesToShow:2,
      slidesToScroll:1,
        dots: true,
        
     
      
      
}); 
    
    
    
   














// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
  el: '.color-pickr-box',
  theme: 'classic', // or 'monolith', or 'nano'

  swatches: [
      'rgba(244, 67, 54, 1)',
      'rgba(233, 30, 99, 0.95)',
      'rgba(156, 39, 176, 0.9)',
      'rgba(103, 58, 183, 0.85)',
      'rgba(63, 81, 181, 0.8)',
      'rgba(33, 150, 243, 0.75)',
      'rgba(3, 169, 244, 0.7)',
      'rgba(0, 188, 212, 0.7)',
      'rgba(0, 150, 136, 0.75)',
      'rgba(76, 175, 80, 0.8)',
      'rgba(139, 195, 74, 0.85)',
      'rgba(205, 220, 57, 0.9)',
      'rgba(255, 235, 59, 0.95)',
      'rgba(255, 193, 7, 1)'
  ],

  components: {

      // Main components
      preview: true,
      opacity: true,
      hue: true,

      // Input / output Options
      interaction: {
          hex: true,
          
          input: true,
         
      }
  }
});




pickr.on ('change', (color, instance) => {
      var colorCode = color.toHEXA() .toString();

      document.documentElement.style.setProperty('--themeColor', --Color)


    
}); 



 

     var subMenu = $(".navbar-nav .submenu");

      if (subMenu.length) {
    subMenu.parent('li').children('a').append(function () {
        return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
    });

    var subMenuToggler = $(".navbar-nav .sub-nav-toggler");

    subMenuToggler.on('click', function () {
        $(this).parent().parent().children(".submenu").slideToggle();
        return false
    });

    
  }
    
    
    
    
}); 

















