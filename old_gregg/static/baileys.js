//Animations for the Bailey's drink

$(document).ready(function() {
            $('h1').hide().fadeIn(5000);
        });

var clicked = 0;

 $('#shoePic').click(function() {
    switch(clicked) {
        case 0:
         	$("#baileys").animate({top: "7em"}, 1000);
            clicked++;
            break;
        case 1:
            $("#baileys").animate({top: "14em"}, 1000);
            clicked++;
            break;
        case 2:
            $("#baileys").animate({top: "21em"}, 1000);
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