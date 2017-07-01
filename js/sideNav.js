
/**********scrollspy and sections animations************/
$(function(){


	function hash(h){

		if(history.pushState){
			history.pushState(null, null, h)
		} else {
		  window.location.hash = h 
		};

	}

	var sections = [];
	var id;
	var $sideNav = $('#sideNav');
	var $sideNavA = $('a', $sideNav);


	$sideNavA.click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		} , 'slow');

		hash($(this).attr('href'));
	})


	$sideNavA.each(function(){

		//Recupération des div correspondants aux href des liens
		//repasser le tout dan un selecteur jquery permet de selectionner les div correspondant aux liens et pas seulement l attribut
		sections.push($($(this).attr('href')));


	});

	$(window).scroll(function(e){

		var $scrollTop = $(this).scrollTop() + ($(window).height() / 2);

		for(var i in sections){

			var section = sections[i];


			if($scrollTop > section.offset().top) {

				scrolled_Id = section.attr('id');

			} 
		}

		if (scrolled_Id !== id) {
		id = scrolled_Id
		$sideNavA.removeClass('active');
	 	$('a[href="#' + id + '"]', $sideNav).addClass('active');
	    }

	    //#services animation
	    if(scrolled_Id == 'services'){
	    		$('#services section div').addClass('animated fadeInLeft');
	    		//max animation-delay = 600ms animation-duration = 1s
	    		window.setTimeout("$('#services section div').css('opacity', '1')", 800)
	    	}

	    //#skills animation
	    if(scrolled_Id == 'skills'){
	    		$('#skills figure').addClass('animated fadeInLeft');
	    		//max animation-delay = 600ms animation-duration = 1s
	    		window.setTimeout("$('#skills figure').css('opacity', '1')", 800)
	    	}

	})

})