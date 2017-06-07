var inputPosition;
var scrollPosition = 0;
var finalPosition;
var halfHeight = $( window ).height() / 2;
$('.content').css({'padding-top': halfHeight, 'padding-bottom': halfHeight});

$(function() {
	$(".input-wrap input").keydown(updateText);
	$(".input-wrap input").change(updateText);
});

function updateText(event){
	var input = $(this);
	setTimeout(function(){
		var val = input.val();
		if(val !== "") {
			input.parent().addClass("float");
		} else {
			input.parent().removeClass("float");
		}
	}, 1);
}

$('input').focus(function(){
	inputPosition = $(this).closest('.input-wrap').position().top;
	finalPosition = inputPosition - halfHeight + scrollPosition;
	$('.modal').animate({ scrollTop: finalPosition }, 100);
});

$('.modal').scroll(function() {
	scrollPosition = $('.modal').scrollTop();
});

$('button, a.close').click(function(e){
	e.preventDefault();
	$('.modal').toggle();
	$('body').toggleClass('modalOpen');
	$('input').first().focus();
});