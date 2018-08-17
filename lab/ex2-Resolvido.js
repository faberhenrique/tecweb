
/*EX 2


A partir da resolução do exercício anterior implemente uma alteração que informe a partir de uma página html 
os itens alocados no array em uma lista. 
*/
function start(){
var fila1=[];
var fila2=[];

function printFila() {
	
	console.log("Alocação Fila 1 = "+fila1.length);
      var div = document.getElementById("dadosFila1");
      div.appendChild(document.createTextNode("Alocação Fila 1="+fila1.length));
	  var ul = document.getElementById("Fila1");

	fila1.forEach(function(tarefa){
		  var li = document.createElement("li");
		  li.appendChild(document.createTextNode(tarefa.text));
		  ul.appendChild(li);

	});
	      var div = document.getElementById("dadosFila2");
      div.appendChild(document.createTextNode("Alocação Fila 2="+fila2.length));

	    var ul = document.getElementById("Fila2");

		console.log("Alocação Fila 2 ="+ fila2.length);
	fila2.forEach(function(tarefa){
		  var li = document.createElement("li");
		  li.appendChild(document.createTextNode(tarefa.text));
		  ul.appendChild(li);

	});

}

 function alocaTarefa (tarefa){
 	//console.log(tarefa);
	if(fila1.length < fila2.length){
		fila1.push(tarefa);
	}
	else{
		fila2.push(tarefa);
	}
}


function job (tarefa) {
	this.text = tarefa;
	this.print =  function(){
	console.log(this.text);}
}


alocaTarefa(new job("Estudar HTML"));
alocaTarefa(new job("Estudar CSS"));
alocaTarefa(new job("Estudar DOM"));
alocaTarefa(new job("Estudar JS"));
alocaTarefa(new job("Estudar MONGO"));
alocaTarefa(new job("Estudar NODE"));
alocaTarefa(new job("Estudar ANGULAR2"));
alocaTarefa(new job("Estudar PROGRAMAÇÃO"));
alocaTarefa(new job("Estudar OO"));
alocaTarefa(new job("Pula Carnaval"));
alocaTarefa(new job("Pula Carnaval"));

printFila();
}