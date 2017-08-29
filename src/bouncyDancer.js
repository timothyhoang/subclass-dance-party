var BouncyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  
  this.incrementX = 100;
  this.incrementY = 100;
  
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncy');
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  this.oldStep();

  var newX = this.getNewXPosition();
  var newY = this.getNewYPosition();
  
  if (newX < 0 || newX > this.maxWidth) {
    this.incrementX = -this.incrementX;
    newX = (newX < 0) ? 0 : this.maxWidth;
    newY = (newX < 0) ? newY : Math.min(newY + (newX - this.x), this.maxHeight);
  }
  
  if (newY < 0 || newY > this.maxHeight) {
    this.incrementY = -this.incrementY;
    newY = (newY < 0) ? 0 : this.maxHeight;
    newX = (newY < 0) ? newX : Math.min(newX + (newY - this.y), this.maxWidth);
  }
  
  this.setPosition(newY, newX);
  this.x = newX;
  this.y = newY;
};

BouncyDancer.prototype.getNewXPosition = function() {
  return this.x + this.incrementX;
};

BouncyDancer.prototype.getNewYPosition = function() {
  return this.y + this.incrementY;
};