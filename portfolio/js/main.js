//check if item is in view
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).position().top;
    var elemBottom = elemTop + $(elem).height();
    //console.log("View Top: " + docViewTop + "   Elem Top: " + elemTop + "\nView Bottom: " + docViewBottom + "   Elem Bottom: " + elemBottom);
    return (elemBottom <= docViewBottom);
}
//fade in and out boxes
function displayBox() {
	if(isScrolledIntoView($('.box'))) 
		$('.fade-caption').fadeIn("slow");
    else  
    	$('.fade-caption').fadeOut("slow");
}

$(document).ready(function() {
	$(window).scroll( function() {
		displayBox();
    	//nav bar changes
    	if($('nav').height() < $(window).scrollTop()) 
    		$('nav').addClass('fixed');
    	else
    		$('nav').removeClass('fixed');
	});
	//check boxes
	displayBox();
	//fix margin problem caused by fixed nav
	$('article').css('marginTop',$('nav').height() + 30);
	//scroll to contact
	$(".button").click(function() {
   		$('body').animate({ scrollTop: $('#footer').offset().top, }, 1500);
	});
	//scroll to top
	$("nav img").click(function() { 
		$('body').animate({ scrollTop: 0 }, 1250);
	});
});