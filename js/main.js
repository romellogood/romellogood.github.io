/* Generate the Hue, Saturation, & Value based on the time
 * Hue (0-360) Saturation (0.0-1.0) Value (0.0-1.0)
 */
function generateHSV () {
  var time = new Date();

  return {
    h: 360 * (time.getMinutes() / 59),
    s: time.getSeconds() / 59,
    v: .75
  };
}

/* Change the background color
 */
function changeBackgroundColor () {
  document.body.style.background = Please.make_color(generateHSV());
}

/* Generate schema colors and change the corresponding classes
 */
function changeSchemaColors () {
  var numberOfColoredClasses = 3;
  var colors = Please.make_scheme(
    generateHSV(),
    {
    	scheme_type: 'analogous',
    	format: 'hex'
    }
  );

  document.body.style.background = colors[0];

  for (var i = 0; i < numberOfColoredClasses; i++) {
    var className = 'color-' + parseInt(i+1, 10);

    if (document.getElementsByClassName(className).length > 0) {
      var elements = document.getElementsByClassName(className);

      for(element in elements) {
        if(typeof elements[element] === 'object') {
          elements[element].style.color = colors[i+1]
        }
      }
    }
  }
}

// Do the inital background change and start the interval
changeBackgroundColor();
setInterval(changeBackgroundColor, 2000);
