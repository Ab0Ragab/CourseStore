/*global $, document, window*/

$(document).ready(function () {
    
    "use strict";
    
    //nice scroll
    
    $("html").niceScroll();
   // carousel slide time
    
    $('.carousel').carousel({
         
        interval: 4000
         
    });
      
     // show color-option div when click on the gear
    $('.gear-div').click(function () {
        
        $('.option-box .color-option').fadeToggle(500);
        
    });
    
    //change theme color on click
    
    var colorli = $('.color-option ul li'),
        scrollbutton = $("#scroll-up");
    
    $('.color-option ul li') //chane color of li
        .eq(0).css("backgroundColor", "powderblue").end()
        .eq(1).css("backgroundColor", "green").end()
        .eq(2).css("backgroundColor", "Blue").end()
        .eq(3).css("backgroundColor", "brown");
    
    colorli.click(function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));    //console.log($(this).attr("data-value"))
        
    });
    
    //caching scrolltop element
    
    
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
            scrollbutton.show();
        } else {
            scrollbutton.hide();
        }
    });
    
    //click on button to scroll top
    
    scrollbutton.click(function () {
        
        $("html, body").animate({scrollTop : 0}, 600);
        
    });
});


  //loading screen
$(window).load(function () {
    
    "use strict";
    
    $(".loding-overlay .sk-fading-circle").fadeOut(2000, function () {
        
       //show the scroll 
        
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();
            
        });
        
    });
    
});