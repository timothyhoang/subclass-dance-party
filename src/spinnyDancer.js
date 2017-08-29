var SpinnyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  
  this.centerX = left;
  this.centerY = top;
  this.r = 50;
  this.theta = 0;
  
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spinny');

  this.color = 'yellow';
};

SpinnyDancer.prototype = Object.create(Dancer.prototype);
SpinnyDancer.prototype.constructor = SpinnyDancer;

SpinnyDancer.prototype.step = function() {
  this.oldStep();
  
  this.x = this.centerX + this.r * Math.cos(this.theta);
  this.y = this.centerY + this.r * Math.sin(this.theta);
  this.theta += (Math.PI / 8) % (2 * Math.PI);
  
  this.setPosition(this.y, this.x);
};

SpinnyDancer.prototype.init = function(top, left) {
  this.centerX = Math.min(left, this.maxWidth - this.r - this.width);
  this.centerY = Math.min(top, this.maxHeight - this.r - this.height);
  var styleSettings = {
    top: Math.min(top, this.maxHeight),
    left: Math.min(left, this.maxWidth),
    height: this.height,
    width: this.width
  };
  this.$node.css(styleSettings);
};