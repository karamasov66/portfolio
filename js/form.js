$(function(){

		var $inputs = $('.field-input');


//Add classes to the form inputss and textarea when focused and blurred

	$inputs.focus(function(){


		$parent = $(this).parent();

		if ($parent.hasClass('textarea') == false) {

		$parent.addClass('is-focused has-label');

		} else 

		{
			$parent.addClass('textarea-is-focused textarea-has-label');
		}

	})

	$inputs.blur(function(){

		$parent = $(this).parent();

		if($(this).val() == '' && $parent.hasClass('textarea')) 
		{
			$parent.removeClass('textarea-has-label');		
		} else if ($(this).val() == '' && !$parent.hasClass('textarea'))
			{
				$parent.removeClass('has-label');
			}

		$(this).parent().removeClass('textarea-is-focused is-focused');

		submitBorders(0);

	})

//Add borders when form submitted

	function submitBorders(scale) {

		$('.submit #border-top').css('transform', 'scaleX(' + scale + ')');
		$('.submit #border-right').css('transform', 'scaleY(' + scale + ')');
		$('.submit #border-bottom').css('transform', 'scaleX(' + scale + ')');
		$('.submit #border-left').css('transform', 'scaleY(' + scale + ')');
	}

	$('#submit-contact-form').click(function(e){

		submitBorders(1);

	})

	//Add class .has-label if necessary after the form is submitted

	for(var i=0 ; i<$inputs.length ; i++){

		var $input = $($inputs[i])

		if($input.val() !== '' && !$input.parent().hasClass('textarea')) {
			$input.parent().addClass('has-label');
		} else if($input.val() !== '' && $input.parent().hasClass('textarea')) {
			$input.parent().addClass('textarea-has-label');
		}

	}
	
})