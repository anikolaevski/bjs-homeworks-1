//Lesson#3
//Task#1
"use strict";
function getSolutions( a, b, c ) {
  let x1, x2; 
  let D = b ** 2 - 4 * a * c;
  if (D < 0) {
    return { D };
  } else if (D == 0) {
    x1 = -b / (2 * a);
    return { roots: { x1 }, D };
  } else if (D > 0) {
    x1 = (-b - Math.sqrt(D)) / (2 * a);
    x2 = (-b + Math.sqrt(D)) / (2 * a);
    return { roots: { x1, x2 }, D };
  }
}
function showSolutionsMessage(a,b,c) {
  let result = getSolutions( a, b, c );
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if(result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.D == 0 ) {
    console.log(`Уравнение имеет один корень: X₁=${result.roots.x1}`);
  } else if (result.D > 0 ) {
    console.log(`Уравнение имеет два корня: X₁=${result.roots.x1}, X₂=${result.roots.x2}`);
  }  
}
showSolutionsMessage(1,2,3);
showSolutionsMessage(2,4,2);
showSolutionsMessage(7,20,-3);

//Task#2
function getPersonData( secretData ) {
  let dName = function ( n ) {
    return (n == 0)?'Родриго':'Эмильо'
    }
  return { firstName: dName(secretData.aaa), lastName: dName(secretData.bbb) };
}
console.log(getPersonData({ aaa:0, bbb:0 }));
console.log(getPersonData({ aaa:0, bbb:1 }));
console.log(getPersonData({ aaa:1, bbb:0 }));
console.log(getPersonData({ aaa:1, bbb:1 }));

//Task#3
function getAverageScore( data ) {
  let result = new Object();
  let avgVal = function ( dat ) {
    let mySum = 0;
    for (let i=0; i<dat.length; i++) {
      mySum += dat[i];
    }
    return (dat.length>0)?mySum / dat.length:0;
   };
  let resultArray = [];
  for (let prop in data ) {
    result[prop] = avgVal(data[prop]);
    resultArray.unshift(avgVal(data[prop]));
   }
   result.average = avgVal(resultArray);
  return result;
}
console.log(getAverageScore(
{
  algebra:[2,4,5,2,3,4],
  geometry:[2,4,5],
  russian:[3,3,4,5],
  physics:[5,5],
  music:[2,2,6],
  english:[4,4,3],
  poetry:[5,3,4],
  chemistry:[2],
  french:[4,4]
}
));
