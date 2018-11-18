let TestedComponent = require('../BestSeller').BestSeller,
    React = require('react');

describe('', function () { 
  it("BestSeller should have a property with a name of propTypes and a value of an empty object.", function () {
    let pT = TestedComponent.propTypes; 
    expect(pT).to.exist;
    expect(typeof pT).to.equal('object');
    expect(pT).to.eql({});
  });
});