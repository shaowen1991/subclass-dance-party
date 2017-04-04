describe('classicalDancer', function() {

  var classicalDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    classicalDancer = new makeClassicalDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(classicalDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node rotate', function() {
    sinon.spy(classicalDancer.$node, 'animate');
    classicalDancer.step();
    expect(classicalDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {

      sinon.spy(classicalDancer, 'step');

      expect(classicalDancer.step.callCount).to.be.equal(0);
      
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      
      expect(classicalDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(classicalDancer.step.callCount).to.be.equal(2);
    });
  });
});
