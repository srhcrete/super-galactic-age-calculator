import { Calculator } from './../js/age-calculator.js';
var age = new Calculator("Name", "24");

describe('Calculator', function () {
  it('should have a name and an age', function () {
    expect(age.name, age.age).toEqual("Name", "24");
  });

  it('calculates age in seconds', function() {
    expect(age.ageInSeconds("24")).toEqual(756864000);
  });
});
