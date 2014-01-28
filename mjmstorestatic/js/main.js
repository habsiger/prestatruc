jQuery(document).ready(function($) {

$('.homeslider').cycle({
	slides : "article",
	next : "#next",
	prev : "#prev"
});

var windowHeight, windowscrollTop, footerOffset;



$(window).bind('scroll',function(f){
	windowHeight = $(window).height();
	windowscrollTop = $(window).scrollTop() + windowHeight;
	footerOffset = $('.footer_main').offset().top;

	if (windowscrollTop > footerOffset) {
		$('#loading').delay(600).fadeOut(300);
		$('#wall').delay(900).fadeIn(600);
	};
});



   
});
