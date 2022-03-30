(function($) {
  "use strict";
  $(window).on("load", function() { // makes sure the whole site is loaded
    //preloader
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website.
       
  });


  $(document).ready(function(){  

    //active menu
    $(document).on("scroll", onScroll);
 
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
 
      $('a').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');
 
      var target = this.hash;
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });

    
    //scroll js
    smoothScroll.init({
      selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
      selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
      speed: 500, // Integer. How fast to complete the scroll in milliseconds
      easing: 'easeInOutCubic', // Easing pattern to use
      updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
      offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
      callback: function ( toggle, anchor ) {} // Function to run after scrolling
    });

    //menu
    var bodyEl = document.body,
    content = document.querySelector( '.content-wrap' ),
    openbtn = document.getElementById( 'open-button' ),
    closebtn = document.getElementById( 'close-button' ),
    isOpen = false;

    function inits() {
      initEvents();
    }

    function initEvents() {
      openbtn.addEventListener( 'click', toggleMenu );
      if( closebtn ) {
        closebtn.addEventListener( 'click', toggleMenu );
      }

      // close the menu element if the target it´s not the menu element or one of its descendants..
      content.addEventListener( 'click', function(ev) {
        var target = ev.target;
        if( isOpen && target !== openbtn ) {
          toggleMenu();
        }
      } );
    }

    function toggleMenu() {
      if( isOpen ) {
        classie.remove( bodyEl, 'show-menu' );
      }
      else {
        classie.add( bodyEl, 'show-menu' );
      }
      isOpen = !isOpen;
    }

    inits();


    //typed js
    $(".typed").typed({
        strings: ["DAYE's Portfolio", "Web Designer","Web Publisher"],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
    });

    //owl carousel
    $('.owl-carousel').owlCarousel({
      autoPlay: 5000, 
      //Set AutoPlay to 3 seconds
 
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768,1],
      itemsMobile : [479,1],

      // CSS Styles
      baseClass : "owl-carousel",
      theme : "owl-theme"
    });


    //pop up porfolio
    $('.pup a').magnificPopup({
      // type: 'inline',
      type:'image',
      gallery: {
        enabled: true
      }
      // other options
    });


  
  });
  
    
  //header
  function inits() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector(".for-sticky");
        if (distanceY > shrinkOn) {
            classie.add(header,"opacity-nav");
        } else {
            if (classie.has(header,"opacity-nav")) {
                classie.remove(header,"opacity-nav");
            }
          }
      });
    }

  window.onload = inits();

  //nav-active
  function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('.menu-list a').each(function () {
      var currentLink = $(this);
      var refElement = $(currentLink.attr("href"));
      if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
        $('.menu-list a').removeClass("active");
        currentLink.addClass("active");
      }
      else{
        currentLink.removeClass("active");
      }
    });
  }

  $(window).scroll( function(){
        $('.fadeinleft').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
            }
            
        }); 
    });

  // ---------------------------------------------- 
    //  Isotope Filter 
    // ---------------------------------------------- 
	(function () {
		var winDow = $(window);
		var $container=$('.portfolio-items');
		var $filter=$('.filter');

		try{
			$container.imagesLoaded( function(){
				$container.show();
				$container.isotope({
					filter:'*',
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});
			});
		} catch(err) {
		}

		winDow.bind('resize', function(){
			var selector = $filter.find('a.active').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});

		$filter.find('a').click(function(){
			var selector = $(this).attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {

			}
			return false;
		});


		var filterItemA	= $('.filter a');

		filterItemA.on('click', function(){
			var $this = $(this);
			if ( !$this.hasClass('active')) {
				filterItemA.removeClass('active');
				$this.addClass('active');
			}
		});
	}()); 

  $('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('data-width');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
      duration: 1000,
      step: function(){
        $this.attr('data-width', Math.floor(this.animatedValue) + '%');
      },
      complete: function(){
        $this.attr('data-width', Math.floor(this.animatedValue) + '%');
      }
    });
  });

  /*스크롤 내비게이션*/

//   $(window).scroll(function() { 
//     if($(this).scrollTop() > 800) {
//         $("#list3 i").css('color', '#111');
// $("#list3 i").css('color','white');
//     } else {
//         $("#list3").css('color', 'transparent');
// $("#list3 a").css('color','#494846');
//     }
// });
// $(window).scroll(function() { 
//     if($(this).scrollTop() > 8000) {
//         $("#list3 i").css('color', 'transparent');
// $("#list3 a").css('color','#494846');
//     } 
// });

			//프로필 스크롤
//       $(window).scroll(function() { 
//         if($(this).scrollTop() > 800) {
//             $("#list1").css('background-color', '#beb1e7');
//   $("#list1 a").css('color','white');
//         } else {
//             $("#list1").css('background-color', 'transparent');
//   $("#list1 a").css('color','#494846');
//         }
//     });
// $(window).scroll(function() { 
//         if($(this).scrollTop() > 1790) {
//             $("#list1").css('background-color', 'transparent');
//   $("#list1 a").css('color','#494846');
//         } 
//     });

//포트폴리오1 스크롤
//     $(window).scroll(function() { 
//         if($(this).scrollTop() > 1800) {
//             $("#list2").css('background-color', '#beb1e7');
//   $("#list2 a").css('color','white');
//         } else {
//             $("#list2").css('background-color', 'transparent');
//   $("#list2 a").css('color','#494846');
//         }
//     });
// $(window).scroll(function() { 
//         if($(this).scrollTop() > 3700) {
//             $("#list2").css('background-color', 'transparent');
//   $("#list2 a").css('color','#494846');
//         } 
//     });

//contact scroll
// $(window).scroll(function() { 
//   if($(this).scrollTop() > 3800) {
//       $("#list4").css('background-color', '#8465e6');
// $("#list4 a").css('color','white');
//   } else {
//       $("#list4").css('background-color', 'transparent');
// $("#list4 a").css('color','#494846');
//   }
// });
// $(window).scroll(function() { 
//   if($(this).scrollTop() > 4600) {
//       $("#list4").css('background-color', 'transparent');
// $("#list4 a").css('color','#494846');
//   } 
// });

})(jQuery);