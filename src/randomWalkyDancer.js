var RandomWalkyDancer = function(top, left, timeBetweenSteps) {
  this.color = 'green';
  this.speed = Math.random() * 35 + 15;
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('random-walky');
};

RandomWalkyDancer.prototype = Object.create(Dancer.prototype);
RandomWalkyDancer.prototype.constructor = RandomWalkyDancer;

RandomWalkyDancer.prototype.step = function() {
  this.$node.removeClass('animated swing infinite');
  this.oldStep();
  
  this.x += this.speed * Math.random() - this.speed / 2;
  this.y += this.speed * Math.random() - this.speed / 2;
  
  if (this.x < this.minXPos || this.x > this.maxXPos) {
    this.x = (this.x < this.minXPos) ? this.minXPos : Math.min(this.x, this.maxXPos);
  }

  if (this.y < this.minYPos || this.y > this.maxYPos) {
    this.y = (this.y < this.minYPos) ? this.minYPos : Math.min(this.y, this.maxYPos);
  }

  this.setPosition(this.y, this.x);
};

RandomWalkyDancer.prototype.interaction = function() {
  var nearestNeighbor = this.getNearestNeighbor(this.triggerDistance);
  if (nearestNeighbor) {
    this.$node.addClass('animated swing infinite');

    if (this.prevNearestNeighbor !== nearestNeighbor) {
      this.speed = Math.random() * 35 + 15;
    }

  }
  this.prevNearestNeighbor = nearestNeighbor;
};
