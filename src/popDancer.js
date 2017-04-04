var makePopDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="popDancer"></span>');
  this.setPosition(this.top, this.left);
  this.step();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};


makePopDancer.prototype = Object.create(makeDancer.prototype);
makePopDancer.prototype.constructor = makePopDancer;
// makePopDancer.prototype.oldStep = makeDancer.prototype.step.bind(this);
makePopDancer.prototype.step = function() {
	// this.$node.toggle("fade");
  this.$node.animate({
        width: 200,
        height: 200
      }, this.timeBetweenSteps / 2);
  
  this.$node.animate({
        width: 50,
        height: 50
      }, this.timeBetweenSteps / 2);
  
  // this.$node.effect( "shake", { direction: "up", times: 1, distance: 10}, this.timeBetweenSteps / 2 );
  makeDancer.prototype.step.call(this);
  
};
