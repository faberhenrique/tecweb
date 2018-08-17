
/*EX 1

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
	if(fila1.length < fila2.length){
		fila1.push(tarefa);
	}
	else{
		fila2.push(tarefa);
	}
}


let job = {
	print(){console.log(("Tarefa sendo executada -->"+ this.text))}
};

job.text = "Estudar HTML"
alocaTarefa(job);

job.text = "Estudar CSS"
alocaTarefa(job);

job.text = "Estudar DOM"
alocaTarefa(job);

job.text = "Estudar JS"
alocaTarefa(job);
let job2 = job;
job2.text = "Estudar NODE"
alocaTarefa(job2);

job.text = "Estudar MONGODB"
alocaTarefa(job);

job.text = "Estudar ANGULAR2"
alocaTarefa(job);

job.text = "Estudar MYSQL"
alocaTarefa(job);

job.text = "Estudar PROGRAMAÇÃO"
alocaTarefa(job);

job.text = "Pular Carnaval"
alocaTarefa(job);

job.text = "Alocação Dinâmica"
alocaTarefa(job);

printFila();