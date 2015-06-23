$(document).ready(function() {
	$('#arrow').hover(function () {
		$(this).animate({marginTop: '+=10px'}, 200);
	}, function() {
		$(this).animate({marginTop: '-=10px'}, 200);
	});
});

$(document).ready(function() {
    $("#header").addClass("header"); 
});

$(document).ready(function() {
	$('#arrow').click(function() {
		$('html, body').animate({scrollTop: $('#about').offset().top}, 1000);
	});
});

$(document).ready(function() {
	$('.footer-title').click(function() {
		$('html, body').animate({scrollTop: $('#header').offset().top}, 1000);
	});
});

$(document).ready(function() {
	$('#menu-link').click(function() {
		$('html, body').animate({scrollTop: $('#menu').offset().top}, 1000);
	});
});

$(document).ready(function() {
	$('.menu-cell').hover(function() {
		$(this).children().eq(0).animate({opacity: '0.0'}, 500);
		$(this).children().eq(1).fadeOut('fast');
	}, function() {
		$(this).children().eq(0).animate({opacity: '0.7'}, 20);
		$(this).children().eq(1).fadeIn('fast');
	});
});

$(document).ready(function() {
	$('.frame a img').hover(function() {
		$(this).animate({opacity: '0.0'}, 500);
	}, function() {
		$(this).animate({opacity: '0.7'}, 20);
	});
});

$(document).ready(function() {
	$('.collage div img').hover(function() {
		$(this).animate({opacity: '0.0'}, 500);
	}, function() {
		$(this).animate({opacity: '0.8'}, 20);
	});
});

$(document).ready(function() {
	$('.passport').hover(function() {
		$(this).animate({opacity: '1.0'}, 200);
	}, function() {
		$(this).animate({opacity: '0.7'}, 50);
	});
});

$(document).ready(function() {
	$('.play-picture').hover(function() {
		$(this).animate({opacity: '1.0'}, 200);
	}, function() {
		$(this).animate({opacity: '0.7'}, 50);
	});
});

$(document).ready(function() {
	$('.passport').hover(function() {
		$(this).css({"transform": "rotate(-7deg)"});
	}, function() {
		$(this).css({"transform" : "rotate(0deg)"});
	});
});

$(document).ready(function() {
	$('.dp img').hover(function() {
		$(this).animate({opacity: '1.0'}, 200);
	}, function() {
		$(this).animate({opacity: '0.7'}, 50);
	});
});

$(document).ready(function() {
	$('#dialog').dialog({
	autoOpen: false,
	//height: 280,
	modal: true,
	resizable: false,
	draggable: false
	});
});



$(document).ready(function (){
	$('#upcoming').click(function() {
		$('#dialog').dialog('open');
	});
});



