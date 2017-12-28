$(document).ready(function(){
  $('.nav li a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});

$(document).ready(()=> {
  'use strict';

    var owl = $('.owl-carousel'),
        item,
        itemsBgArray = [], // to store items background-image
        itemBGImg;
  
    owl.owlCarousel({  
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 15000,
        autoplaySpeed: 1000,
        loop: true,
        nav: true,
        navText: false,
        onTranslated: function () {
            changeNavsThump();
        }
    });
  
    $('.active').addClass('anim');
  
    var owlItem = $('.owl-item'),
        owlLen = owlItem.length;
    /* --------------------------------
      * store items bg images into array
    --------------------------------- */
    $.each(owlItem, function( i, e ) {
        itemBGImg = $(e).find('.owl-item-bg').attr('src');
        itemsBgArray.push(itemBGImg);
    });
    /* --------------------------------------------
      * nav control thump
      * nav control icon
    --------------------------------------------- */
    var owlNav = $('.owl-nav'),
        el;
    
    $.each(owlNav.children(), function (i,e) {
        el = $(e);
        // append navs thump/icon with control pattern(owl-prev/owl-next)
        el.append('<div class="'+ el.attr('class').match(/owl-\w{4}/) +'-thump">');
        el.append('<div class="'+ el.attr('class').match(/owl-\w{4}/) +'-icon">');
    });
    
    /*-------------------------------------------
      Change control thump on each translate end
    ------------------------------------------- */
    function changeNavsThump() {
        var activeItemIndex = parseInt($('.owl-item.active').index()),
            // if active item is first item then set last item bg-image in .owl-prev-thump
            // else set previous item bg-image
            prevItemIndex = activeItemIndex != 0 ? activeItemIndex - 1 : owlLen - 1,
            // if active item is last item then set first item bg-image in .owl-next-thump
            // else set next item bg-image
            nextItemIndex = activeItemIndex != owlLen - 1 ? activeItemIndex + 1 : 0;
        
        $('.owl-prev-thump').css({
            backgroundImage: 'url(' + itemsBgArray[prevItemIndex] + ')'
        });
        
        $('.owl-next-thump').css({
            backgroundImage: 'url(' + itemsBgArray[nextItemIndex] + ')'
        });
    }
    changeNavsThump();
});




// $(document).ready(function(){

//     /** 
//      * This part does the "fixed navigation after scroll" functionality
//      * We use the jQuery function scroll() to recalculate our variables as the 
//      * page is scrolled/
//      */
//     $(window).scroll(function(){
//         var window_top = $(window).scrollTop() + 12; // the "12" should equal the margin-top value for nav.stick
//         var div_top = $('#nav-anchor').offset().top;
//             if (window_top > div_top) {
//                 $('nav').addClass('stick');
//             } else {
//                 $('nav').removeClass('stick');
//             }
//     });

//     /**
//      * This part causes smooth scrolling using scrollto.js
//      * We target all a tags inside the nav, and apply the scrollto.js to it.
//      */
//     $("nav a").click(function(evn){
//         evn.preventDefault();
//         $('html,body').scrollTo(this.hash, this.hash); 
//     });

//     /**
//      * This part handles the highlighting functionality.
//      * We use the scroll functionality again, some array creation and 
//      * manipulation, class adding and class removing, and conditional testing
//      */
//     var aChildren = $("nav li").children(); // find the a children of the list items
//     var aArray = []; // create the empty aArray
//     for (var i=0; i < aChildren.length; i++) {    
//         var aChild = aChildren[i];
//         var ahref = $(aChild).attr('href');
//         aArray.push(ahref);
//     } // this for loop fills the aArray with attribute href values

//     $(window).scroll(function(){
//         var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
//         var windowHeight = $(window).height(); // get the height of the window
//         var docHeight = $(document).height();

//         for (var i=0; i < aArray.length; i++) {
//             var theID = aArray[i];
//             var divPos = $(theID).offset().top; // get the offset of the div from the top of page
//             var divHeight = $(theID).height(); // get the height of the div in question
//             if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
//                 $("a[href='" + theID + "']").addClass("nav-active");
//             } else {
//                 $("a[href='" + theID + "']").removeClass("nav-active");
//             }
//         }

//         if(windowPos + windowHeight == docHeight) {
//             if (!$("nav li:last-child a").hasClass("nav-active")) {
//                 var navActiveCurrent = $(".nav-active").attr("href");
//                 $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
//                 $("nav li:last-child a").addClass("nav-active");
//             }
//         }
//     });
// });