$(document).ready(function(){
		$('a[href*="#"]').on('click',function (e) {
			    e.preventDefault();

			    var target = this.hash;
			    var $target = $(target);

			    $('html, body').stop().animate({
			        'scrollTop': $target.offset().top - 100

			    }, 900, 'swing', function () {
			        window.location.hash = target;
			    });
			});

		/* This code closes the collapsed menu when the user clicks on a link*/
		$('.navbar-collapse').click('li', function() {
		    $('.navbar-collapse').collapse('hide');
		});

		// This code shows opened the first project on the project's list
		$(".panel-collapse:first").toggleClass("in");
	
});