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
