function parallax(){

	var $background = $('.parallax');
	var $headerHeight = $('header').height();

	$background.css('top', -(window.pageYOffset /1.5 -$headerHeight) +'px');
}

$(function(){
	$(window).on('scroll', parallax)
})
