$(document).ready(function() {
	$("#inputT").val('');
	$("#inputT").keypress(function(e) {
		if (e.keyCode == 13 && $("#inputT").val().trim() != '') {
			$('#listT').prepend('<li class="listE">'+
				'<i class="fas fa-check-circle greenC"></i>'+
				'<span class="itemsL">'+$("#inputT").val()+'   '+'</span>'+
				'<i class="fad fa-trash-alt removeI"></i></li>');
			$("#inputT").val('');
			$('#mensajeNada').addClass('displayNone');
		}
	});

	$('#listT').on('click','.removeI',function(e){
		$(this).parent().remove();
		displayEmptyMessage();
	});

	$('#listT').on('click','.itemsL',function(e){
		$(this).toggleClass('subrayado');
	});

	$('#listT').on('click','.greenC',function(e){
		$(this).toggleClass('greenCB');
	});

	$('#checkA').on('click',function(e){
		$('.greenC').addClass('greenCB');
	});

	$('#deleteA').on('click',function(e){
		$('.greenCB').parent().remove();
		displayEmptyMessage();
	});

	$('#subrayar').on('click',function(e){
		$('.itemsL').parent().addClass('subrayado');
	});

	$('#checkAR').on('click',function(e){
		$('.greenC').removeClass('greenCB');
	});

	// $('#destachar').on('click',function(e){
	// 	$('.itemsL').removeClass('subrayado');
	// });

	$('#showAll').on('click',function(e){
		$('.itemsL').parent().removeClass('displayNone');
		displayEmptyMessage();
	});

	$('#showChecks').click(function(e){
		filterElement('.greenCB');
	});

	$('#showStrikes').click(function(e){
		filterElement('.subrayado');
	});

	$('#hideContainer').click(function(e){
		slideContent();
	});

	$('#showContainer').click(function(e){
		slideContent();
	});

	function displayEmptyMessage() {
		if ($('.listE').length == 0) {
			$('#mensajeNada').removeClass('displayNone');
		} else {
			$('#mensajeNada').addClass('displayNone');
		}
	}

	function slideContent() {
		$('.lista').slideToggle();
		$('#hideContainer, #showContainer').toggleClass('displayNone');
	}

	function filterElement(className) {
		displayEmptyMessage();
		let existenElementos = false;
		$('.listE').removeClass('displayNone');
		$('.listE').each(function(elementIndex) {
			if ($(this).find(className).length == 0) {
				$(this).addClass('displayNone');
			} else {
				existenElementos = true;
			}
		});
		if(existenElementos == false) {
			$('#mensajeNada').removeClass('displayNone');
		}
	}


	// if ($(this).child() != 'greenCB') {
	// 		$(this).parent().addClass('displayNone');
	// 		} else {
	// 			$(this).parent().removeClass('displayNone');
	// 		}

		// $('#boton1').on('click',function(e){
	// 	$('#boton2').toggleClass('colorRojo');
	// });

	// $('#boton2').on('click',function(e){
	// 	$('#boton1').toggleClass('colorAzul');
	// });

	// $('.ejemplo').click(function(e){
	// 	$('.ejemplo').toggleClass('colorAzul');
	// });

});