//When I click the button, I want the imgage to hide
$('#hide').click(function() {
	$('img').hide();
});

//When I click the button, I want the imgage to show
$('#show').click(function() {
	$('img').show();
});

//When I click the toggle button, I want the image to hide OR show
$('#toggleImg').click(function() {
	$('img').toggle();
});

$('#fade').click(function() {
	$('img').toggleClass('fade');
	   if( $("img").css("opacity") == '0') {
        $("#textChange").text("fade on");
      } else {
        $("#textChange").text("fade off");
      }
});

$('img').hover(function() {
	$('img').attr('src', 'img/inspirational1.jpg');
},
function() {
    $("img").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGApRKgdy-n7kGBBt_FncCTq1AzJUShnFXqX4bFrF7V3JRLKJc-Q");
});

$('#newLi').click(function() {
	$('#list').append('<li> :-) </li>');
	$("li").hover(function() {
        $(this).css({"font-size" : "40px", "color": "tomato"})
    }, function() {
        $(this).css({"font-size" : "initial", "color": "initial"})
    })
});

$("#final").click(function() {
    $("body").append("<div id='overlay'></div>");
});

