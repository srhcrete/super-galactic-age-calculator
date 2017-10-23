var moment = require('moment');

export class Human {
  constructor(name, age, gender, continent) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.continent = continent;
    this.expectancy = 0;
  }

  ageInSeconds() {
    let secondsAge = parseInt(this.age) * 365 * 24 * 60 * 60;
    return secondsAge + " seconds";
  }

  ageMercury() {
    let mercuryAge = parseInt(this.age) * 4.14;
    return mercuryAge.toFixed(1) + " years old on Mercury";
  }

  ageVenus() {
    let venusAge = parseInt(this.age) * 1.62;
    return venusAge.toFixed(1) + " years old on Venus";
  }

  ageMars() {
    let marsAge = parseInt(this.age) / 1.88;
    return marsAge.toFixed(1) + " years old on Mars";
  }

  ageJupiter() {
    let jupiterAge = parseInt(this.age) / 11.86;
    return jupiterAge.toFixed(1) + " years old on Jupiter";
  }

  lifeExpectancy() {
    let expectancy = this.expectancy;
    if (this.continent === "Northern America" && this.gender === "male") {
      expectancy = 77 - parseInt(this.age);
    } else if (this.continent === "Northern America" && this.gender === "female" || this.continent === "Europe" && this.gender === "female") {
      expectancy = 81 - parseInt(this.age);
    } else if (this.continent === "Europe" && this.gender === "male" || this.continent === "Oceania" && this.gender === "male") {
      expectancy = 75 - parseInt(this.age);
    } else if (this.continent === "Latin America and Caribbean" && this.gender === "male") {
      expectancy = 73 - parseInt(this.age);
    } else if (this.continent === "Latin America and Caribbean" && this.gender === "female" || this.continent === "Oceania" && this.gender === "female") {
      expectancy = 79 - parseInt(this.age);
    } else if (this.continent === "Asia" && this.age === "male") {
        expectancy = 71 - parseInt(this.age);
    } else {
        expectancy = 74 - parseInt(this.age);
    }
    this.expectancy = expectancy;
    return expectancy.toFixed(1) + " years left on Earth";
  }

  marsLifeExpectancy() {
    let marsExpectancy = this.expectancy * 1.88;
    return marsExpectancy.toFixed(1) + " years left on Mars";
  }
  jupiterLifeExpectancy () {
    let jupiterExpectancy = this.expectancy * 11.86;
    return jupiterExpectancy.toFixed(1) + " years left on Jupiter";
  }
  venusLifeExpectancy() {
    let venusExpectancy = this.expectancy * 62;
    return venusExpectancy.toFixed(1) + " years left on Venus";
  }
  mercuryLifeExpectancy() {
    let mercuryExpectancy = this.expectancy * 24;
    return mercuryExpectancy.toFixed(1) + " years left on Mercury";
  }
}

export class Date {
  constructor(year, month, date) {
    this.year = year;
    this.month = month;
    this.date = date;
  }

  ageYears() {
    return moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
  }

  mercuryBirthday() {
    let earthAge = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
    let timestamp = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD");
    let mercuryAge = parseInt(earthAge) * 24;
    let mercuryBirthdate = moment(timestamp).add(mercuryAge, 'years').format('MM/DD/YYYY');
    return mercuryBirthdate;
  }

  venusBirthday() {
    let earthAge = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
    let timestamp = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD");
    let venusAge = parseInt(earthAge) * 62;
    let venusBirthdate = moment(timestamp).add(venusAge, 'years').format('MM/DD/YYYY');
    return venusBirthdate;
  }

  marsBirthday() {
    let earthAge = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
    let timestamp = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD");
    let marsAge = parseInt(earthAge) * 1.88;
    let marsBirthdate = moment(timestamp).add(marsAge, 'years').format('MM/DD/YYYY');
    return marsBirthdate;
  }

  jupiterBirthday() {
    let earthAge = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
    let timestamp = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD");
    let jupiterAge = parseInt(earthAge) * 11.86;
    let jupiterBirthdate = moment(timestamp).add(jupiterAge, 'years').format('MM/DD/YYYY');
    return jupiterBirthdate;
  }

  dogYears() {
    let earthAge = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
    let dogYearsAge = parseInt(earthAge) * 7;
    return dogYearsAge;
  }

  mercuryDogYears() {
    let earthAge = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
    let dogYearsAge = parseInt(earthAge) * 7;
    let dogYearsMercury = dogYearsAge * 24;
    return dogYearsMercury;
  }

  venusDogYears() {
    let earthAge = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
    let dogYearsAge = parseInt(earthAge) * 7;
    let dogYearsVenus = dogYearsAge * 62;
    return dogYearsVenus;
  }

  marsDogYears() {
    let earthAge = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
    let dogYearsAge = parseInt(earthAge) * 7;
    let dogYearsMars = dogYearsAge * 1.88;
    return dogYearsMars;
  }

  jupiterDogYears() {
    let earthAge = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
    let dogYearsAge = parseInt(earthAge) * 7;
    let dogYearsJupiter = dogYearsAge * 11.86;
    return dogYearsJupiter;
  }
}

export class Compare {
  constructor(date1, date2) {
    this.date1 = date1;
    this.date2 = date2;
  }

  compareDays () {
    let date1 = moment(`${this.date1}`, "YYYYMMDD");
    let date2 = moment(`${this.date2}`, "YYYYMMDD");
    let days = date2.diff(date1, "days");
    return days + " days";
  }

  compareHours () {
    let date1 = moment(`${this.date1}`, "YYYYMMDD");
    let date2 = moment(`${this.date2}`, "YYYYMMDD");
    let days = date2.diff(date1, "days");
    let hours = days * 24;
    return hours + " hours";
  }

  compareMinutes () {
    let date1 = moment(`${this.date1}`, "YYYYMMDD");
    let date2 = moment(`${this.date2}`, "YYYYMMDD");
    let days = date2.diff(date1, "days");
    let minutes = days * 24 * 60;
    return minutes + " minutes";
  }

  compareSeconds () {
    let date1 = moment(`${this.date1}`, "YYYYMMDD");
    let date2 = moment(`${this.date2}`, "YYYYMMDD");
    let days = date2.diff(date1, "days");
    let seconds = days * 24 * 60 * 60;
    return seconds + " seconds";
  }
}
