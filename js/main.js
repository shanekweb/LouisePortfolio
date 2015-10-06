$(document).ready(function(){

	$('.icon-profile, .profile-arrow').click(function(){

		//$('#profile-header').toggleClass('opened');
		//$('.icon-profile-lower').toggleClass('lower-change');
		//$('.profile-arrow').toggleClass('change-arrow');
		//$('#profile-hidden').slideToggle(300).toggleClass('hidden');
	});

	$('.icon-resume, .resume-arrow').click(function(){
		$('.icon-resume-lower').toggleClass('lower-change');
		$('.resume-arrow').toggleClass('change-arrow');
		$('#resume-hidden').slideToggle(500).toggleClass('hidden');
		$('.make-white').toggleClass("white");
	});

	$('.icon-portfolio, .portfolio-arrow').click(function(){
		$('.icon-portfolio-lower').toggleClass('lower-change');
		$('.portfolio-arrow').toggleClass('change-arrow');
		$('#portfolio-hidden').slideToggle(500).toggleClass('hidden');
		$('.make-white2').toggleClass("white");
	});

	$('.icon-contacts, .contacts-arrow').click(function(){
		$('.icon-contacts-lower').toggleClass('lower-change');
		$('.contacts-arrow').toggleClass('change-arrow');
		$('#contacts-hidden').slideToggle(500).toggleClass('hidden');
		$('.make-white3').toggleClass("white");
	});



});

