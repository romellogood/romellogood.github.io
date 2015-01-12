var slick, map;
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
	$('footer div').on({
    'click': function() { $('html,body').animate({ scrollTop: 0 }, 500); },
    'mouseover': function() { $(this).css('color','darkgrey'); },
    'mouseout': function() { $(this).css('color','black'); },
  });
  drawMap();
	$('button').remove();
});
function drawMap() {
	map = new Datamap({
		element: document.getElementById('map'),
		scope: 'usa',
		fills: { defaultFill: 'darkgrey' },
		responsive: true,
		geographyConfig: { highlightOnHover: false, popupOnHover: false },
		done: function(datamap) {
			datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
				loadState( eval('usa.' +geography.properties.name.split(' ').join('') ) );
			});
		}
  });
}
function loadState(state) {
	$('#info').html('<a href="#" id="return-map" onclick="clearState()">&#8592; Go back to the Map.</a><br><div \
		class="col-md-7"><img src=img/' +state.img+ ' class="img-responsive" alt=' +state.name+ ' License Plate"></div> <div \
		class="col-md-5"><a href="' +state.link+ '" target="_blank"><p class="artist"> ' +state.artist+ '</p></a> \
		<p class="state-name">' +state.name+ '</p><p class="state-info">' +state.info+ '</p></div>');
	slick.slickGoTo(1);
}
function clearState() {
	$('#info').html('<a href="#" id="return-map" onclick="clearState()">&#8592; Go back to the Map.</a><br><br><p \
		class="artist" style="text-align: center;">GO BACK &amp; PICK A STATE.</p>');
	slick.slickGoTo(0);
}