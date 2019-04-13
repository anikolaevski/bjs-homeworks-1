"use strict";
//Task#1
class Weapon {
  constructor ( data ) {
     this.name = data.name;
     this.attack = data.attack;
     this.durability = data.durability;
     this.full_durability = data.durability;
     this.range = data.range;
   }
  takeDamage(damage) {
    if (this.durability == Infinity) {
      null;
    } else if(this.durability >= damage) {
      this.durability -= damage;
    } else {
      this.durability = 0;
    }
  }
  getDamage() {
    if (this.durability == 0) {
      return 0;
    } else if(this.durability == Infinity) {
      return Infinity;
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

//hand.takeDamage(20);
//console.log(hand);
//hand.takeDamage(Infinity);
//console.log(hand);

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

//Task#2
class hand extends Weapon {
  constructor() {
    super({
      name: 'Рука',
      attack: 1,
      durability: Infinity,
      range: 1,
    });
  }
};
const hand2 = new hand();

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

class sword extends Weapon {
  constructor() {
    super({
      name: 'Меч',
      attack: 25,
      durability: 500,
      range: 1,
    });
  }
};
const sword2 = new sword();

class knife extends Weapon {
  constructor() {
    super({
      name: 'Нож',
      attack: 5,
      durability: 300,
      range: 1,
    });
  }
};
const knife2 = new knife();

class staff extends Weapon {
  constructor() {
    super({
      name: 'Посох',
      attack: 10,
      durability: 300,
      range: 2,
    });
  }
};
const staff2 = new staff();

console.log('name','attack','durability','range'); 
console.log('----','------','----------','-----'); 
console.log(hand2.name, hand2.attack, hand2.durability, hand2.range); 
console.log(bow2.name, bow2.attack, bow2.durability, bow2.range); 
console.log(sword2.name, sword2.attack, sword2.durability, sword2.range); 
console.log(knife2.name, knife2.attack, knife2.durability, knife2.range); 
console.log(staff2.name, staff2.attack, staff2.durability, staff2.range); 

class long_bow extends Bow {
  constructor(data) {
    super(data);
    this.name = data.name;
    this.version_of = data.version_of;
    this.attack = data.attack;
    this.range = data.range;
  }
};
const long_bow2 = new long_bow({
  name: 'Длинный лук',
  version_of: 'Лук',
  attack: 15,
  range: 3,
});

class ax extends sword {
  constructor(data) {
    super(data);
    this.name = data.name;
    this.version_of = data.version_of;
    this.attack = data.attack;
    this.durability = data.durability;
  }
};
const ax2 = new ax({
  name: 'Секира',
  version_of: 'Меч',
  attack: 27,
  durability: 800
});

class storm_staff extends staff {
  constructor(data) {
    super(data);
    this.name = data.name;
    this.version_of = data.version_of;
    this.attack = data.attack;
    this.range = data.range;
  }
};
const storm_staff2 = new storm_staff({
  name: 'Посох Бури',
  version_of: 'Посох',
  attack: 10,
  range: 3
});

console.log('');
console.log('name', 'version of', 'attack','range','durability'); 
console.log('----', '----------', '------','-----','----------'); 
console.log(long_bow2.name, long_bow2.version_of, long_bow2.attack, long_bow2.range, long_bow2.durability); 
console.log(ax2.name, ax2.version_of, ax2.attack, ax2.range, ax2.durability); 
console.log(storm_staff2.name, storm_staff2.version_of, storm_staff2.attack, storm_staff2.range, storm_staff2.durability); 

//Task#3
class StudentLog {
  constructor(name) {
    this.name = name;
    this.grades = [];
  }
  getName() {
    return this.name;
  }
  addGrade(grade, subject) {
    if(typeof(grade) != 'number') {
      console.log(`Вы пытались поставить оценку '${grade}' по предмету '${subject}'. Оценка должна быть числом.`);
      return this.grades.length;
    }
    if(grade <= 0 || grade >5) {
      console.log(`Вы пытались поставить оценку'${grade}' по предмету '${subject}'. Оценка может принимать значения от 1 до 5`);
      return this.grades.length;
    }
    this.grades.push({grade: grade, subject: subject});
    return this.grades.length;
  }
  getAverageBySubject(subject) {
    
  }
}
const Ivanoff = new StudentLog('Иванов');
console.log('');
console.log('Task#3');
console.log('------');
console.log(Ivanoff);
console.log(Ivanoff.addGrade(3,'algebra'));
console.log(Ivanoff.addGrade(4,'algebra'));
console.log(Ivanoff.addGrade(5,'algebra'));
console.log(Ivanoff.addGrade(4,'geometry'));
console.log(Ivanoff.addGrade(5,'geometry'));
console.log(Ivanoff.addGrade(5,'geometry'));
console.log(Ivanoff.addGrade(5,'marxism-leninism'));
console.log(Ivanoff.addGrade(5,'marxism-leninism'));
console.log(Ivanoff.addGrade('very good','marxism-leninism'));
console.log(Ivanoff.addGrade(255,'marxism-leninism'));
console.log(Ivanoff);
