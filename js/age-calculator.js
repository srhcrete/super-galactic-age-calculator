export class Calculator {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  ageInSeconds(age) {
    var secondsAge = parseInt(age) * 365 * 24 * 60 * 60;
    return secondsAge;
  }
}
