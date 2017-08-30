var BlinkyDancer = function(top, left, timeBetweenSteps) {
  this.color = 'red';
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  this.$node.removeClass('animated wobble infinite');
  this.oldStep();
  this.$node.toggle();
};

BlinkyDancer.prototype.interaction = function() {
  var nearestNeighbor = this.getNearestNeighbor(this.triggerDistance);
  if (nearestNeighbor) {
    this.$node.addClass('animated wobble infinite');
  }
  this.prevNearestNeighbor = nearestNeighbor;
};