
var carro;
exports.setCar = function(car) {
  carro = car;
};
exports.getCar = function() {
  console.log(carro);
  return carro;
};
exports.getPassageiros = function() {
	try {
		return carro.Passageiros;
	}
	catch(err) {
		return "Informação não cadastrada";
	}

};
exports.createCar = function(Passageiros,Marca){
	carro ={Passageiros,Marca};
}

/* TESTE

carro = require("./polimorfismo.js");
var fusca = {Passageiros:5,}*/