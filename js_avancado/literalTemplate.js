console.log("==========================================================================================SIMPLE CONCAT==========================================================================================");
var salutation = "Hello";
var greeting = salutation + ", World";

console.log(greeting);

console.log("==========================================================================================INPUT VARIABLES STRING==========================================================================================");

var greeting2 = `${salutation}, World`;
console.log(greeting2);

console.log("==========================================================================================STRING TEMPLATE==========================================================================================");
var greeting3 = `

${salutation}, 

    World


`;

console.log(greeting3);

var place = "planet";
var greeting4 = `

${salutation}, 
  You
    Crazy       ${place}

    How
  Are
      You  

`;

function aula(letra = 'R'){
  console.log(`

    O
      ${letra}ato
`)
}
aula();

console.log(greeting4	);
console.log("==========================================================================================Math TEMPLATE==========================================================================================");

var x = 1;
var y = 2;
var equation = `${ x } + ${ y } = ${x + y}`

console.log(equation); // "1 + 2 = 3"
console.log("==========================================================================================Tagged template strings==========================================================================================");

function tag(strings, ...values){
  console.log(strings); // [ 'It\'s', 'I\'m sleepy' ]
  console.log(values);  // [ 15 ]
}

var message = tag`Its ${new Date().getHours()} Im sleepy`;

console.log(message);

console.log("==========================================================================================Tagged template strings==========================================================================================");

function tag2(strings, ...values){
  if(values[0] < 20){
    values[1] = " awake";
  }
  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}

var message2 = tag2`Its ${new Date().getHours()} Im sleepy`;
console.log(message2);
