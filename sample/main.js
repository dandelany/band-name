var _ = require('underscore');
var $ = require('jquery');

var bandName = require('band-name');

window.bandName = bandName;
window.$ = $;

$('.generate-band-name').click(function(e) {
	e.preventDefault();

	var genre = $("input:radio[name=genre]:checked").val();
	var name = bandName.generate(genre);

	console.log(genre);

	$('.band-name').text(name);
	$('.header-genre').text(genre);
	$('.band-name-header').show();


	return false;
});