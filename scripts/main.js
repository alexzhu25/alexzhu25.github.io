//hide the navbar when scrolling down, show when scrolling up
function hideNavBar() {
	var lastScrollTop = 0;
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		if (st > lastScrollTop){
			$("#navbar").fadeOut();
		} else {
			$("#navbar").fadeIn();
		}
		lastScrollTop = st;
	});
}

//scroll to top button functionality
function scrollToTop() {
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$("#scrollToTopButton").fadeIn();
		} else {
			$("#scrollToTopButton").fadeOut();
		}
	});
	
	$("#scrollToTopButton").click(function() {
		$("html, body").animate({scrollTop: 0}, 500);
		return false;
	});
}

$(document).ready(function() {
	$(".title1").hide();
	$(".title1").fadeIn(1000); //fade in the main title
	//scroll reveal selected items
	window.sr = ScrollReveal({ reset: true });
	sr.reveal(".scroll1");
	sr.reveal(".imgReveal");
	hideNavBar();
	scrollToTop();
});