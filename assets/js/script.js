/* 
--------------------------------------------------------------------
Template Name: 	    AMERICA'S BEST CHOICE | Home improvement company website
Version:            1.00
Author:             Zahid Hasan Munna | Developer Zahid
Author Occupation: 	Frontend Web Design & Developer
Author Whatsapp:    https://wa.me/8801992409030
Author Linkedin:    https://www.linkedin.com/in/zahid-hasan-munna/
Author Facebook:    https://www.facebook.com/coderexpertzahid/
Author Website:     https://developer-zahid-portfolio.netlify.app/
Author Email: 	    dgtaltechzahidhasan@gmail.com
---------------------------------------------------------------------
*/

(function ($) {
    "use strict"

	/* Preloader init */
	function preLoader(){
		if($(".preloader").length > 0){
			$(".preloader").delay(300).fadeOut("slow");
		}
	}

	/* Fix Header Height function */
    function headerHeightFixer(){
    	$('.header-height-fix').css('height', $('header').innerHeight() +'px');
    	$('html').css('--header-size', $('header').innerHeight() +'px');
	};

    function calculateVerticalHeight() {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}

	/* Window on load Event */
	$(window).on('load', function () {
        preLoader();
    });

	/* Window on resize Event */
	$(window).on('resize', function () {
		headerHeightFixer();
		calculateVerticalHeight();
    });
	
	/* Document on ready Event */
	$(document).ready(function () {
		$('header').before('<div class="header-height-fix"></div>');
		headerHeightFixer();

		calculateVerticalHeight();

		/* scroll top btn function */
		$(".scroll-top").on("click", function () {
			$("html,body").animate({scrollTop: 0},50);
		});

		/* Load youtube iframe after an event function */
		if($('[data-iframe-src]').length > 0){
			$('[data-iframe-src]').on('click', function(){
				$(this).closest('.video__figure').html(`<iframe src="${$(this).data('iframe-src')}${($(this).data('iframe-src').indexOf('?') > -1) ? '&': '?'}autoplay=1&enablejsapi=1&controls=1&autopause=0&muted=1" class="embed-responsive-item" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen frameborder="0" loading="lazy"></iframe>`)
			})
		}

		/* Load slick slider if exist in DOM function */
		if($(".testimonial__slider").length > 0){
			$(".testimonial__slider").slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 500,
				arrows: false,
				dots: true,
				pauseOnHover: false,
				pauseOnFocus: false,
				infinite: true,
				centerMode: true,
  				centerPadding: '0px',
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 2,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							centerMode: false,
						}
					},
				]
			});
		}

	});

	/* Window on scroll Event */
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".header").addClass('fixed');
			$(".scroll-top").slideDown();
		} else {
			$(".header").removeClass('fixed');
			$(".scroll-top").slideUp();
		}
	});

})(jQuery);