"use strict";
console.log('Task#1');
class Weapon {
  constructor ( data ) {
     this.name = data.name;
     this.attack = data.attack;
     this.durability = data.durability;
     this.full_durability = data.durability;
     this.range = data.range;
   }
  takeDamage(damage) {
    if(this.durability >= damage) {
      this.durability -= damage;
    } else {
      this.durability = 0;
    }
  }
  getDamage() {
    if (this.durability == 0) {
      return 0;
    } else if(this.durability == Infinity) {
      return this.attack;
    } else if(this.durability >= this.full_durability  * 0.3) {
      return this.attack;
    }  else if(this.durability > 0) {
      return  this.attack / 2;
    }
  }
  isBroken() {
    return this.durability == 0;
  }
  repair() {
    this.durability = this.full_durability;
  }
}

const hand1 = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

const bow1 = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

const sword1 = new Weapon({
  name: 'Меч',
  attack: 25,
  durability: 500,
  range: 1,
});

const knife1 = new Weapon({
  name: 'Нож',
  attack: 5,
  durability: 300,
  range: 1,
});

const staff1 = new Weapon({
  name: 'Посох',
  attack: 8,
  durability: 300,
  range: 2,
});

const long_bow1 = new Weapon({
  name: 'Длинный лук',
  attack: 15,
  durability: 200,
  range: 4,
});

const ax1 = new Weapon({
  name: 'Секира',
  attack: 27,
  durability: 800,
  range: 1,
});

const storm_staff1 = new Weapon({
  name: 'Посох Бури',
  attack: 10,
  durability: 300,
  range: 3,
});

// Task#2
class Hand extends Weapon {
  constructor() {
    super({
      name: 'Рука',
      attack: 1,
      durability: Infinity,
      range: 1,
    });
  }
};
const hand2 = new Hand();

class Bow extends Weapon {
  constructor() {
    super({
      name: 'Лук',
      attack: 10,
      durability: 200,
      range: 3,
    });
  }
};
const bow2 = new Bow();

class Sword extends Weapon {
  constructor() {
    super({
      name: 'Меч',
      attack: 25,
      durability: 500,
      range: 1,
    });
  }
};
const sword2 = new Sword();

class Knife extends Weapon {
  constructor() {
    super({
      name: 'Нож',
      attack: 5,
      durability: 300,
      range: 1,
    });
  }
};
const knife2 = new Knife();

class Staff extends Weapon {
  constructor() {
    super({
      name: 'Посох',
      attack: 10,
      durability: 300,
      range: 2,
    });
  }
};
const staff2 = new Staff();
console.log('Task#2');
console.log('name','attack','durability','range');
console.log('----','------','----------','-----');
console.log(hand2.name, hand2.attack, hand2.durability, hand2.range);
console.log(bow2.name, bow2.attack, bow2.durability, bow2.range);
console.log(sword2.name, sword2.attack, sword2.durability, sword2.range);
console.log(knife2.name, knife2.attack, knife2.durability, knife2.range);
console.log(staff2.name, staff2.attack, staff2.durability, staff2.range);

class Long_Bow extends Bow {
  constructor() {
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 3;
    this.version_of = this.__proto__.constructor.__proto__.name;
  }
};
const long_bow2 = new Long_Bow();

class Ax extends Sword {
  constructor() {
    super();
    this.name = 'Секира';
    this.version_of = this.__proto__.constructor.__proto__.name;
    this.attack = 27;
    this.durability = 800;
  }
};
const ax2 = new Ax();

class Storm_Staff extends Staff {
  constructor(data) {
    super();
    this.name = 'Посох Бури';
    this.version_of = this.__proto__.constructor.__proto__.name;
    this.attack =10;
    this.range = 3;
  }
};
const storm_staff2 = new Storm_Staff();

console.log('name', 'version of', 'attack','range','durability');
console.log('----', '----------', '------','-----','----------');
console.log(long_bow2.name, long_bow2.version_of, long_bow2.attack, long_bow2.range, long_bow2.durability);
console.log(ax2.name, ax2.version_of, ax2.attack, ax2.range, ax2.durability);
console.log(storm_staff2.name, storm_staff2.version_of, storm_staff2.attack, storm_staff2.range, storm_staff2.durability);

// Task#3
console.log('Task#3');
class StudentLog {

  constructor(name) {
    this._name_ = name;
  }

  getName() {
    return this._name_;
  }

  addGrade(grade, subject) {
    let addState = 1;
    if(typeof(grade) != 'number') {
      console.log(`Вы пытались поставить оценку '${grade}' по предмету '${subject}'. Оценка должна быть числом.`);
      return 0;
    }
    if(grade <= 0 || grade >5) {
      console.log(`Вы пытались поставить оценку'${grade}' по предмету '${subject}'. Оценка может принимать значения от 1 до 5`);
      return 0;
    }
    if(subject == '_name_') {
      console.log(`Неверное название предмета: ${subject}`)
      return 0;
    }
    if(!this[subject]) {
      this[subject] = [];
    }
    this[subject].push(grade);
    return this[subject].length;
  }

  getAverageBySubject(subject) {
    let sum = 0;
    let numOfGrades = 1;
    if(this[subject]) {
      if(subject == '_name_') {
        console.log(`Неверное название предмета: ${subject}`)
        return 0;
      }
      numOfGrades = this[subject].length;
      for(let i = 0; i <= numOfGrades - 1; i++ ) {
        sum += this[subject][i];
      }
    } else {
      console.log(`Предмет ${subject} не найден`);
    }
    return sum / numOfGrades;
  }

  getTotalAverage() {
    let totalSum = 0;
    let numOfSubjects = 0;
    for (var subject in this) {
      if (subject != '_name_') {
        totalSum += this.getAverageBySubject(subject);
        numOfSubjects++;
      }
    }
    return totalSum / ((numOfSubjects > 0)?numOfSubjects:1);
  }
}

const Carlos = new StudentLog('Carlos Castaneda');
console.log(`Имя: ${Carlos.getName()}`);
Carlos.addGrade(3,'algebra');
Carlos.addGrade(4,'algebra');
Carlos.addGrade(5,'algebra');
Carlos.addGrade(4,'geometry');
Carlos.addGrade(5,'geometry');
Carlos.addGrade(5,'geometry');
Carlos.addGrade(5,'marxism-leninism');
Carlos.addGrade(5,'marxism-leninism');
Carlos.addGrade('very good','marxism-leninism');
Carlos.addGrade(255,'marxism-leninism');
Carlos.addGrade(5,'Java Script Basic');
Carlos.addGrade(4,'Java Script Basic');
Carlos.addGrade(4,'Teachings Don Juan');
Carlos.addGrade(4,'Teachings Don Juan');
Carlos.addGrade(2,'_name_');
console.log('algebra',Carlos.getAverageBySubject('algebra'));
console.log('geometry',Carlos.getAverageBySubject('geometry'));
console.log('marxism-leninism',Carlos.getAverageBySubject('marxism-leninism'));
console.log('Java Script Basic',Carlos.getAverageBySubject('Java Script Basic'));
console.log('Teachings Don Juan',Carlos.getAverageBySubject('Teachings Don Juan'));
console.log('Unknown',Carlos.getAverageBySubject('Unknown'));
console.log(`Total average: ${Carlos.getTotalAverage()}`);
// console.log(Carlos);
