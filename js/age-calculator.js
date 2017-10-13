var moment = require('moment');

export class Human {
  constructor(name, age, gender, continent) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.continent = continent;
    this.expentency = 0;
  }

  ageInSeconds() {
    var secondsAge = parseInt(this.age) * 365 * 24 * 60 * 60;
    return secondsAge + " seconds";
  }

  ageMercury() {
    var mercuryAge = parseInt(this.age) * 24;
    return mercuryAge + " years old on Mercury";
  }

  ageVenus() {
    var venusAge = parseInt(this.age) * 62;
    return venusAge + " years old on Venus";
  }

  ageMars() {
    var marsAge = parseInt(this.age) * 1.88;
    return marsAge + " years old on Mars";
  }

  ageJupiter() {
    var jupiterAge = parseInt(this.age) * 11.86;
    return jupiterAge + " years old on Jupiter";
  }

  lifeExpentancy() {
    if (this.continent == "Northern America") {
      if (this.gender == "male") {
        this.expectency = 77 - parseInt(this.age);
      } else {
        this.expectency = 81 - parseInt(this.age);
      }
    } else if (this.continent == "Europe") {
      if (this.gender == "male") {
        this.expectency = 75 - parseInt(this.age);
      } else {
        this.expectency = 81 - parseInt(this.age);
      }
    } else if (this.continent == "Oceania") {
      if (this.gender == "male") {
        this.expectency = 75 - parseInt(this.age);
      } else {
        this.expectency = 79 - parseInt(this.age);
      }
    } else if (this.continent == "Latin America and Caribbean") {
      if (this.gender == "male") {
        this.expectency = 73 - parseInt(this.age);
      } else {
        this.expectency = 79 - parseInt(this.age);
      }
    } else if (this.continent == "Asia") {
      if (this.gender == "male") {
        this.expectency = 71 - parseInt(this.age);
      } else {
        this.expectency = 74 - parseInt(this.age);
      }
    }

    if (this.expectency > 0) {
      return this.expectency + " years left on Earth";
    } else {
      return "you have surpassed your average life expectancy!";
    }
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

  compareHours () {
    var date1 = moment(`${this.date1}`, "YYYYMMDD");
    var date2 = moment(`${this.date2}`, "YYYYMMDD");
    var days = date2.diff(date1, "days");
    var hours = days * 24;
    return hours + " hours";
  }

  compareMinutes () {
    var date1 = moment(`${this.date1}`, "YYYYMMDD");
    var date2 = moment(`${this.date2}`, "YYYYMMDD");
    var days = date2.diff(date1, "days");
    var minutes = days * 24 * 60;
    return minutes + " minutes";
  }

  compareSeconds () {
    var date1 = moment(`${this.date1}`, "YYYYMMDD");
    var date2 = moment(`${this.date2}`, "YYYYMMDD");
    var days = date2.diff(date1, "days");
    var seconds = days * 24 * 60 * 60;
    return seconds + " seconds";
  }
}
