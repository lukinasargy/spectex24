$(document).ready(function() {
	$('li').on('click', function(){
		// alert( $(this).text() );
	});
	$("#callme").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	$( "#date" ).datepicker({
  dateFormat: "dd-mm-yy"
});
});
