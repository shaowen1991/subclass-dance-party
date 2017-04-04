var makeDiscoDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="discoDancer"></span>');
  this.setPosition(this.top, this.left);
  this.step();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};


makeDiscoDancer.prototype = Object.create(makeDancer.prototype);
makeDiscoDancer.prototype.constructor = makeDiscoDancer;
// makeDiscoDancer.prototype.oldStep = makeDancer.prototype.step.bind(this);
makeDiscoDancer.prototype.step = function() {
  this.$node.animate({
        top: this.top + 100
      });
     
  this.$node.animate({
        top: this.top - 100
      });
  makeDancer.prototype.step.call(this);  
};

makeDiscoDancer.prototype.lineUp = function () {
  this.top = 450;

  makeDancer.prototype.step.call(this);  
}