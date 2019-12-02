$(document).ready(function () {
	$('a[href*="#"]').on('click', function(e) {
		e.preventDefault();

		const target = this.hash;
		const $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 100

		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});


	/* This code closes the collapsed menu when the user clicks on a link*/
	$('.navbar-collapse').click('li', function () {
		$('.navbar-collapse').collapse('hide');
	});

});