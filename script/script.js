$(document).ready(function() {
	$('#topnav__burger').on('click', function() {
		$('#topnav__burger,.topnav__list').toggleClass('showMenu');
	}),
	$('#topArrow').on('click', function() {
		$('html,body').animate({
			scrollTop: 0
		}, 1000);
	}),
	$('#botArrow').on('click', function() {
		$('html,body').animate({
			scrollTop: 580
		}, 800);
	}),
	$('#Home').on('click', function() {
		$('html,body').animate({
			scrollTop: 0
		}, 800);
	}),
	$('#Port').on('click', function() {
		$('html,body').animate({
			scrollTop: 580
		}, 800);
	}),
	$('#About').on('click', function() {
		$('html,body').animate({
			scrollTop: 790
		}, 800);
	}),
	$('#Cont').on('click', function() {
		$('html,body').animate({
			scrollTop: 1400
		}, 800);
	});
});

$('.js-tab-trigger').on('click', function() {
	var tabName = $(this).data('tab'),
	tab = $('.js-tab-content[data-tab="'+tabName+'"]');

	$('.js-tab-trigger.active').removeClass('active');
	$(this).addClass('active');

	$('.js-tab-content.active').removeClass('active');
	tab.addClass('active');
});