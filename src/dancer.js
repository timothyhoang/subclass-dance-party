// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.width = 100;
  this.height = 100;
  this.x = left;
  this.y = top;
  this.minXPos = 0;
  this.minYPos = 0;
  this.maxXPos = $('body').width() - this.width;
  this.maxYPos = $('body').height() - this.height;
  this.timeBetweenSteps = timeBetweenSteps;
  this.defaultTimeBetweenSteps = timeBetweenSteps;
  this.$node = $('<div class="dancer"></div>');
  this.step();
  this.init(top, left);
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  if (this.timeBetweenSteps !== this.defaultTimeBetweenSteps) {
    this.timeBetweenSteps = this.defaultTimeBetweenSteps;
  }
};

Dancer.prototype.init = function(top, left) {
  var styleSettings = {
    top: Math.min(top, this.maxYPos),
    left: Math.min(left, this.maxXPos),
    height: this.height,
    width: this.width,
    'background-color': 'none'
  };
  this.$node.css(styleSettings);
  // this.$node.hover(function() {
  //   $(this).css('background', 'orange');
  // });
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(duration, alignment) {
  alignment = alignment || 'v';
  this.timeBetweenSteps = duration;
  if (alignment === 'v') {
    this.$node.animate({
      left: (this.maxXPos - this.minXPos) / 2,
      opacity: 1
    }, this.timeBetweenSteps);
    this.x = (this.maxXPos - this.minXPos) / 2;
  } else {
    this.$node.animate({
      top: (this.maxYPos - this.minYPos) / 2,
      opacity: 1
    }, this.timeBetweenSteps);
    this.y = (this.maxYPos - this.minYPos) / 2;
  }
};

Dancer.prototype.getDistanceFrom = function(dancer) {
  return Math.sqrt(Math.pow(this.x - dancer.x, 2) + Math.pow(this.y - dancer.y, 2));
};

