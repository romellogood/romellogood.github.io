var slick,
	loadCount = 0;
$(document).ready(function () {
	slick = $('.carousel');
	slick.slick({
	  speed: 250,
	  fade: true,
	  slide: 'article',
	  cssEase: 'linear',
	  draggable: 'false',
	  infinite: 'true',
	  onAfterChange: function() {
	  	if(slick.slickCurrentSlide() == 0) clearState();
	  }
	});
	$(window).on("click", function(e) {
		target = $(e.target).context.alt;
		if(target != undefined) {
			state = usa[target];
			loadState(state);
		}
	});
	$('footer div').on({
    'click': function() { $('html,body').animate({ scrollTop: 0 }, 500); },
    'mouseover': function() { $(this).css('color','darkgrey'); },
    'mouseout': function() { $(this).css('color','black'); },
  });
	$('.carousel button').remove();
	loadPlates(12);
});
function loadPlates(amount) {
	for(var i = loadCount; i < loadCount+amount && i < 50; i++) {
		state = usa[stateNames[i]];
		$('#all').append('<div class="col-sm-4 col-md-3"><img src=img/plates/' +state.imgSmall+ ' \
			class="img-responsive state" alt="' +state.name+ '"></div>');
	}
	loadCount = i;
	buttonCheck();
}
function buttonCheck() {
	if(loadCount == 50) {
 		$('#load-button').hide();
	} else {
		$('#load-button').show();
	}
}
function loadState(state) {
	$('#single').html('<a href="#" id="return-map" onclick="clearState()">&#8592; Back</a><br><div \
		class="col-md-7"><img src=img/plates/' +state.imgLarge+ ' class="img-responsive" alt=' +state.name+ ' License Plate"></div> <div \
		class="col-md-5"><p class="artist"> ' +state.artist+ '</p><a href="' +state.link+ '" target="_blank"><img src="img/dribbble.png" class="dribbble"></a> \
		<p class="state-name">' +state.name+ '</p><p class="state-info">' +state.info+ '</p></div>');
	$('#load-button').hide();
	$('html,body').scrollTop(0);
	slick.slickGoTo(1);
}
function clearState() {
	$('#single').html('<a href="#" id="return-map" onclick="clearState()">&#8592; Back</a><br><br><p \
		class="artist" style="text-align: center;">GO BACK &amp; PICK A STATE.</p>');
	buttonCheck();
	slick.slickGoTo(0);
}