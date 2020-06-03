$('button').click(function() {
	$('.first').fadeIn();
	$('button').remove();
});

$('.first').click(function() {
	$('.second').fadeIn();
});

$('.second').click(function() {
	$('#last').fadeIn();
});

$('#last').click(function() {
	$('body').css({
		'background-image': 'url("css/image2.png")',	
	});
	$(".first, .second, #last").text('Happy Birthday !');
	player = document.getElementById('song');
	player.play();
});


