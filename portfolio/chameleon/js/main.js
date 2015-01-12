// Detect if the browser is IE or not.
var IE = document.all?true:false;

//  If NS that is, !IE then set up for mouse capture
if (!IE) document.captureEvents(Event.MOUSEMOVE);

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;




// var element = document.getElementById("myDIV")
// $(element).hammer().on("touch", function(e){
// x1 = e.clientX
// y1 = e.clientY

var tempX  = 0;
var tempY  = 0;
var width  = window.innerWidth  || document.documentElement.clientWidth  || document.body.clientWidth;
var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// Hammer js set up
var hammerEl = document.body;
var hammertime = new Hammer(hammerEl);	
hammertime.on('tap', function(ev) {
   	tempX = ev.center.x //gesture.pageX;
   	tempY = ev.center.y //gesture.pageY;
   	console.log(ev);
   	console.log(tempX);
	console.log(tempY);   
   	getMouseXY();
});


// CMYK
function rgbToCmyk(r,g,b) {
	var computedC = 0;
	var computedM = 0;
	var computedY = 0;
	var computedK = 0;

	// remove spaces from input RGB values, convert to int
	var r = parseInt( (''+r).replace(/\s/g,''),10 ); 
	var g = parseInt( (''+g).replace(/\s/g,''),10 ); 
	var b = parseInt( (''+b).replace(/\s/g,''),10 ); 

	// if ( r==null || g==null || b==null ||
	//     isNaN(r) || isNaN(g)|| isNaN(b) )
	// {
	//   alert ('Please enter numeric RGB values!');
	//   return;
	// }
	// if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) {
	//   alert ('RGB values must be in the range 0 to 255.');
	//   return;
	// }

	// BLACK
	if (r==0 && g==0 && b==0) {
	 computedK = 1;
	 return "cmyk(0%, 0%, 0%, 1%)";
	}

	computedC = 1 - (r/255);
	computedM = 1 - (g/255);
	computedY = 1 - (b/255);

	var minCMY = Math.min(computedC, 
	             Math.min(computedM,computedY));
	computedC = (computedC - minCMY) / (1 - minCMY) ;
	computedM = (computedM - minCMY) / (1 - minCMY) ;
	computedY = (computedY - minCMY) / (1 - minCMY) ;
	computedK = minCMY;

	return "cmyk(" + Math.round(computedC * 100) + "%, " + Math.round(computedM * 100) + "%, " 
		+ Math.round(computedY * 100) + "%, " + Math.round(computedK * 100) + "%)";
}

// HEX
function rgbToHex(red, green, blue) 
{
	var rgb = blue | (green << 8) | (red << 16);
	return 'hex(#' + (0x1000000 + rgb).toString(16).slice(1) + ")";
}

// Main function to retrieve mouse x/y pos
function getMouseXY(event) 
{
	if (IE) 
	{ 	// grab the x-y pos.s if browser is IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}

	else if(typeof event != "undefined") 
	{  	// grab the x-y pos.s if browser is NS
		// if(typeof event != "undefined")
		// {
		tempX = event.pageX;
		tempY = event.pageY;			
		// }
	}  
	// catch possible negative values in NS4
	if (tempX < 0) {tempX = 0;}
	if (tempY < 0) {tempY = 0;}
	
	var hue   = Math.round( (tempX / width) * 360 );
	var light = Math.round( tempY / height * 100 );
	var color = 'hsl(' + hue + ', 100% ,' + light + '% )';
	var text; 

	if(light > 55)	// Make Black
	{
		text = 'hsl(0, 0%, 0%)';
		document.getElementById("logo").style.backgroundImage = "url('./images/logo-black.png')";
	}
	if(light < 55)	// Make White
	{
		text = 'hsl(0, 0%, 100%)';
		document.getElementById("logo").style.backgroundImage = "url('./images/logo-white.png')";
	}

	var r = document.body.style.backgroundColor.substring( 4, document.body.style.backgroundColor.indexOf(',') );
	var g = document.body.style.backgroundColor.substring( document.body.style.backgroundColor.indexOf(',') + 1, 
		document.body.style.backgroundColor.lastIndexOf(',') );
	var b = document.body.style.backgroundColor.substring( document.body.style.backgroundColor.lastIndexOf(',') + 1, 
		document.body.style.backgroundColor.length - 1);

	// show the position values in the form named Show
	// document.Show.MouseX.value = tempX;
	// document.Show.MouseY.value = tempY;
	// document.Show.Height.value = height;
	// document.Show.Width.value = width;

	// Change background color
	document.body.style.backgroundColor = color;

	// Change the text color
	document.body.style.color = text;
	document.getElementById("by").style.color = text;
	
	// Write the values 
	document.getElementById("hsl").innerHTML  = color; 								// HSL
	document.getElementById("rgb").innerHTML  = document.body.style.backgroundColor;// RGB
	document.getElementById("cmyk").innerHTML = rgbToCmyk(r,g,b); 					// CMYK
	document.getElementById("hex").innerHTML  = rgbToHex(r,g,b); 					// HEX
}