
/*EX 1-1

Considere a implementação de um de um escalonador de tarefas. 
Este sistema identifica a fila de processos com menor corrência e realiza a alocação.
A partir do código já implementado abaixo. Realize o desenvolvimento nos locais indicados
*/



var fila1=[];
var fila2=[];

function printFila() {
	
	console.log("Alocação Fila 1 = "+fila1.length);
	fila1.forEach(function(f){
		f.print();
	});
		console.log("Alocação Fila 2 ="+ fila2.length);
	fila2.forEach(function(f){
		f.print();
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
alocaTarefa(new job("Estudar ANGULA2"));
alocaTarefa(new job("Estudar PROGRAMAÇÃO"));
alocaTarefa(new job("Estudar OO"));
alocaTarefa(new job("Pula Carnaval"));

printFila();