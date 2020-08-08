"use strict";

(function($) {
	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});
	
	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed') : $('#nav').removeClass('fixed');
	});


	$('.product__img').click(function () {
		$(this).parent().toggleClass('zoom-img');		
	});
	
    ///////////////////////////
    // Btn nav collapse
    $("#nav .navbar__collapse").click(function () {
        $("#nav").toggleClass("open");
    });

    ///////////////////////////
    // Mmen basket
    Mmenu.configs.offCanvas.page.selector = "#page";

	document.addEventListener(
		"DOMContentLoaded", () => {
			const menu = new Mmenu( "#shop-basket", {
				"offCanvas": true,
				"extensions": ["position-right"],
				"navbar": {
					title: 'Ваш заказ'
				},
			});
		}
	);

	///////////////////////////
	// home slider
	$('#home-slider').slick({
		arrows: false,
		dots: true,
    	dotsClass: "dots dots-b"
	});
	///////////////////////////
	// Slick Slider
	$("#slider-reviews").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		// prevArrow:
		// 	'<button class="btn-arrow btn-arrow-prev"><i class="fa fa-angle-left"></i></button>',
		// nextArrow:
		// 	'<button class="btn-arrow btn-arrow-next"><i class="fa fa-angle-right"></i></button>',
		dots: true,
		dotsClass: "dots dots-offset",
		responsive: [
			{
			breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
			breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1,
					autoplay: true,
					autoplaySpeed: 3000,
				},
			},
		],
	});
	///////////////////////////
	// tabs
	$('#tabsmenu-tabs').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion
		width: 'auto', //auto or any width like 600px
		fit: true, // 100% fit in a container
		closed: 'accordion', // Start closed if in accordion view
		tabidentify: 'hor_1', // The tab groups identifier
		active_border_color: '#d6d6d6',
		// activetab_bg: '#fff',
		inactive_bg: '#fff'
	});
})(jQuery);