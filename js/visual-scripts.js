$(document).ready(function () {
	$('a[href*="#"]').on('click', function (e) {
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

	// Google Analytics tracking script.
	(function (i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
			(i[r].q = i[r].q || []).push(arguments)
		}, i[r].l = 1 * new Date(); a = s.createElement(o),
			m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
	})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

	ga('create', 'UA-48473222-2', 'auto');
	ga('send', 'pageview');

});