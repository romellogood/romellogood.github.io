$(document).ready(function () {
	function schemeCycle() {
		var now = new Date();
		var hue = 359 * (now.getSeconds()/60);
		var articles = document.getElementsByTagName("article");
		var colors = Please.make_scheme(
		{
			h: hue,
			s: .7,
			v: .7
		},
		{
			scheme_type: 'analogous',
			format: "hex"
		});
		for (var i = 0; i < articles.length; i++) {
	  		jQuery(articles[i]).animate({'backgroundColor': colors[i]}, 2000);
		}
	  $('nav h1').animate({'color': colors[0]}, 2000);
	  $('nav a').animate({'color': colors[3]}, 2000);
	  jQuery('hr').animate({'borderTopColor': colors[5]}, 2000);
	}
	schemeCycle();
	window.setInterval(schemeCycle, 3000);
});