// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.width = 75;
  this.height = 75;
  this.x = left;
  this.y = top;
  this.minXPos = 0;
  this.minYPos = 0;
  this.maxXPos = $('body').width() - this.width;
  this.maxYPos = $('body').height() - this.height;
  this.timeBetweenSteps = timeBetweenSteps;
  this.defaultTimeBetweenSteps = timeBetweenSteps;
  this.prevNearestNeighbor = null;
  this.triggerDistance = 100;
  this.$node = $('<div class="dancer"></div>');
  this.step();
  this.init(top, left);
};

Dancer.prototype.step = function() {
  this.interaction();
  this.$node.removeClass('infinite');
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  if (this.timeBetweenSteps !== this.defaultTimeBetweenSteps) {
    this.timeBetweenSteps = this.defaultTimeBetweenSteps;
  }
};

Dancer.prototype.interaction = function() {
  var nearestNeighbor = this.getNearestNeighbor(this.triggerDistance);
  if (nearestNeighbor) {
    this.$node.addClass('animated rotateIn infinite');
    nearestNeighbor.$node.addClass('animated rotateIn infinite');
  }
  this.prevNearestNeighbor = nearestNeighbor;
};

Dancer.prototype.getNearestNeighbor = function(triggerDistance) {
  var nearestNeighbor = null;
  var shortestDistance = Infinity; 
  for (var i = 0; i < dancers.length; i++) {
    var distance = this.getDistanceFrom(dancers[i]);
    if (dancers[i] !== this && distance < triggerDistance) {
      nearestNeighbor = distance < shortestDistance ? dancers[i] : nearestNeighbor;
      shortestDistance = distance;
    }
  }
  return nearestNeighbor;
};

Dancer.prototype.init = function(top, left) {
  var styleSettings = {
    top: Math.min(top, this.maxYPos),
    left: Math.min(left, this.maxXPos),
    height: this.height,
    width: this.width,
    padding: '5px',
    'background-color': 'none'
  };
  var hoverSettingsOn = {
    border: '5px dotted orange',
    'border-radius': '10px'
  };
  var hoverSettingsOff = {
    border: 'none'
  };
  this.$node.css(styleSettings);
  this.$node.hover(function() {
    $(this).css(hoverSettingsOn);
  }, function() {
    $(this).css(hoverSettingsOff);
  });
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

