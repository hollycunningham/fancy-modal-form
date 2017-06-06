var inputPosition;
var scrollPosition = 0;
var finalPosition;
var halfHeight = $( window ).height() / 2;
$('.content').css({'padding-top': halfHeight, 'padding-bottom': halfHeight});

$(function() {
	$('input').first().focus();
});

$('input').focus(function(){
	$('.onPoint').removeClass('onPoint');
	$(this).addClass('onPoint');

	inputPosition = $(this).position().top;
	finalPosition = inputPosition - halfHeight + scrollPosition; // OMFG
	$('.viewport').animate({ scrollTop: finalPosition }, 100);
});

$('.viewport').scroll(function() {
	scrollPosition = $('.viewport').scrollTop();
});