console.log("==========================================================================================OBJECT FROM VARIABLES==========================================================================================");
let firstName = "John";
let lastName = "Lindquist";
console.log("PERSON:")
let person = {firstName, lastName}

console.log(person);
console.log("==========================================================================================OBJECT FROM VARIABLES2==========================================================================================");
let mascot = "Moose";
let team = {person, mascot};
console.log("TEAM:")
console.log(team);
console.log("==========================================================================================OBJECT FROM VARIABLES2==========================================================================================");
var company = "PUC"
var sector = {team,company};
console.log("COMPANY:")
console.log(sector);

