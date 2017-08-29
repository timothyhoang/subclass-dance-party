var SpinnyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  this.centerX = left;
  this.centerY = top;
  this.x = 0;
  this.y = 0;
  this.r = 25;
  this.theta = 0;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spinny');
};

SpinnyDancer.prototype = Object.create(Dancer.prototype);
SpinnyDancer.prototype.constructor = SpinnyDancer;

SpinnyDancer.prototype.step = function() {
  this.oldStep();
  
  this.x = this.centerX + this.r * Math.cos(this.theta);
  this.y = this.centerY + this.r * Math.sin(this.theta);
  this.theta += Math.PI / 8;
  
  this.setPosition(this.y, this.x);
};

