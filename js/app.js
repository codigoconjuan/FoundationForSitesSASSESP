function getHeight() {
	var height = $('header').height();
	$('#overlay').css({'height':height+'px'})
}


$(function() {
	window.setTimeout('getHeight()',100);
	
	$('#galeria .column img').wrap('<a data-open="modalGaleria">');
	
	$('#galeria a').on('click',function() {
		var imagen = $(this).find('img').attr('src');
		var imagenSeleccionada = imagen.split('thumbnail');
		var URLCompleta = imagenSeleccionada[0] + 'fullsize' + imagenSeleccionada[1];
		$('#imagenContenedor').attr('src', URLCompleta);
	});


});

$(window).resize(function() {
	getHeight();
});

$(document).foundation();
