//Animations for the Bailey's drink
var clicked = 0;
var gulp = document.getElementById("gulp");
var fill = document.getElementById("fill");

$(document).ready(function() {
    $('h1').hide().fadeIn(5000);
    gulp.load();
    fill.load();
});

var drink = function() {
    gulp.play();
}

var refill = function() {
    fill.play();
}

 $('#shoePic').click(function() {
    switch(clicked) {
        case 0:
            $("#baileys").animate({top: "12em"}, 1000);
            clicked++;
            break;
        case 1:
            $("#baileys").animate({top: "24em"}, 1000);
            clicked++;
            break;
        case 2:
            $("#baileys").animate({top: "33em"}, 1000);
            clicked++;
            break;
        default: 
            $("#baileys").animate({top: "0em"}, 1000);
             clicked = 0;
    }
});

$('button').click(function() {
   	$("#baileys").animate({top: "0em"}, 1000);
    clicked = 0;
});

