var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(this.top, this.left);
  this.step();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.oldStep = makeDancer.prototype.step.bind(this);
};


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
// makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step.bind(this);
makeBlinkyDancer.prototype.step = function() {
  this.$node.toggle();
  makeDancer.prototype.step.call(this);
  
  

};
