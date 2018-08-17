console.log("==========================================================================================CREATE OBJ==========================================================================================");


var obj = {
  color: "blue"
}
console.log(obj.color); // blue


console.log("==========================================================================================DESTRUCT OBJ==========================================================================================");


var {color} = {
  color: "blue"
}
console.log(color); // blue

console.log("==========================================================================================DESTRUCT OBJ2==========================================================================================");

var {color, position} = {
  color: "blue",
  name: "John",
  state: "New York",
  position: "Forward"
}

console.log(color);
console.log(position);
console.log("==========================================================================================DESTRUCT OBJ3==========================================================================================");

function generateObj() {
  return {
    color: "blue",
    name: "John",
    state: "New York",
    position: "Forward"
  }
}


var {name:firstname, state:location} = generateObj();

console.log(firstname); // John
console.log(location); // New York
console.log(this);


console.log("==========================================================================================DESTRUCT OBJ3==========================================================================================");

var people = [
  {
    "firstName": "Skyler",
    "lastName": "Carroll",
    "phone": "1-429-754-5027",
    "email": "Cras.vehicula.alique@diamProin.ca",
    "address": "P.O. Box 171, 1135 Feugiat St."
  },
  {
    "firstName": "Kylynn",
    "lastName": "Madden",
    "phone": "1-637-627-2810",
    "email": "mollis.Duis@ante.co.uk",
    "address": "993-6353 Aliquet, Street"
  },
]



people.forEach(({firstName})=> console.log(firstName))

var [,Skyler] = people;

function logEmail({email}){
  console.log(email);
}

console.log("==========================================================================================DESTRUCT OBJ4==========================================================================================");


logEmail(Skyler) // Cras.vehicula.aliquet@diamProin.ca