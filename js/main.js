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
	let hederHeight = header.height(); 
	 
	$(window).scroll(function() {
	  if($(this).scrollTop() > 1) {
	   header.addClass('header_fixed');
	   $('main').css({
		'paddingTop': hederHeight+'px' 
	 });
	} else {
	 header.removeClass('header_fixed');
	 $('main').css({
	  'paddingTop': 0 
	 })
	  }
	});

    $('.menu-burger__header').click(function() {
		$('.menu-burger__header').toggleClass('open-menu');
		$('.header_menu').toggleClass('open-menu');
		$('body').toggleClass('fixed-page');
	});
	


});

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.header_menu_arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

