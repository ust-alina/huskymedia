$(document).ready(function(){

    $('.slider').slick({
        dots: false,
        slidesToShow: 3,
        speed: 1000,
        responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow:2
				}
			},	
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1,
					arrows : false,
					autoplay: true,
                    autoplaySpeed: 2000
				}
			}
		]
        
	});

	$('.slider2').slick({
        dots: false,
        slidesToShow: 4,
		speed: 1000,
		slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow:3
				}
			},	
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1,
					arrows : false
				}
			}
		]
        
	});

	


});


   $(function() {
	let header = $('.header');
	let hederHeight = header.height(); // вычисляем высоту шапки
	 
	$(window).scroll(function() {
	  if($(this).scrollTop() > 1) {
	   header.addClass('header_fixed');
	   $('main').css({
		'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
	 });
	} else {
	 header.removeClass('header_fixed');
	 $('main').css({
	  'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
	 })
	  }
	});

    $('.menu-burger__header').click(function() {
		$('.menu-burger__header').toggleClass('open-menu');
		$('.header_menu').toggleClass('open-menu');
		$('body').toggleClass('fixed-page');
    });

});

