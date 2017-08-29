// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.x = left;
  this.y = top;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<div class="dancer"></div>');
  this.width = 20;
  this.height = 20;
  this.minWidth = 0;
  this.minHeight = 0;
  this.maxWidth = $('body').width() - this.width;
  this.maxHeight = $('body').height() - this.height;
  this.step();
  this.init(top, left);
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.init = function(top, left) {
  var styleSettings = {
    top: Math.min(top, this.maxHeight),
    left: Math.min(left, this.maxWidth),
    height: this.height,
    width: this.width
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};