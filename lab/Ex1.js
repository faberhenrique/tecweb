
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

//@TODO MÉTODO PARA ALOCAR FILA
//@TODO OBJETO JOB

alocaTarefa(new job("Estudar NODE"));
alocaTarefa(new job("Pula Carnaval"));

printFila();