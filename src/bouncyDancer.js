var BouncyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  this.x = left;
  this.y = top;
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
  
  if (newX < 0 || newX > $('body').width()) {
    this.incrementX = -this.incrementX;
    if (newX < 0) {
      newX = 0;
    } else {
      newX = $('body').width();
    }
  }
  
  if (newY < 0 || newY > $('body').height()) {
    this.incrementY = -this.incrementY;
    if (newY < 0) {
      newY = 0;
    } else {
      newY = $('body').height();
    }
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