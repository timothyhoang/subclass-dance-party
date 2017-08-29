// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  
  this.$node = $('<span class="dancer"></span>');

  this.step();

  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  console.log('dancer');
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};