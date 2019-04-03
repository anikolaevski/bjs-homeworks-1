"use strict";
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = new Date(window.date.value); //Did not work without Date() creation

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let md = function (d1, d2) {
      let months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12;
      months -= d1.getMonth();
      months += d2.getMonth();
      return months <= 0 ? 0 : months;
    }
    let P = percent / 1200;
    let D = new Date();
    let n = md( D, date );
    let monthAmount = (amount - contribution) * (P + P / ((Math.pow((1 + P), n)) - 1 ));
    let totalAmount = monthAmount * n;
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    let result = 'Здравствуйте! Меня зовут '+((name)?name:'Аноним');
    return result;
}