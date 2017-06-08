/* takes input year born and calculates current age */
function calcAge() {
	var inputYear = $("#yearInput").val();
	//check if numbers were input
	if (inputYear == "" || isNaN(inputYear)) {
		$("#ageResult").text("Result: Please enter a number.");
		return;
	}
	//check for whole number
	else if ((inputYear % 1 != 0)) {
		$("#ageResult").text("Result: Please enter a whole number.");
		return;
	}
	var age = new Date().getFullYear() - inputYear;
	$("#ageResult").text("Result: " + age + " years old");
}

/* if button is clicked, moves img or text back and forth */
/* loop for back and forth movement, needs break method
function animateImg() {
	var elem = document.getElementById("animatedImg"); 
	var pos = 0;
	var id = setInterval(frameForward, 1);
	function frameForward() {
		if (pos == 300) {
			clearInterval(id);
			var id = setInterval(frameBack, 1);
		} 
		else {
			pos++; 
			elem.style.left = pos + 'px'; 
		}
	}
	function frameBack() {
		if (pos == 0) {
			clearInterval(id);
			var id = setInterval(frameForward, 1);
		} 
		else {
			pos--; 
			elem.style.left = pos - 'px'; 
		}
	}
}
*/

/* if button is clicked, moves text around and changes size */
function animateImg() {
	var elem = $("#animatedImg");
	elem.animate({left: "600px", fontSize: "3em"}, 1000);
}

function animateImgReturn() {
	var elem = $("#animatedImg");
	elem.animate({left: "300px", fontSize: "1em"}, 1000);
}

$(document).ready(function() {
	$("#button1").click(function(){
		$(this).next().slideToggle("fast");
	});
	$("#ageButton").click(calcAge);
	$("#animateButton").hover(animateImg, animateImgReturn);
});