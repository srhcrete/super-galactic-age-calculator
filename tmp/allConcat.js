import { Human, Date, Compare } from './../js/age-calculator.js';

$(document).ready(function() {
  $('#human-info-form').submit(function(event) {
    event.preventDefault();
    let name = $('#name').val();
    let age= $('#age').val();
    let gender = $('#gender').val();
    let continent = $('#continent').val();
    let human  = new Human(name, age, gender, continent);
    console.log(human);
    let galacticAgeArr = [];
    let expectancyArr = [];
    let ageSeconds = human.ageInSeconds();
    let ageMercury = human.ageMercury();
    let ageVenus = human.ageVenus();
    let ageMars = human.ageMars();
    let ageJupiter = human.ageJupiter();
    let lifeExpectancy = human.lifeExpectancy();
    let marsExpectancy = human.marsLifeExpectancy();
    let mercuryExpectancy = human.mercuryLifeExpectancy();
    let venusExpectancy = human.venusLifeExpectancy();
    let jupiterExpectancy = human.jupiterLifeExpectancy();
    galacticAgeArr.push(ageSeconds, ageMercury, ageVenus, ageMars, ageJupiter);
    expectancyArr.push(lifeExpectancy, marsExpectancy, mercuryExpectancy, venusExpectancy, jupiterExpectancy);
    galacticAgeArr.forEach(function(stat) {
      $('#galactic-age').append('<li>' + stat + '</li>');
    });
    expectancyArr.forEach(function(age) {
      $('#life-expectancy').append('<li>' + age +'</li>');
    });
  });

  $('#birthday-form').submit(function() {
    event.preventDefault();
    let birthdayArr = [];
    let dogYearsArr = [];
    let year = $('#year').val();
    let month = $('#month').val();
    let day = $('#day').val();
    let date = new Date(year, month, day);
    console.log(date);
    let ageInYears = date.ageYears();
    let mercuryBirthday = date.mercuryBirthday();
    let venusBirthday = date.venusBirthday();
    let marsBirthday = date.marsBirthday();
    let jupiterBirthday = date.jupiterBirthday();
    let dogYears = date.dogYears();
    let mercuryDogYears = date.mercuryDogYears();
    let venusDogYears = date.venusDogYears();
    let marsDogYears = date.marsDogYears();
    let jupiterDogYears = date.jupiterDogYears();
    birthdayArr.push(mercuryBirthday, venusBirthday, marsBirthday, jupiterBirthday);
    dogYearsArr.push(dogYears, mercuryDogYears, venusDogYears, marsDogYears, jupiterDogYears);
    console.log(birthdayArr);
    console.log(dogYearsArr);
    $('#age-in-years').append('<li>You were born ' + ageInYears + '</li>');
    birthdayArr.forEach(function(birthday) {
      $('#galactic-birthday').append('<li>' + birthday + '</li>');
    });
    dogYearsArr.forEach(function(age) {
      $('#dog-years').append('<li>' + age + '</li>');
    });
  });
});
