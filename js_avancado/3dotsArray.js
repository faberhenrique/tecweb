console.log("==========================================================================================PRINT ARRAY==========================================================================================");
console.log([ 1, 2, 3]); // [1, 2, 3]
console.log("==========================================================================================PRINT VALUES OF ARRAY==========================================================================================");
console.log(...[ 1, 2, 3]); // [1, 2, 3]
console.log("==========================================================================================CONCAT ARRAYS==========================================================================================");
let first = [ 1, 2, 3];
let second = [ 4, 5, 6];

first.push(second);

console.log(first); // [ 1, 2, 3, [ 4, 5, 6] ]

console.log("==========================================================================================CONCAT VALUES OF ARRAYS==========================================================================================");
let first2 = [ 1, 2, 3];
let second2 = [ 4, 5, 6, 7];

first2.push(...second2);

console.log(first2); // [ 1, 2, 3, [ 4, 5, 6] ]


console.log("==========================================================================================SUM VALUES OF ARRAYS==========================================================================================");

function addThreeThings( a, b, c){
  let result = a + b + c;
  console.log(result); // 6
}

addThreeThings(...first);
