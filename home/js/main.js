jQuery(document).ready(function(){
  //riples
   "use strict"
    $(".slider").ripples({
        dropRadius: 11,
        perturbance: 0.01, 
    });
       
    

    // stiky navbar
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=60){
          $("nav").addClass('secondary');
        }

        else 
            if($("nav").hasClass('secondary')) {
                $("nav").removeClass('secondary');
        }
    });
});