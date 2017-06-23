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
	elem.stop();
	elem.animate({
		left: "630px", 
		fontSize: "3em"
	});
}

function animateImgReturn() {
	var elem = $("#animatedImg");
	elem.stop();
	elem.animate({
		left: "330px", 
		fontSize: "1em"
	});
}

/* if menu icon or option is hovered over, will expand menu option and make visible */
function menuExpand() {
	var item = $(this).find(".menuExpand");
	item.stop();
	item.animate({
		width: "480px",
		opacity: "1"
	}, 500);
}

function menuExpandReturn() {
	var item = $(this).find(".menuExpand");
	item.stop();
	item.animate({
		width: "0px",
		opacity: "0"
	}, 500);
}

/* generate random numbers for lottery */
function randomLottoGen() {
	/* generate 5 random numbers between 1 and 69 */
	var numbers = new Array();
	for (i = 0; i < 5; i++) {
		var rawNum = Math.random() * 68;
		var num = Math.floor(rawNum) + 1;
		numbers.push(num);
	}
	/* generate 1 powerball number between 1 and 26 */
	var rawPowerNum = Math.random() * 25;
	var powerNum = Math.floor(rawPowerNum) + 1;
	$("#lottoResult").html("Numbers: " + numbers + "<br>Powerball: " + powerNum);
}

/* make the flag draggable within a container, snaps to the box */
function dragTheFlag() {
	$("#dragFlag").draggable({
		containment: $("#divDragFlag"),
		opacity: 0.5,
		snap: "#divDragFlag",
	});
}

/* drag and drop an icon into a box, change box color */
function dragAndDrop() {
	$("#dropIcon").draggable();
	$(".dropDiv").droppable({
		//tolerance: 'touch',
		accept: "#dropIcon",
		hoverClass: "dropDivHover",
        drop: function(event, ui) {
			$(this).addClass("dropDivDropped");
		},
		out: function(event, ui) {
			$(this).removeClass("dropDivDropped");
			$(this).addClass("dropDiv");
		}
	});
}

/* create gets section titles and creates html string
function getSectionTitles() {
	var tocHtml = "";
	$(".titleSection").each(function() {
		tocHtml += ($(this).text() + "<br>");
	});
	$("#TOC").html(tocHtml); //need to add div with id="TOC" to html to use
}
*/

$(document).ready(function() {
	$("#button1").click(function(){
		$(this).next().slideToggle("fast");
	});
	$("#ageButton").click(calcAge);
	$("#animateButton").hover(animateImg, animateImgReturn);
	$(".menuOption").hover(menuExpand, menuExpandReturn);
	$("#lottoButton").click(randomLottoGen);
	dragTheFlag();
	dragAndDrop();
});