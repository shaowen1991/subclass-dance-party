var makeClassicalDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="classicalDancer"></span>');
  this.setPosition(this.top, this.left);
  this.step();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};


makeClassicalDancer.prototype = Object.create(makeDancer.prototype);
makeClassicalDancer.prototype.constructor = makeClassicalDancer;
// makeClassicalDancer.prototype.oldStep = makeDancer.prototype.step.bind(this);
makeClassicalDancer.prototype.step = function() {
  var nodeDance = function(node){
    node.css({
      //for firefox
      "-moz-animation-name":"rotatebox",
      "-moz-animation-duration":"0.8s",
      "-moz-animation-iteration-count":"1000",
      "-moz-animation-fill-mode":"forwards",
      //for safari & chrome
      "-webkit-animation-name":"rotatebox",
      "-webkit-animation-duration":"0.8s",
      "-webkit-animation-iteration-count":"1000",
      "-webkit-animation-fill-mode" : "forwards",
    });
  }
  nodeDance(this.$node);
  makeDancer.prototype.step.call(this);  
};
