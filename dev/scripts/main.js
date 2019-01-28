(function($){
	'use strict';
	var $window = $(window);

	$(".menu__mobile__icon").on('click', function(){//expend the menu list
        $('.menu__link__container').toggleClass('menu__link__container--mobile-active');
        $('.menu').toggleClass('menu--bg-active');
	});

})(jQuery);








