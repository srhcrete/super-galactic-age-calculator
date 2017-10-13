import { Age, Date, Calculator } from './../js/age-calculator.js';
var age = new Age("Name", "24");
var date1 = new Date("1987", "09", "18");
var date2 = new Date("2030", "09", "18");

describe('Age', function () {
  it('should have a name and an age', function () {
    expect(age.name, age.age).toEqual("Name", "24");
  });

  it('calculates age in seconds', function() {
    expect(age.ageInSeconds("24")).toEqual(756864000 + "seconds");
  });
});
