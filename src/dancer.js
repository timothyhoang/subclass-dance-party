// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.x = left;
  this.y = top;
  this.width = 20;
  this.height = 20;
  this.minWidth = 0;
  this.minHeight = 0;
  this.maxWidth = $('body').width() - this.width;
  this.maxHeight = $('body').height() - this.height;
  this.color = 'orange';
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<div class="dancer"></div>');
  this.step();
  this.init(top, left);
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  for (dancer of window.dancers) {
    console.log(this.getDistanceFrom(dancer));
    console.log(this.getDistanceFrom(dancer) < 1000);
    if (this.getDistanceFrom(dancer) < 1000 && this.dance !== dancer) {
      this.color = ([this.color, dancer.color])[Math.floor(2 * Math.random()) - 1];
      var styleSettings = {
        background: this.color
      };
      this.$node.css(styleSettings);
    }
  }
};

Dancer.prototype.init = function(top, left) {
  var styleSettings = {
    top: Math.min(top, this.maxHeight),
    left: Math.min(left, this.maxWidth),
    height: this.height,
    width: this.width,
    background: this.color
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

Dancer.prototype.getDistanceFrom = function(dancer) {
  return Math.sqrt(Math.pow(this.x - dancer.x, 2) + Math.pow(this.y - dancer.y, 2));
};