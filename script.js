var inputPosition;
var scrollPosition = 0;
var finalPosition;
var halfHeight = $( window ).height() / 2;
$('.content').css({'padding-top': halfHeight, 'padding-bottom': halfHeight});

$(function() {
	function updateText(event){
	  var input=$(this);
	  setTimeout(function(){
	    var val=input.val();
	    if(val!="")
	      input.parent().addClass("float");
	    else
	      input.parent().removeClass("float");
	  },1)
	}
	$(".input-wrap input").keydown(updateText);
	$(".input-wrap input").change(updateText);
});

$('input').focus(function(){
	inputPosition = $(this).position().top;
	finalPosition = inputPosition - halfHeight + scrollPosition; // OMFG
	$('.viewport').animate({ scrollTop: finalPosition }, 100);
});

$('.viewport').scroll(function() {
	scrollPosition = $('.viewport').scrollTop();
});

$('button').click(function(){
	$('.viewport').show();
	$('body').addClass('modalOpen');
	$('input').first().focus();
});

$('a.close').click(function(e){
	e.preventDefault();
	$('.viewport').hide();
	$('body').removeClass('modalOpen');
});