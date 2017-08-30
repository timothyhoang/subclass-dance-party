var SpinnyDancer = function(top, left, timeBetweenSteps) {
  this.centerX = left;
  this.centerY = top;
  this.radius = 50;
  this.theta = 0;
  this.period = Math.PI / 128;
  this.color = 'yellow';
  this.oldStep = Dancer.prototype.step;
  this.oldInit = Dancer.prototype.init;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spinny');
};

SpinnyDancer.prototype = Object.create(Dancer.prototype);
SpinnyDancer.prototype.constructor = SpinnyDancer;

SpinnyDancer.prototype.step = function() {
  this.oldStep();
  
  this.x = this.centerX + this.radius * Math.cos(this.theta);
  this.y = this.centerY + this.radius * Math.sin(this.theta);
  this.theta += this.period % (2 * Math.PI);
  
  this.setPosition(this.y, this.x);
};

SpinnyDancer.prototype.init = function(top, left) {
  this.centerX = Math.min(left, this.maxXPos - this.radius);
  this.centerX = Math.max(this.centerX, this.minXPos + this.radius);
  this.centerY = Math.min(top, this.maxYPos - this.radius);
  this.centerY = Math.max(this.centerY, this.minYPos + this.radius);
  this.oldInit(this.centerY, this.centerX);
};

SpinnyDancer.prototype.lineUp = function(duration, alignment) {
  alignment = alignment || 'v';
  this.timeBetweenSteps = duration;
  if (alignment === 'v') {
    this.$node.animate({
      left: (this.maxXPos - this.minXPos) / 2,
      opacity: 1
    }, this.timeBetweenSteps);
    this.centerX = (this.maxXPos - this.minXPos) / 2;
  } else {
    this.$node.animate({
      top: (this.maxYPos - this.minYPos) / 2,
      opacity: 1
    }, this.timeBetweenSteps);
    this.centerY = (this.maxYPos - this.minYPos) / 2;
  }
};