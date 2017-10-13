import { Age, Date } from './../js/age-calculator.js';
var age = new Age("Name", "24");
var date1 = new Date("1987", "09", "18");
var date2 = new Date("2030", "09", "18");

describe('Age', function () {
  it('should have a name and an age', function() {
    expect(age.name, age.age).toEqual("Name", "24");
  });

  it('calculates age in seconds', function() {
    expect(age.ageInSeconds("24")).toEqual(756864000 + "seconds");
  });

  it('calculates age on Mercury', function() {
    expect(age.ageMercury("24")).toEqual(576);
  });

  it('calculates age on Venus', function() {
    expect(age.ageVenus("24")).toEqual(1488);
  });

  it('calculates age on Mars', function() {
    expect(age.ageMars("24")).toEqual(45.12);
  });

  it('calculates age on Jupiter', function() {
    expect(age.ageJupiter("24")).toEqual(284.64);
  });
});

describe('Date', function () {
  it('should calculate a persons age in years from birth date', function() {
    expect(date1.ageYears()).toEqual("30 years ago");
  });

  it('should calculate the difference in seconds between two dates', function() {
    expect(difInSeconds(date1, date2)).toEqual(378432000 + "seconds");
  });
});
