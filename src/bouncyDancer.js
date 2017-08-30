var BouncyDancer = function(top, left, timeBetweenSteps) {
  this.incrementX = 10;
  this.incrementY = 10;
  this.color = 'blue';
  // this.oldInteraction = Dancer.prototype.interaction;
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncy');
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  this.oldStep();

  var newX = this.getNewXPosition();
  var newY = this.getNewYPosition();
  
  if (newX < 0 || newX > this.maxXPos) {
    this.incrementX = -this.incrementX;
    newX = (newX < 0) ? 0 : this.maxXPos;
    newY = (newX < 0) ? newY : Math.min(newY + (newX - this.x), this.maxYPos);
  }
  
  if (newY < 0 || newY > this.maxYPos) {
    this.incrementY = -this.incrementY;
    newY = (newY < 0) ? 0 : this.maxYPos;
    newX = (newY < 0) ? newX : Math.min(newX + (newY - this.y), this.maxXPos);
  }
  
  this.setPosition(newY, newX);
  this.x = newX;
  this.y = newY;
};

BouncyDancer.prototype.interaction = function() {
  var nearestNeighbor = this.getNearestNeighbor(this.triggerDistance);
  if (nearestNeighbor) {
    this.$node.addClass('animated rotateIn infinite');
    nearestNeighbor.$node.addClass('animated rotateIn infinite');

    if (this.prevNearestNeighbor !== nearestNeighbor) {
      this.incrementX = -this.incrementX;
      this.incrementY = -this.incrementY;
    }
  }
  this.prevNearestNeighbor = nearestNeighbor;
};

BouncyDancer.prototype.getNewXPosition = function() {
  return this.x + this.incrementX;
};

BouncyDancer.prototype.getNewYPosition = function() {
  return this.y + this.incrementY;
};