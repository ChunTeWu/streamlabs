(function($){
	'use strict';
	// toggle class when menu icon is clicked
	$(".menu__mobile__icon").on('click', function(){
		$('.menu__link__container').toggleClass('menu__link__container--mobile-active');
		if($('.menu').hasClass('menu--bg-active') && $window.scrollTop() > 100){
			return;
		}else{
			$('.menu').addClass('menu--bg-active');
		}

	});
	// add background when window scrolls down
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 100){
			$('.menu').addClass('menu--bg-active');
		}else{
			$('.menu').removeClass('menu--bg-active');
			
		}
	});


})(jQuery);








