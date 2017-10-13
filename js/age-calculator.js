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

export class Calculator {
  constructor(date1, date2) {
    this.date1 = date1;
    this.date2 = date2;
}

  difInYears(date1, date2) {
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    var difference_ms = (date2ms - date1ms)/1000;
    var seconds = Math.floor(difference_ms % 60);
    return seconds + "seconds";
  }
}
