console.log("==========================================================================================NO BLOCK REAL==========================================================================================");

var message = "hi";
{
  var message = "bye";
}

console.log(message); 
console.log("==========================================================================================FUNCTION BLOCK REAL==========================================================================================");

var message2 = "hi";

function greet(){
  var message2 = "bye";
}
greet();
console.log(message2); 

console.log("==========================================================================================BLOCK REAL==========================================================================================");

let message3 = "hi";
{
  let message3 = "bye";
  console.log("teste");
  console.log(message3);

}

console.log(message3); 


console.log("==========================================================================================UTILIZAÇÃO REAL==========================================================================================");


var fs = [];
  for(var i = 0; i < 10; i++) {
    fs.push(i)
  }
fs.forEach(function (f) {
  console.log(f);
})
console.log("==========================================================================================UTILIZAÇÃO REAL LET==========================================================================================");


var fs2 = [];
  for(let i = 0; i < 10; i++) {
    fs2.push(function (){
      console.log(i); // 0 1 2 3 4 5 6 7 8 9
    })
  }

fs2.forEach(function (f) {
  f(); 
})


console.log("==========================================================================================DIFERENCIAÇÃO ES5==========================================================================================");
// ES5
function varFunc(){
  var previous = 0;
  var current = 1;
  var i;
  var temp;

  for(i = 0; i < 10; i+=1){
    temp = previous;
    previous = current;
    current = temp + current;
  }
}

console.log("==========================================================================================DIFERENCIAÇÃO ES6==========================================================================================");// ES6

function letFunc(){
  let previous = 0;
  let current = 1;

  for(let i = 0; i < 10; i+=1){
    let temp = previous;
    previous = current;
    current = temp + current;
  }
}