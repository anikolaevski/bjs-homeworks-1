function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
    const birthDate = new Date(birthday);
    const diff = Date.now() - birthDate;
    let age = diff / 31556952000.00043;     // Age in years
    age += Math.floor(age) / ( 365 * 4 );   // Days for leap years
    return (age >= 18);
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
    
    if (typeof animal == "undefined") {
       return undefined;
    }
        
    if('sound' in animal) {
        return animal.sound;
     } else {
        return undefined;
     }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
    //console.log(marks);
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += parseInt(marks[i], 10);
    }
    return Math.round(sum / marks.length);
}