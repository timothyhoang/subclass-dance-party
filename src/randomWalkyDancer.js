var RandomWalkyDancer = function(top, left) {
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, 10);
  this.$node.addClass('random-walky');
  this.color = 'green';
};

RandomWalkyDancer.prototype = Object.create(Dancer.prototype);
RandomWalkyDancer.prototype.constructor = RandomWalkyDancer;

RandomWalkyDancer.prototype.step = function() {
  this.oldStep();
  
  this.x += 20 * Math.random() - 10;
  this.y += 20 * Math.random() - 10;
  
  if (this.x < 0 || this.x > this.maxWidth) {
    this.x = (this.x < 0) ? 0 : Math.min(this.x, this.maxWidth);
  }

  if (this.y < 0 || this.y > this.maxHeight) {
    this.y = (this.y < 0) ? 0 : Math.min(this.y, this.maxHeight);
  }

  this.setPosition(this.y, this.x);
};

