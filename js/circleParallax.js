function parallax(){

	var prlx_layer_1 = document.getElementById('prlx_layer_1');
	prlx_layer_1.style.top = - (window.pageYOffset /20) +'px';
}

$(window).on('scroll', parallax);

