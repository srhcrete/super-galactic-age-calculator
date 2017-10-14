var moment = require('moment');

export class Human {
  constructor(name, age, gender, continent, planet) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.continent = continent;
    this.expentency = 0;
    this.planet = planet;
  }

  ageInSeconds() {
    let secondsAge = parseInt(this.age) * 365 * 24 * 60 * 60;
    return secondsAge + " seconds";
  }

  ageMercury() {
    let mercuryAge = parseInt(this.age) * 24;
    return mercuryAge + " years old on Mercury";
  }

  ageVenus() {
    let venusAge = parseInt(this.age) * 62;
    return venusAge + " years old on Venus";
  }

  ageMars() {
    let marsAge = parseInt(this.age) * 1.88;
    return marsAge + " years old on Mars";
  }

  ageJupiter() {
    let jupiterAge = parseInt(this.age) * 11.86;
    return jupiterAge + " years old on Jupiter";
  }

  lifeExpentancy() {
    if (this.continent == "Northern America") {
      if (this.gender == "male") {
        this.expectancy = 77 - parseInt(this.age);
      } else {
        this.expectancy = 81 - parseInt(this.age);
      }
    } else if (this.continent == "Europe") {
      if (this.gender == "male") {
        this.expectancy = 75 - parseInt(this.age);
      } else {
        this.expectancy = 81 - parseInt(this.age);
      }
    } else if (this.continent == "Oceania") {
      if (this.gender == "male") {
        this.expectancy = 75 - parseInt(this.age);
      } else {
        this.expectancy = 79 - parseInt(this.age);
      }
    } else if (this.continent == "Latin America and Caribbean") {
      if (this.gender == "male") {
        this.expectancy = 73 - parseInt(this.age);
      } else {
        this.expectancy = 79 - parseInt(this.age);
      }
    } else if (this.continent == "Asia") {
      if (this.gender == "male") {
        this.expectancy = 71 - parseInt(this.age);
      } else {
        this.expectancy = 74 - parseInt(this.age);
      }
    }

    if (this.expectancy > 0) {
      return this.expectancy + " years left on Earth";
    } else {
      return "you have surpassed your average life expectancy!";
    }
  }

  galacticLifeExpentancy() {
    if (this.planet == "mars") {
      let marsExpectancy = this.expentancy * 1.88;
      return marsExpectancy + " years left on Mars";
    } else if (this.planet == "jupiter") {
      let jupiterExpectancy = this.expectancy * 11.86;
      return jupiterExpectancy + " years left on Jupiter";
    } else if (this.planet == "venus") {
      let venusExpectancy = this.expectancy * 62;
      return venusExpectancy + " years left on Venus";
    } else if (this.planet == "mercury") {
      let mercuryExpectancy = this.expectancy * 24;
      return mercuryExpectancy + " years left on Mercury";
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
