jQuery(document).ready(function($) {

$('.homeslider').cycle({
	slides : "article",
	next : "#next",
	prev : "#prev"
});

var windowHeight, windowscrollTop, footerOffset, i, j, step;

i = 6;
j = 6;
step = 1;

$(window).bind('scroll',function(f){
	windowHeight = $(window).height();
	windowscrollTop = $(window).scrollTop() + windowHeight;
	footerOffset = $('.footer_main').offset().top;
	console.log('footerOffset '+footerOffset);
	console.log('i '+i);

	if (windowscrollTop > footerOffset && step == 1) {
		step = 0;
		$('#loading').fadeIn(0);
		$('#loading').delay(1600).fadeOut(300);
		$('#wall article:lt('+i+')').delay(1900).fadeIn(600);
		step = 1;
		i = i+j;
	}

});



   
});
