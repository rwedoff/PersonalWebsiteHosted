// JavaScript Document
$(function() {
	 "use strict"; 
		$('.pop').on('click', function() {
	
			$('#myModal').modal('show');			
			$('.imagepreview').attr('src', $(this).attr('src'));
			$('#imagemodal').modal('show');
			$(this).addClass("image-width");
		});		
});