function calcAge() {
	var inputYear = $("#yearInput").val();
	var age = 2017 - inputYear;
	$("#yearResult").text("Result: " + age);
}

$(document).ready(function() {
	$("#button1").click(function(){
		$(this).next().slideToggle("fast");
	});
	$("#yearButton").click(calcAge);
});