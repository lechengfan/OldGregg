//Animations for the Bailey's drink

var clicked = 0;

$(document).ready(function() {
	$("#info").fadeIn("slow");
});

$("#shoe").onClick(function() {
	$("#info").fadeIn("slow");
	switch(clicked) {
		case 0:
			$("#baileys").animate({margin-top: "17em"}, 500);
			clicked++;
			break;
		case 1;
			$("#baileys").animate({margin-top: "24em"}, 500);
			clicked++;
			break;
		case 2;
			$("#baileys").animate({margin-top: "30em"}, 500);
			clicked++;
			break;
	}
});

$("button").onClick(function() {
	$("#baileys").animate({margin-top: "10em"}, 2000);
	clicked = 0;
});
