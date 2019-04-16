//Task#1
"use strict";

function compareArrays( arr1, arr2 ) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  if (arr1.length != arr2.length) {
    return false;
  }
  return arr1.every((v,i) => v === arr2[i]);
}
console.log('compareArrays');
console.log('-------------');
console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true
console.log(compareArrays([8, 1, 2, 5, 6, 1], [8, 1, 2, 5, 6, 1])); // true

function memoize(func, limit) {
  const results = [];
  return function() {
    const args = Array.from(arguments);
    let result;
    // search
    const refind = results.find(xmpl => compareArrays(xmpl.args, args));
    if(refind) {
      result = refind.result;
      console.log(`memoize - Result '${result}' found for args [${args}]`);
    } else {
      // execute
      result = func.apply(null, args);
      // memorize
      if(results.length >= limit) {
        results.pop();
      }
      results.unshift({
         args: args,
         result: result
      });
      console.log(`memoize - Result '${result}' calculated for args [${args}]`);
    }
    return result;
  }
}

const sum = function() {
  let s = 0;
  Array.from(arguments).forEach((element) => s += (element));
  console.log('sum - I am calculating...');
  return s;
};

const mSum5 = memoize(sum, 5);

console.log('');
console.log('memoize');
console.log('-------');
console.log('sum(1,2,3,4,5) =',sum(1,2,3,4,5));
console.log(mSum5(1,2));
console.log(mSum5(2,3,4));
console.log(mSum5(5));
console.log(mSum5(6,7,8,9,10));
console.log(mSum5(115,6,781));
console.log(mSum5(6,7));
console.log(mSum5(8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18));
console.log(mSum5(8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18));
console.log(mSum5(8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18));
