import { Human, Date, Compare } from './../js/age-calculator.js';
let age = new Human("Hugh Man", "24", "male", "Northern America", "mercury");
let oldie = new Human("Old Man", "90", "male", "Northern American", "earth");
let birthday = new Date("1987", "09", "18", "mercury");
let date1 = "19870918";
let date2 = "20300918";
let dif = new Compare(date1, date2);

describe('Human', function () {
  it('should have a name and an age', function() {
    expect(age.name, age.age).toEqual("Hugh Man", "24");
  });

  it('calculates age in seconds', function() {
    expect(age.ageInSeconds()).toEqual(756864000 + " seconds");
  });

  it('calculates age on Mercury', function() {
    expect(age.ageMercury()).toEqual(576 + " years old on Mercury");
  });

  it('calculates age on Venus', function() {
    expect(age.ageVenus()).toEqual(1488 + " years old on Venus");
  });

  it('calculates age on Mars', function() {
    expect(age.ageMars()).toEqual(45.12 + " years old on Mars");
  });

  it('calculates age on Jupiter', function() {
    expect(age.ageJupiter()).toEqual(284.64 + " years old on Jupiter");
  });

  it('calculates life expentancy of Human on earth based on gender, continent, and age', function() {
    expect(age.lifeExpentancy()).toEqual("Your extimated life expectancy is " + 53 + ",and you have " + 29 + "years left on Earth");
  });

  it('returns if user has surpassed their average life expectancy', function () {
    expect(oldie.lifeExpentancy()).toEqual("you have surpassed your average life expectancy!");
  });

  it('calculates life expectancy of Human on other planets based on Earth life expectancy', function () {
    expect(age.galacticLifeExpentancy()).toEqual(1272 + " years left on Mercury");
  });
});

describe('Date', function () {
  it('should calculate a persons age in years from birth date', function() {
    expect(birthday.ageYears()).toEqual("30 years ago");
  });
  it('should calculate a persons  galactic birthdate', function() {
    expect(birthday.galacticBirthday()).toEqual("09/01/2707");
  });
  it('should calculate a persons galactic age in dog years', function () {
    expect(birthday.dogYears()).toEqual(5040);
  });
});

describe('Compare', function () {
  it('should calculate the difference in days between two dates', function() {
    expect(dif.compareDays(date1, date2)).toEqual(15706 + " days");
  });

  it('should calculate the difference in hours between two dates', function() {
    expect(dif.compareHours(date1, date2)).toEqual(376944 + " hours");
  });

  it('should calculate the difference in minutes between two dates', function() {
    expect(dif.compareMinutes(date1, date2)).toEqual(22616640 + " minutes");
  });

  it('should calculate the difference in seconds between two dates', function() {
    expect(dif.compareSeconds(date1, date2)).toEqual(1356998400 + " seconds");
  });
});
