var moment = require('moment');

export class Age {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  ageInSeconds(age) {
    var secondsAge = parseInt(age) * 365 * 24 * 60 * 60;
    return secondsAge + "seconds";
  }

  ageMercury(age) {
    var mercuryAge = parseInt(age) * 24;
    return mercuryAge;
  }

  ageVenus(age) {
    var venusAge = parseInt(age) * 62;
    return venusAge;
  }

  ageMars(age) {
    var marsAge = parseInt(age) * 1.88;
    return marsAge;
  }

  ageJupiter(age) {
    var jupiterAge = parseInt(age) * 11.86;
    return jupiterAge;
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
}

export class Compare {
  constructor(date1, date2) {
    this.date1 = date1;
    this.date2 = date2;
  }

  compareDays () {
    var date1 = moment(`${this.date1}`, "YYYYMMDD");
    var date2 = moment(`${this.date2}`, "YYYYMMDD");
    var days = date2.diff(date1, "days");
    return days + " days";
  }

  compareSeconds () {
    var date1 = moment(`${this.date1}`, "YYYYMMDD");
    var date2 = moment(`${this.date2}`, "YYYYMMDD");
    var days = date2.diff(date1, "days");
    var seconds = days * 24;
    return seconds + " hours";
  }
}
