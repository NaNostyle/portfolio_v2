/* 

Carte intéractive, Joyeux Anniversaire.

Processus de lancement.
Cliquer sur le bouton "Your Special Day" cela aura pour effet
afficher un second bouton. Cliquer sur le nouveau bouton cela affichera
le troisième bouton. Une fois les trois message afficher, les textes
des 4 boutons changerons, avec une image en arrière plan et un fond sonore.

*/

$(function(){

	$('li').hide()
	$('audio').hide()

	$('#titleCard').click(function() {
		$('li.red').show('slow/400/fast', function() {

		});	

	});

	$('li.red').click(function() {
		$('li.blue').show('slow/400/fast', function() {

		});	

	});

	$('li.blue').click(function() {
		$('li.green').show('slow/400/fast', function() {

		});	

	});	

	$('li.green').click(function() {
		$('.bcard').css('background-image','url("tenor.gif")')
		$('h1').html('Happy Birthday') 
		$('li').html('Happy Birthday')
		$('#sound').get(0).play()

	});
	
});