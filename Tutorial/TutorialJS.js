/*

                TUTORIAL JAVASCRIPT -- FABER XAVIER
Este tutorial foi desenvolvido baseado cursos gratuitos da CodeAcademy e Udacity.
Contudo, foram realizado ajustes visando auxiliar o aprendizado.

*/
//            Criaçaão de variaveis
/*
Variaveis no Javascript são dinamicamente e implicitamente tipadas. Desta forma,
não se faz necessário conversōes e definicçoōes de tipo.
*/

//  Criando variável de texto
//  let foi criado no ECS6
/*

            Características:

As variáveis declaradas com let podem ser reatribuídas, mas não podem ser redeclaradas no mesmo escopo.

*/
let texto
texto = 'Tutorial JS'

//  console.log() é o método utilizado para exibir informaçōes no terminal
//  Operador de + é utilizado para realizar contatenação no JS

console.log('Iniciando o ' + texto)

//  A tipagem dinâmica é realizada abaixo

texto = 90

console.log('Iniciando o ' + texto)

//  Variaveis string permitem que cada caracter seja acessa de maneira individual como um vetor
let frase = 'Meu primeiro código JS'
console.log('Considere a frase: ' + frase)
console.log('O 5 caracter da frase acima é: ' + frase[4])
//  Contudo o memso não pode ser aplicado em outros tipos

console.log('Teste acesso ao primeiro algarismo do nuúmero: ' + texto)
console.log('Retorno: ' + texto[0])

/*

            OPERADORES LÓGICOS

*/

let string1 = 'teste'
let string2 = 'Teste'
//  O console abaixo utiliza o literal Template do ECS6
//  Podemos perceber que utilizando o caracter ` podemos utilizar strings e realizar operaçōes durante a escrita de
//  uma string
console.log(`A String 1: ${string1} e a String 2: ${string2}.
são iguais? ${string1 === string2}`)

/*

Acima utilizamos o operador === que representa equidade. Esse operador executa testes de valor e tipo
ex: 3 == '3' (True)
3 === '3' (False)

*/
console.log(3 == '3')
console.log(3 === '3')
/*
            Outros Operadores lógicos são:
> (maior)
< (menor)
!= (diferente)
== (igualdade de valor)
&& (AND)
|| (OR)
! (NOT)
*/
/*
            Exercicio 1:
Crie a seguinte estrutura similar à imagem no repositório literalTemplateEX
*/
console.log('INICIANDO PARTE DE CONTROLES')

/*
            "Verdade" e "Falsidade"
Variavies que não são necessariamente veradeiro ou falso são interpretados pelo JS como TRUE ou FALSE
em determninadas condicçōes:
            FALSOS
Boolean = false
null type
undefined type
INT 0
empty string ""
NaN
*/
console.log('TESTES DE TRUE OR FALSE')
console.log('0 é reconhecindo como verdadeiro? ' + 0 == true)
console.log('0 é reconhecido como falso? ' + 0 == false)
/*
            VERDADEIRO
Boolean = true
Inteiros > 0 (ex:42)
[]
{}
*/
console.log('TESTES 2 DE TRUE OR FALSE')
if ([]) {
    console.log('[] TRUE')
}
if ({}) {
  console.log('{} TRUE')
}
if (42) {
  console.log('>0  TRUE')
}
if ('null') {
  console.log('Strings diferentes de ""  TRUE')
}
/*
            CONTROLES

Os controles  no JS são similares a grande parte das linguagens de programcaçaão

            CONTROLES CONDICIONAIS:
if
else
else if

            CONTROLES DE FLUXO:
for
while
do...while
switch...case
*/
let numbers = []
// Loop para gerar um vetor de 10 posicoes com valores aleatorios
console.log('Gerando 10 valores aleatórios')
for (let i = 0; i < 10; i++) {
  numbers.push(Math.round(100 * Math.random()))
}
console.log('Valores gerados:\n' + numbers)
// Iniciando método para encontrar menor número criado
let control = 0; let menor = Math.min()
while (control < numbers.length) {
  if (numbers[control] < menor) {
    menor = numbers[control]
  }
  control++
}
console.log('O menor valor encontrado foi: ' + menor)

// EX2: Altere o codigo acima para que ele encontre também o maior nuúmero do vetor
/*
            OPERADOR TERNARIO
*/
// O operador ternario consite de um teste onde caso a condicao antes do ? seja verdadeira o comando é executado
// caso contrario o segundo
let isGoing = true
let color = isGoing ? 'green' : 'red'
console.log(color)
// Vamos verificar utiliznando o vetor de valores alatorios
console.log(menor < 10 ? 'Valor selecionado no vetor foi menor que 10' : 'Valor selecionado foi maior que 10')
/*
            ARRAYS
Assim como visto na variavel numbers os arrays são definidos utilizando o caracter []
Entretanto, estruturas mais complexas podem ser criadas como arrays aninhados
O acesso aos valores seguem o mesmo padrao de linguagem como c# e java, ou seja, o array é zero indexado
*/
let notasAlunos = [numbers, ['Aluno1', 'Aluno2', 'Aluno3', 'Aluno4', 'Aluno5', 'Aluno6', 'Aluno7', 'Aluno8', 'Aluno9', 'Aluno10']]
console.log('Novo array \n' + notasAlunos)
console.log('Novo array parte numbers \n' + notasAlunos[0])
console.log('Novo array parte nomes \n' + notasAlunos[1])
// Baseado em linguagens como Python e Perl o ECS6 apresentou o acesso aos valores de maneira desconstruida
// Recuperando os 3 maiores valores selecionados, desconsiderando o quarto e recuperando o quinto

let [n1, n2, n3, , n5] = numbers.sort().reverse()
let newArray = [n1, n2, n3, n5]
console.log(newArray)
console.log(numbers)
/*

            Inserindo e removendo valores
Existem principalmente 3 métodos para inserir valores no JS
push -> Método que insere no final da array
splice -> Método que insere e remove elemento em qualquer posicao do array
pop --> Remove elementos do fim do array
*/
newArray.push(99)
console.log('Valor 99 inserido no final do Array \n' + newArray)
newArray.pop()
console.log('Valor 99 removido do final do Array \n' + newArray)
let first = newArray.splice(0, 1)
console.log('Removido o primeiro valor do Array \n' + newArray)
newArray.splice(0, 0, first)
console.log('Retornando o primeiro valor do Array \n' + newArray)
newArray.splice(0, 1, -12)
console.log('Substituindo o primeiro valor do Array por -12 \n' + newArray)
/*

            ForEach
O foreach consiste de um método presente nos arrays que permite que eles sejam percorridos
sem a necessidade de utilizar uma estrutura de controle de fluxo como for e while

*/
// Utilizamos o Arrow operador do ECS6 no forEachs abaixo. Os métodos irão imprimir todos os valores do array aninhado notasAlunos
notasAlunos.forEach(elementoDeNotas => elementoDeNotas.forEach(elementoDoVetorAninhado => console.log(elementoDoVetorAninhado)))
// O comando acima antes do ECS6 seria escrito da seguinte forma
console.log(`METODO DE ESCRITA ECMS5

notasAlunos.forEach(function (elementoDeNotas) {
  elementoDeNotas.forEach(function (elementoDoVetorAninhado) {
    console.log(elementoDoVetorAninhado)
  })
})
Retorno`)
notasAlunos.forEach(function (elementoDeNotas) {
  elementoDeNotas.forEach(function (elementoDoVetorAninhado) {
    console.log(elementoDoVetorAninhado)
  })
})
/*          Exercicio:
Sabendo que o forEach recebe uma funcao onde o primeiro parametro representa o elemento e o segundo a posicao do elemento
(function (elementoDeNotas, posicaoElemento))
altere o codigo acima para que ele exiba tanto o valor do elemento quanto a posicao que ele ocupa.
*/
//          MAP FUNCTION
// Em determinadas situaçōes pode ser necessaria a criacao de um novo array a partir de operacoes nos valores já salvos
// Nesses casos a funçaão MAP é a ideal pois a mesma retorna o array editado a partir de uma funçaão definida pelo usuário.

let alunosPuc = notasAlunos[1].map(nome => {
  nome = nome.replace('Aluno', 'Aluno Puc ')
  return nome
})
console.log(alunosPuc)
/*
            Funçōes
Em linhas gerais as funçōes no JS seguem o mesmo padrão de linguagens como Java e C#.
Contudo, em JS existem duas possibilidades não presentes nessas linguagens.
1) Atribuir à uma variavel uma funcao
2) Utilizar funcoes anonimas
*/

// Exemplo 1
// A funcao falar utiliza da nova funcionalidade que permite a definicao de valores Default nos parametros
let falar = function (p1, p2 = 'World') {
  return console.log(p1 + p2)
}
console.log(falar)
falar('Hello ', 'World')
// Exemplo 2
function acaoPersonagem (acao, parametros) {
  acao(parametros)
}
acaoPersonagem(falar, 'JS')

/*
            Objetos
Provavelmente a estrutura utilizada pelos objetos em JS seja uma das principais caracteristicas
da linguagem. Isso porque tal estrutura é aproveitada em diversas tecnologias como o MongoDB. 
Denominada de JavaScript Object Notation (JSON) os objetos consistem de uma notaçaão onde são encapsulados 
por um bloco { } e suas propriedades e valores são separados por : (key: value). 
*/
// Exemplo1

let myObj = {
  prop1: true,
  prop2: 'Minha String',
  prop3: 13,
  prop4: [12, 13, 15, 17]
}

/*
            Fim do módulo básico
*/
/*
            Exercícios
Alguns dos exercicios abaixo foram retirados do livro:
Fundamentos Da Programaçao De Computadores(Ana Fernanda Gomes Ascencio, Edilene Aparecida Veneruchi De Campos)
Editora	Longman Do Brasil


1)

Foi realizada uma pesquisa de algumas características de N pessoas. Para cada registro do tipo
PESSOA foram coletados os seguintes dados: nome, sexo (M ou F), altura e idade.
Implemente os seguintes módulos:
a) um procedimento que receba por parâmetro um vetor de pessoas e a quantidade
N, preencha os dados de cada uma das pessoas. Essas informações serão geradas alatoriamente
Considere que os dados de uma pessoa são apresentados em uma mesma linha, separados por
;. Por exemplo:

Valéria;F;1.75;19
Faça:

b) Uma função que receba por parâmetro um vetor de pessoas, calcule e retorne a
média de idade daquelas com mais de 18 anos e altura superior a 1,60 m;
c) Uma função que receba por parâmetro um vetor de pessoas, calcule e retorne a
quantidade existente do sexo feminino e que a idade esteja entre 20 e 45 anos (inclusive);
d) Uma função que receba por parâmetro um vetor de pessoas, calcule e retorne o
percentual de homens.



2)

A operação Lava Jato consiste de um conjunto de
investigações da Polícia Federal Brasileira que tem como foco apurar esquemas de
lavagem de dinheiro. Iniciada em 17 de março de 2014, a operação já chega a
155 acordos de delação premiada, estes acordos são seguidos de depoimentos e
entrega de provas. A partir dos depoimentos colhidos são abertos inquéritos sobre
as pessoas citadas no esquema. Desta forma, foram mais de 3 mil processos
instaurados e esse volume cresce a cada dia. Com esse crescimento a PF entrou
em contato com a PUC Minas solicitando uma solução que permita a busca da
informação sobre os investigados. Aplicando os conhecimentos vistos em sala de
aula implemente uma estrutura que receba as
informações do arquivo para cada investigado: 
1) identificador do investigado
2) nome do investigado
3) data de início da investigação
4) valor recebido indevidamente pelo investigado. Além disso, o programa deve viabilizar as seguintes consultas para
cada nome de investigado que o usuário queira verificar:
		*O período total que o investigado esteve cometendo crimes
		*O total recebido pelo Investigado
		*O maior valor recebido pelo Investigado
		*Listagem de todas as informações relacionadas com o investigado
O uso de módulos, a parametrização e a comunicação entre eles fica a seu
critério.

ESTRUTURA DO ARQUIVO DA PF:

ID DO INVESTIGADO;NOME DO INVESTIGADO;DATA DE INICIO DA
let dados = [[172,Mineirinho,19/5/2014,982096] ,[193,Paris,30/4/2016,605012] ,[142,Itacaré,9/7/2016,903654] ,[192,Parente,2/10/2015,421423] ,[228,Timão,28/11/2014,305073] ,[176,Montanha,26/7/2014,992008] ,[231,Trincaferro,25/2/2016,459356] ,[229,Tio,25/9/2017,203784] ,[77,Colorido,29/6/2015,787384] ,[172,Mineirinho,7/7/2015,262550] ,[236,Vizinho,9/2/2015,389248] ,[77,Colorido,4/5/2015,106851] ,[166,Manaus,3/7/2014,980073] ,[149,Jangada,12/8/2014,483009] ,[202,Pescador,9/5/2016,512007] ,[133,Grisalho,12/7/2016,159167] ,[40,Boca mole,4/5/2016,368048] ,[81,Conquistador,9/10/2015,828374] ,[37,Biscoito,12/2/2016,796437] ,[84,Correios,26/10/2014,781403] ,[183,Nervosinho,6/4/2015,944713] ,[172,Mineirinho,5/4/2015,958720] ,[206,Poste,17/5/2014,706497] ,[110,Fantasma,19/3/2017,752378] ,[41,Bocão,6/10/2016,403403] ,[201,Persa,14/9/2016,190943] ,[19,Atravessador,14/8/2017,313847] ,[26,Baixada,13/9/2015,401768] ,[152,Jornalista,12/9/2016,118902] ,[226,Suíça,26/1/2016,268260] ,[6,Alemão,11/9/2015,888697] ,[164,Maçaranduba,28/8/2015,981379] ,[95,Desesperado,3/5/2017,972236] ,[172,Mineirinho,23/3/2016,616955] ,[172,Mineirinho,10/1/2016,551496] ,[12,Amigo C,12/6/2014,688025] ,[127,Goleiro,25/11/2014,405548] ,[47,Boquinha,11/5/2016,717525] ,[153,Jovem,20/7/2015,744568] ,[32,Bateria,27/5/2014,689545] ,[78,Coluna,15/10/2017,994642] ,[231,Trincaferro,1/8/2016,384160] ,[149,Jangada,27/2/2017,286673] ,[226,Suíça,28/1/2016,126945] ,[61,Campari,16/7/2014,389529] ,[153,Jovem,8/8/2016,305649] ,[51,Brasília,2/7/2016,365781] ,[172,Mineirinho,7/11/2016,626153] ,[234,Verdinho,14/2/2014,901807] ,[17,Aspirina,5/2/2017,972073] ,[18,Atleta,18/2/2017,355702] ,[174,Missa,23/2/2015,949329] ,[235,Viagra,23/11/2015,168397] ,[199,Pelé,1/4/2014,972121] ,[16,Asfalto,21/6/2016,631618] ,[1,Acelerado,24/4/2015,470204] ,[126,Garoto,8/6/2015,162807] ,[33,Belém,17/6/2017,203777] ,[172,Mineirinho,22/10/2015,412891] ,[235,Viagra,15/9/2015,611700] ,[21,Azeitona,4/8/2015,905045] ,[63,Carajás,1/11/2014,553260] ,[232,Tuca,4/3/2016,766439] ,[35,Bico,15/1/2015,977244] ,[53,Bronca,27/4/2016,539121] ,[39,Boa Vista,8/7/2015,967140] ,[26,Baixada,25/9/2015,531910] ,[193,Paris,14/9/2016,498203] ,[217,Roberval Taylor,28/3/2016,217901] ,[112,Feia,6/4/2014,928448] ,[189,Padre,3/6/2017,264266] ,[172,Mineirinho,24/9/2014,427800] ,[143,Italiano,22/2/2016,348750] ,[216,Rio,8/2/2016,865964] ,[199,Pelé,6/2/2017,377817] ,[78,Coluna,6/3/2015,412638] ,[33,Belém,11/7/2017,461004] ,[76,Cobra,26/2/2015,196479] ,[149,Jangada,8/3/2014,900170] ,[226,Suíça,16/11/2016,332991] ,[121,Flamengo,17/7/2016,669814] ,[50,Buzu,26/8/2016,952159] ,[169,Menino da floresta,29/5/2015,795425] ,[172,Mineirinho,13/3/2016,358742] ,[70,Cérebro,12/5/2017,249238] ,[143,Italiano,27/7/2016,617906] ,[145,Itambé,23/2/2014,325034] ,[133,Grisalho,14/8/2014,128082] ,[166,Manaus,2/7/2014,762438] ,[32,Bateria,13/11/2016,757538] ,[190,Padrinho,26/4/2016,338785] ,[147,Itumbiara,16/1/2015,895753] ,[57,Candomblé,25/2/2017,144667] ,[164,Maçaranduba,14/2/2016,837594] ,[17,Aspirina,7/2/2014,619669] ,[172,Mineirinho,23/3/2016,894685] ,[216,Rio,8/3/2014,929419] ,[95,Desesperado,22/5/2017,535287] ,[87,Curitiba,14/5/2014,333620] ,[98,Diplomata,30/5/2016,689772] ,[227,Teco,27/1/2016,392642] ,[181,Navegante,6/3/2016,507213] ,[39,Boa Vista,9/3/2015,403933] ,[111,Fazendão,3/2/2015,257752] ,[106,Escuro,6/1/2014,541740] ,[142,Itacaré,11/10/2017,927251] ,[134,Grosseiro,28/1/2017,865144] ,[141,Itabuna,21/9/2015,714687] ,[172,Mineirinho,16/10/2014,308278] ,[80,Comuna,4/9/2015,584949] ,[233,Vaqueiro,15/8/2017,981088] ,[25,Baianinho,30/9/2014,130913] ,[36,Bitelo,8/7/2014,561083] ,[129,Grego,7/3/2017,305825] ,[122,Fodinha,22/10/2014,911240] ,[192,Parente,11/11/2017,190093] ,[143,Italiano,13/7/2016,198692] ,[59,Caldo,28/8/2015,350385] ,[220,Santo André,24/4/2016,483771] ,[1,Acelerado,1/10/2015,887042] ,[172,Mineirinho,3/11/2014,794330] ,[64,Carmem,5/6/2016,557121] ,[37,Biscoito,22/10/2015,709459] ,[69,Centroavante,1/4/2017,767554] ,[165,Magma,3/4/2014,220749] ,[130,Grenal,14/6/2015,214493] ,[67,Castor,30/9/2016,330027] ,[231,Trincaferro,28/2/2014,717200] ,[58,Campinas,3/10/2016,383672] ,[208,Primo,8/5/2014,284823] ,[6,Alemão,3/11/2014,487397] ,[172,Mineirinho,3/9/2014,589927] ,[19,Atravessador,19/3/2016,347787] ,[46,Bonitinho,25/5/2017,237097] ,[11,Amigo,18/2/2017,423683] ,[116,Filho,17/5/2016,729359] ,[67,Castor,2/11/2016,205821] ,[210,Prosador,16/7/2016,807836] ,[159,Lento,10/8/2014,123205] ,[174,Missa,21/9/2015,889675] ,[219,Sábado,4/1/2017,406257] ,[46,Bonitinho,11/8/2017,943683] ,[172,Mineirinho,14/9/2014,604191] ,[32,Bateria,26/3/2014,689242] ,[206,Poste,10/8/2014,893027] ,[234,Verdinho,17/8/2015,999694] ,[62,Canário,3/1/2017,480638] ,[148,Jacaré,25/7/2016,178344] ,[202,Pescador,22/1/2017,322147] ,[148,Jacaré,24/5/2016,133132] ,[82,Contador,14/6/2017,364920] ,[23,Babel,9/11/2017,313012] ,[235,Viagra,19/6/2017,729556] ,[172,Mineirinho,7/9/2014,870361] ,[28,Barão,17/3/2016,165792] ,[49,Botafogo,12/3/2016,879399] ,[98,Diplomata,9/10/2014,781125] ,[231,Trincaferro,7/6/2017,485033] ,[194,Parreira,24/11/2016,143477] ,[87,Curitiba,8/9/2017,601293] ,[93,Dentada,10/3/2014,986886] ,[177,Montanha,5/1/2015,984359] ,[170,Mercedes,19/9/2015,482202] ,[92,Dengo,23/2/2014,885376] ,[47,Boquinha,2/4/2014,817298] ,[172,Mineirinho,23/8/2016,843379] ,[57,Candomblé,4/8/2017,825745] ,[42,Boiadeiro,27/10/2015,840410] ,[184,Neto,15/6/2016,895462] ,[172,Mineirinho,22/10/2016,662432] ,[16,Asfalto,2/8/2015,982054] ,[78,Coluna,9/10/2014,542730] ,[94,Dentuço,2/8/2017,850972] ,[19,Atravessador,13/2/2014,918704] ,[80,Comuna,30/5/2014,536730] ,[26,Baixada,3/2/2014,407336] ,[65,Caranguejo,1/6/2015,212564] ,[172,Mineirinho,7/2/2014,403628] ,[127,Goleiro,18/1/2015,339687] ,[96,Diamante,27/8/2014,412018] ,[11,Amigo,14/2/2014,312920] ,[35,Bico,1/1/2014,712660] ,[16,Asfalto,30/10/2016,446809] ,[96,Diamante,13/4/2017,918154] ,[167,Masculina,21/6/2017,119875] ,[60,Calvo,5/6/2015,945413] ,[238,Zagueiro,9/11/2014,561150] ,[106,Escuro,5/10/2014,521951] ,[25,Baianinho,7/10/2015,228105] ,[172,Mineirinho,25/7/2014,464458] ,[202,Pescador,12/1/2014,828084] ,[34,Benzedor,19/9/2014,563817] ,[2,Aço,29/11/2017,776279] ,[59,Caldo,19/10/2016,946082] ,[112,Feia,2/1/2014,449015] ,[14,Aquático,7/7/2014,913451] ,[59,Caldo,3/11/2015,587482] ,[49,Botafogo,14/11/2015,854265] ,[21,Azeitona,10/2/2014,244362] ,[74,Chorão,18/3/2015,692057] ,[154,Jujuba,15/5/2014,847461] ,[166,Manaus,13/9/2016,350388] ,[172,Mineirinho,10/9/2017,770497] ,[137,Igreja,2/1/2015,618339] ,[134,Grosseiro,17/4/2016,216388] ,[59,Caldo,24/2/2017,860957] ,[80,Comuna,9/6/2016,828534] ,[15,Aracaju,29/3/2015,489198] ,[107,Escritor,29/8/2016,962345] ,[131,Gripe,27/4/2017,646430] ,[86,Cruzeiro do Sul,13/8/2015,494153] ,[180,Navalha,18/2/2015,629053] ,[162,Macapá,6/6/2017,258436] ,[172,Mineirinho,2/2/2016,211753] ,[72,Chaveiro,2/1/2016,319534] ,[112,Feia,5/10/2015,884885] ,[206,Poste,21/10/2014,344107] ,[121,Flamengo,28/3/2015,997730] ,[159,Lento,6/10/2016,597266] ,[129,Grego,29/7/2017,209468] ,[223,Silo,13/2/2015,124405] ,[152,Jornalista,18/9/2015,235173] ,[224,Solução,18/8/2016,766103] ,[146,Itatiaia,11/1/2017,392202] ,[223,Silo,27/7/2015,188369] ,[172,Mineirinho,17/5/2014,825296] ,[172,Mineirinho,9/10/2016,358860] ,[206,Poste,21/7/2014,655399] ,[85,Crusoé,6/9/2014,569302] ,[58,Campinas,21/7/2014,740727] ,[25,Baianinho,1/4/2017,526424] ,[235,Viagra,9/2/2017,701164] ,[200,Pequeno,24/1/2015,922270] ,[61,Campari,5/9/2016,727330] ,[34,Benzedor,15/7/2016,775073] ,[165,Magma,24/3/2014,477958] ,[172,Mineirinho,7/2/2017,331013] ,[225,Soneca,27/8/2015,115225] ,[168,Médico,17/8/2017,458091] ,[69,Centroavante,18/9/2015,334217] ,[14,Aquático,2/11/2014,213968] ,[190,Padrinho,5/2/2014,424574] ,[112,Feia,16/1/2015,203748] ,[15,Aracaju,11/8/2016,712899] ,[147,Itumbiara,13/1/2014,489667] ,[210,Prosador,15/7/2014,731697] ,[2,Aço,29/2/2017,267798] ,[172,Mineirinho,7/11/2016,973031] ,[97,Disco,13/9/2016,172672] ,[96,Diamante,29/11/2016,642440] ,[233,Vaqueiro,14/6/2014,842263] ,[42,Boiadeiro,12/4/2017,234559] ,[16,Asfalto,13/8/2015,344528] ,[180,Navalha,6/2/2016,423528] ,[72,Chaveiro,5/3/2016,644522] ,[190,Padrinho,18/6/2015,917319] ,[219,Sábado,18/6/2016,390322] ,[202,Pescador,5/10/2017,695411] ,[56,Caju,13/7/2016,573207] ,[172,Mineirinho,2/7/2016,724444] ,[35,Bico,5/7/2015,895122] ,[85,Crusoé,24/9/2015,834840] ,[216,Rio,30/10/2015,748481] ,[169,Menino da floresta,27/1/2015,959572] ,[135,Guarulhos,25/11/2014,569452] ,[51,Brasília,7/11/2015,608687] ,[238,Zagueiro,6/9/2014,705996] ,[143,Italiano,18/5/2017,374040] ,[136,Guerrilheiro,8/10/2016,118299] ,[172,Mineirinho,22/10/2014,717107] ,[149,Jangada,30/8/2017,233206] ,[139,Índio,4/7/2017,850142] ,[152,Jornalista,4/4/2014,946267] ,[219,Sábado,8/11/2016,437683] ,[127,Goleiro,18/7/2015,222348] ,[188,Oxigênio,9/8/2015,431175] ,[223,Silo,23/2/2016,542872] ,[191,Palmas,8/2/2016,789271] ,[192,Parente,11/10/2017,745348] ,[172,Mineirinho,7/8/2016,916964] ,[202,Pescador,4/2/2014,297416] ,[97,Disco,18/5/2015,339177] ,[118,Filhote,24/8/2015,531228] ,[125,Frances,29/4/2015,199155] ,[84,Correios,25/4/2014,276669] ,[78,Coluna,29/1/2014,375532] ,[68,Cavanhaque,30/8/2016,624548] ,[90,Decodificado,28/9/2014,287002] ,[227,Teco,19/8/2015,574588] ,[56,Caju,7/6/2015,872659] ,[169,Menino da floresta,19/3/2016,646473] ,[173,Misericórdia,8/9/2014,944229] ,[172,Mineirinho,14/5/2017,132051] ,[88,Da Casa,24/7/2014,298709] ,[6,Alemão,22/8/2017,182615] ,[174,Missa,29/10/2017,470900] ,[214,Rasputinzinho,29/4/2015,721095] ,[7,Alemão,16/6/2015,238462] ,[27,Balzac,1/6/2015,541113] ,[208,Primo,23/4/2017,833600] ,[98,Diplomata,18/9/2017,819407] ,[215,Ribeirão Preto,27/4/2016,858781] ,[30,Barrigudo,2/2/2016,591513] ,[144,Italiano,19/4/2016,444860] ,[172,Mineirinho,23/1/2014,560229] ,[19,Atravessador,22/7/2015,734218] ,[151,Jogador,5/10/2017,966828] ,[36,Bitelo,14/1/2017,242705] ,[18,Atleta,3/10/2016,322907] ,[85,Crusoé,17/6/2014,203608] ,[21,Azeitona,24/9/2014,167028] ,[72,Chaveiro,29/4/2017,875450] ,[199,Pelé,17/8/2014,814080] ,[200,Pequeno,19/6/2014,128446] ,[120,Fino,29/5/2017,796126] ,[127,Goleiro,27/10/2014,956967] ,[172,Mineirinho,16/5/2016,334929] ,[46,Bonitinho,27/8/2014,471445] ,[37,Biscoito,3/8/2017,860524] ,[191,Palmas,25/11/2016,483634] ,[86,Cruzeiro do Sul,29/5/2017,959477] ,[109,Eva,28/3/2015,136576] ,[144,Italiano,4/3/2015,409922] ,[176,Montanha,29/10/2015,359130] ,[72,Chaveiro,26/10/2016,790766] ,[167,Masculina,19/2/2015,841203] ,[199,Pelé,7/5/2017,118464] ,[177,Montanha,7/5/2016,332446] ,[172,Mineirinho,2/3/2017,576879] ,[65,Caranguejo,3/6/2015,607197] ,[218,Roxinho,11/11/2016,278887] ,[101,Drácula,5/8/2014,725119] ,[11,Amigo,12/10/2014,473324] ,[93,Dentada,16/11/2016,926357] ,[110,Fantasma,17/6/2016,518832] ,[112,Feia,14/9/2017,426406] ,[224,Solução,13/2/2014,623504] ,[61,Campari,10/7/2014,367058] ,[47,Boquinha,15/1/2015,356683] ,[156,Kimono,21/11/2014,497982] ,[172,Mineirinho,21/4/2014,749012] ,[117,Filho do reino,27/8/2014,659651] ,[105,Enteado,12/10/2017,736438] ,[145,Itambé,2/4/2017,339990] ,[39,Boa Vista,3/4/2015,477159] ,[190,Padrinho,23/1/2016,342774] ,[42,Boiadeiro,13/3/2017,423099] ,[214,Rasputinzinho,9/1/2016,776757] ,[186,Novo,30/8/2014,136840] ,[129,Grego,25/9/2016,600261] ,[102,Duro,1/11/2015,805230] ,[55,Caim,29/9/2017,113284] ,[169,Menino da floresta,14/4/2014,578200] ,[172,Mineirinho,10/1/2016,580896] ,[82,Contador,19/11/2014,525500] ,[167,Masculina,2/10/2015,490161] ,[53,Bronca,3/5/2014,329530] ,[145,Itambé,3/6/2016,253583] ,[11,Amigo,8/3/2016,485685] ,[1,Acelerado,23/5/2015,776554] ,[231,Trincaferro,21/1/2016,166851] ,[174,Missa,7/11/2017,825903] ,[97,Disco,1/10/2017,910460] ,[164,Maçaranduba,27/2/2014,287321] ,[165,Magma,18/4/2017,991004] ,[140,Inferno,30/1/2015,217341] ,[172,Mineirinho,7/8/2014,843590] ,[84,Correios,13/2/2014,746935] ,[223,Silo,16/8/2015,649673] ,[47,Boquinha,25/3/2017,384912] ,[7,Alemão,4/6/2017,251301] ,[222,Segundo,4/11/2015,886430] ,[130,Grenal,17/8/2016,231377] ,[88,Da Casa,3/11/2014,704732] ,[177,Montanha,18/11/2015,354640] ,[126,Garoto,3/6/2016,500712] ,[16,Asfalto,19/4/2017,873861] ,[61,Campari,14/5/2017,165026] ,[172,Mineirinho,29/7/2014,316752] ,[202,Pescador,19/6/2014,209343] ,[127,Goleiro,2/5/2016,317897] ,[172,Mineirinho,2/9/2014,162857] ,[67,Castor,6/2/2015,387453] ,[62,Canário,7/5/2017,171681] ,[20,Avião,1/8/2014,763595] ,[125,Frances,17/1/2014,687232] ,[153,Jovem,7/7/2017,911723] ,[176,Montanha,3/1/2017,377065] ,[172,Mineirinho,17/8/2016,385690] ,[183,Nervosinho,7/2/2015,577519] ,[64,Carmem,7/9/2015,874501] ,[2,Aço,1/2/2017,546318] ,[79,Comprido,7/7/2017,197430] ,[81,Conquistador,12/5/2017,185318] ,[53,Bronca,21/5/2014,865381] ,[96,Diamante,25/9/2017,954377] ,[116,Filho,6/10/2016,374625] ,[172,Mineirinho,26/5/2015,981318] ,[172,Mineirinho,6/9/2014,625323] ,[121,Flamengo,2/4/2017,163581] ,[6,Alemão,25/5/2016,893117] ,[229,Tio,24/5/2014,728179] ,[237,Wanda,7/3/2017,466318] ,[55,Caim,6/6/2016,643517] ,[80,Comuna,9/1/2014,281904] ,[208,Primo,20/4/2015,261429] ,[40,Boca mole,15/5/2015,472926] ,[170,Mercedes,18/11/2017,113608] ,[172,Mineirinho,14/5/2016,713253] ,[104,Ema,1/5/2017,948941] ,[23,Babel,2/9/2015,168649] ,[105,Enteado,19/5/2016,234554] ,[96,Diamante,21/3/2017,869569] ,[198,Pavão,15/4/2016,859753] ,[166,Manaus,20/6/2016,324179] ,[180,Navalha,22/5/2017,281252] ,[220,Santo André,16/3/2014,495306] ,[168,Médico,24/1/2016,556083] ,[170,Mercedes,24/2/2017,272328] ,[172,Mineirinho,30/5/2017,468776] ,[17,Aspirina,13/5/2017,292047] ,[24,Babosa,18/1/2017,303206] ,[87,Curitiba,29/11/2017,596447] ,[186,Novo,12/4/2017,184036] ,[89,Da hora,16/3/2017,363550] ,[70,Cérebro,4/9/2015,950303] ,[59,Caldo,3/10/2017,448580] ,[208,Primo,7/4/2014,662514] ,[124,Fragmentada,3/11/2015,749750] ,[78,Coluna,20/1/2016,448905] ,[177,Montanha,24/5/2016,452274] ,[172,Mineirinho,6/4/2014,227188] ,[87,Curitiba,14/7/2014,930386] ,[124,Fragmentada,3/7/2016,922938] ,[105,Enteado,15/2/2015,660357] ,[135,Guarulhos,20/2/2017,566450] ,[174,Missa,26/4/2017,259735] ,[227,Teco,5/1/2014,638668] ,[79,Comprido,29/11/2016,533636] ,[176,Montanha,26/4/2017,872234] ,[177,Montanha,13/4/2017,859317] ,[227,Teco,25/8/2016,204991] ,[26,Baixada,21/2/2016,173652] ,[172,Mineirinho,6/11/2014,647366] ,[202,Pescador,29/4/2017,636831] ,[160,Lima,29/10/2016,370625] ,[207,Praia,14/5/2015,581507] ,[76,Cobra,23/5/2017,209404] ,[148,Jacaré,8/2/2017,209505] ,[20,Avião,20/10/2015,152796] ,[60,Calvo,8/1/2016,374882] ,[164,Maçaranduba,14/9/2016,834720] ,[181,Navegante,1/8/2014,396196] ,[49,Botafogo,12/11/2015,778730] ,[4,Anão,3/3/2016,634194] ,[16,Asfalto,19/7/2017,945091] ,[172,Mineirinho,25/5/2014,958999] ,[92,Dengo,7/8/2014,701013] ,[140,Inferno,19/8/2017,170017] ,[82,Contador,23/4/2014,431143] ,[37,Biscoito,25/11/2016,864668] ,[164,Maçaranduba,20/1/2017,376087] ,[165,Magma,19/6/2016,367973] ,[39,Boa Vista,16/9/2015,751120] ,[97,Disco,29/8/2016,509187] ,[80,Comuna,13/2/2014,740624] ,[219,Sábado,23/6/2016,691541] ,[158,Lamborghini,12/9/2016,380153] ,[172,Mineirinho,8/11/2016,920278] ,[120,Fino,8/7/2015,270468] ,[125,Frances,13/5/2016,982490] ,[142,Itacaré,11/10/2016,343117] ,[116,Filho,21/11/2014,671800] ,[79,Comprido,29/5/2017,292874] ,[141,Itabuna,14/11/2017,894777] ,[213,Proximus,7/4/2017,516137] ,[70,Cérebro,19/4/2014,710556] ,[124,Fragmentada,3/4/2015,829355] ,[172,Mineirinho,26/9/2016,473148] ,[75,Cintinho,21/6/2015,382363] ,[32,Bateria,28/1/2014,958857] ,[128,Gordo,19/11/2014,832937] ,[236,Vizinho,5/11/2017,808482] ,[220,Santo André,16/8/2016,628187] ,[42,Boiadeiro,7/1/2014,288055] ,[130,Grenal,15/5/2016,224053] ,[219,Sábado,13/8/2017,308632] ,[98,Diplomata,10/2/2015,660826] ,[53,Bronca,2/1/2016,168978] ,[172,Mineirinho,4/5/2014,256131] ,[3,Adoniran,17/8/2017,684956] ,[206,Poste,20/9/2015,194212] ,[213,Proximus,22/1/2016,406971] ,[57,Candomblé,23/10/2015,713213] ,[172,Mineirinho,10/9/2016,311222] ,[86,Cruzeiro do Sul,8/3/2014,795180] ,[117,Filho do reino,29/1/2015,289460] ,[141,Itabuna,13/10/2016,781026] ,[50,Buzu,23/3/2017,781463] ,[60,Calvo,11/1/2016,928108] ,[49,Botafogo,20/9/2017,476690] ,[172,Mineirinho,12/11/2016,495808] ,[102,Duro,21/9/2016,329439] ,[63,Carajás,21/9/2016,532977] ,[18,Atleta,12/5/2017,175618] ,[151,Jogador,28/2/2016,127339] ,[21,Azeitona,26/4/2017,350147] ,[61,Campari,22/10/2017,697455] ,[117,Filho do reino,26/3/2014,743377] ,[88,Da Casa,28/9/2016,956430] ,[3,Adoniran,20/3/2017,265784] ,[34,Benzedor,20/11/2017,670122] ,[58,Campinas,20/3/2016,504086] ,[104,Ema,25/1/2014,935193] ,[172,Mineirinho,3/10/2015,329587] ,[129,Grego,30/1/2014,191879] ,[103,Educador,6/1/2017,710839] ,[146,Itatiaia,7/11/2014,815530] ,[19,Atravessador,2/4/2015,989589] ,[139,Índio,21/8/2015,397579] ,[159,Lento,25/1/2017,178810] ,[143,Italiano,1/8/2015,136896] ,[168,Médico,25/8/2016,718172] ,[173,Misericórdia,16/9/2014,837026] ,[217,Roberval Taylor,25/3/2017,517304] ,[172,Mineirinho,9/2/2017,584194] ,[165,Magma,13/2/2017,427095] ,[99,Do reino,2/6/2015,695569] ,[85,Crusoé,30/9/2014,341311] ,[103,Educador,4/10/2017,306383] ,[219,Sábado,20/4/2016,345822] ,[182,Natal,8/9/2014,859354] ,[88,Da Casa,26/5/2014,407503] ,[36,Bitelo,23/2/2017,541507] ,[224,Solução,1/3/2014,823471] ,[172,Mineirinho,16/6/2016,375082] ,[174,Missa,25/9/2017,389967] ,[103,Educador,10/11/2016,465354] ,[162,Macapá,7/11/2017,449663] ,[176,Montanha,30/8/2016,351830] ,[214,Rasputinzinho,7/7/2014,818551] ,[145,Itambé,11/2/2017,856963] ,[135,Guarulhos,8/3/2015,330647] ,[130,Grenal,4/11/2015,371050] ,[54,Bruto,25/10/2015,556716] ,[172,Mineirinho,25/1/2014,984580] ,[116,Filho,1/3/2014,410495] ,[98,Diplomata,28/5/2014,277332] ,[84,Correios,21/3/2015,260041] ,[134,Grosseiro,5/4/2016,507519] ,[193,Paris,24/7/2015,830348] ,[116,Filho,18/11/2015,235731] ,[126,Garoto,21/3/2017,409599] ,[183,Nervosinho,10/4/2016,379594] ,[82,Contador,18/5/2015,182829] ,[193,Paris,22/6/2017,658738] ,[172,Mineirinho,7/2/2017,387331] ,[68,Cavanhaque,17/6/2015,664339] ,[202,Pescador,27/3/2014,938017] ,[93,Dentada,30/1/2014,756477] ,[99,Do reino,2/5/2015,748834] ,[144,Italiano,1/4/2017,793843] ,[37,Biscoito,1/9/2017,285347] ,[190,Padrinho,10/9/2016,243078] ,[12,Amigo C,11/3/2015,621570] ,[36,Bitelo,18/3/2014,637740] ,[57,Candomblé,19/1/2017,891626] ,[112,Feia,19/6/2016,392038] ,[233,Vaqueiro,5/2/2015,238815] ,[172,Mineirinho,11/4/2017,824069] ,[1,Acelerado,14/8/2015,169811] ,[79,Comprido,22/5/2017,519586] ,[37,Biscoito,23/9/2015,281759] ,[144,Italiano,4/6/2016,436711] ,[183,Nervosinho,13/11/2014,763252] ,[71,Cerrado,30/10/2014,933234] ,[236,Vizinho,27/4/2016,225371] ,[146,Itatiaia,18/1/2014,408455] ,[158,Lamborghini,15/9/2015,484117] ,[172,Mineirinho,5/5/2017,909321] ,[128,Gordo,25/7/2014,605210] ,[174,Missa,6/9/2014,346018] ,[3,Adoniran,4/5/2014,151559] ,[147,Itumbiara,16/6/2015,580297] ,[154,Jujuba,29/4/2015,383302] ,[94,Dentuço,15/9/2016,262538] ,[47,Boquinha,7/4/2014,614786] ,[102,Duro,20/2/2016,825283] ,[139,Índio,17/1/2016,795590] ,[15,Aracaju,29/5/2014,873810] ,[172,Mineirinho,13/3/2016,599494] ,[166,Manaus,16/6/2017,927881] ,[15,Aracaju,15/11/2017,985812] ,[12,Amigo C,9/10/2016,153154] ,[159,Lento,28/10/2015,297970] ,[237,Wanda,25/10/2015,724338] ,[216,Rio,2/3/2014,413195] ,[203,Polo,18/8/2016,613296] ,[173,Misericórdia,24/10/2015,572213] ,[137,Igreja,18/1/2015,672508] ,[50,Buzu,18/7/2015,480198] ,[54,Bruto,19/1/2015,220895] ,[172,Mineirinho,22/7/2017,853669] ,[70,Cérebro,5/3/2016,794408] ,[68,Cavanhaque,8/2/2016,993939] ,[86,Cruzeiro do Sul,27/10/2017,362242] ,[20,Avião,21/3/2014,873410] ,[218,Roxinho,2/2/2015,234989] ,[59,Caldo,1/6/2015,266382] ,[70,Cérebro,30/8/2016,519479] ,[233,Vaqueiro,1/5/2017,285749] ,[213,Proximus,5/5/2015,654532] ,[28,Barão,28/8/2017,950063] ,[172,Mineirinho,9/9/2015,796391] ,[134,Grosseiro,19/4/2017,429512] ,[85,Crusoé,12/6/2016,141773] ,[235,Viagra,26/4/2016,317524] ,[140,Inferno,3/2/2015,924426] ,[155,Justiça,5/8/2017,197938] ,[27,Balzac,21/10/2017,620734] ,[117,Filho do reino,6/2/2016,200633] ,[79,Comprido,26/2/2016,522900] ,[143,Italiano,3/6/2015,906116] ,[86,Cruzeiro do Sul,13/7/2014,769793] ,[172,Mineirinho,3/8/2017,544316] ,[77,Colorido,16/10/2015,364021] ,[183,Nervosinho,22/10/2015,783601] ,[15,Aracaju,19/2/2015,337243] ,[116,Filho,11/5/2017,986803] ,[3,Adoniran,3/4/2014,272234] ,[141,Itabuna,22/2/2014,130905] ,[4,Anão,26/4/2016,299803] ,[163,Machado,26/1/2015,310141] ,[109,Eva,9/2/2015,107989] ,[107,Escritor,2/9/2015,639477] ,[232,Tuca,29/5/2014,889742] ,[172,Mineirinho,28/5/2017,217620] ,[215,Ribeirão Preto,2/11/2016,690134] ,[50,Buzu,19/10/2016,913208] ,[202,Pescador,17/1/2014,893878] ,[81,Conquistador,5/11/2015,638613] ,[149,Jangada,19/1/2016,931652] ,[61,Campari,26/10/2016,136314] ,[238,Zagueiro,1/3/2015,131114] ,[220,Santo André,1/9/2017,728233] ,[54,Bruto,12/3/2015,664190] ,[59,Caldo,1/5/2017,820976] ,[190,Padrinho,18/2/2014,262890] ,[172,Mineirinho,9/10/2016,841632] ,[183,Nervosinho,1/6/2015,196450] ,[229,Tio,17/11/2016,665583] ,[30,Barrigudo,1/6/2017,723744] ,[112,Feia,12/11/2016,119098] ,[234,Verdinho,10/9/2015,238635] ,[141,Itabuna,18/9/2016,144607] ,[144,Italiano,4/10/2017,506577] ,[128,Gordo,4/3/2016,786995] ,[2,Aço,25/1/2016,106588] ,[156,Kimono,29/5/2016,800573] ,[172,Mineirinho,27/4/2017,528008] ,[237,Wanda,5/7/2016,655498] ,[35,Bico,9/11/2017,481444] ,[62,Canário,25/5/2014,369980] ,[144,Italiano,24/10/2016,359717] ,[59,Caldo,3/6/2017,151297] ,[182,Natal,3/1/2015,613604] ,[84,Correios,2/8/2016,308445] ,[2,Aço,7/6/2014,730020] ,[93,Dentada,4/2/2014,519673] ,[189,Padre,1/5/2017,866744] ,[172,Mineirinho,5/5/2016,172460] ,[193,Paris,12/9/2017,811932] ,[200,Pequeno,10/8/2015,902344] ,[68,Cavanhaque,6/11/2015,893966] ,[37,Biscoito,15/6/2014,841079] ,[117,Filho do reino,28/3/2015,102230] ,[173,Misericórdia,29/5/2015,640019] ,[26,Baixada,27/10/2016,329143] ,[1,Acelerado,17/3/2015,487175] ,[101,Drácula,4/11/2016,621515] ,[226,Suíça,1/5/2015,463993] ,[180,Navalha,3/11/2016,766930] ,[74,Chorão,17/11/2017,756460] ,[172,Mineirinho,27/6/2017,163317] ,[156,Kimono,12/9/2016,503101] ,[198,Pavão,21/3/2015,203092] ,[227,Teco,14/2/2015,918130] ,[177,Montanha,24/7/2017,141935] ,[172,Mineirinho,1/10/2015,220302] ,[42,Boiadeiro,21/4/2015,413434] ,[69,Centroavante,18/11/2017,775861] ,[40,Boca mole,24/11/2016,399379] ,[16,Asfalto,14/4/2016,366015] ,[51,Brasília,2/8/2016,677945] ,[172,Mineirinho,8/1/2015,985849] ,[16,Asfalto,7/6/2014,579270] ,[218,Roxinho,28/8/2016,904661] ,[155,Justiça,14/5/2017,200953] ,[215,Ribeirão Preto,8/5/2017,869157] ,[109,Eva,7/10/2017,674040] ,[201,Persa,26/9/2014,963076] ,[219,Sábado,11/9/2017,762528] ,[7,Alemão,26/10/2015,912657] ,[19,Atravessador,9/6/2014,582347] ,[41,Bocão,18/2/2016,376770] ,[172,Mineirinho,26/10/2015,836384] ,[146,Itatiaia,28/11/2014,221173] ,[63,Carajás,18/4/2014,931410] ,[102,Duro,23/9/2017,412035] ,[162,Macapá,27/1/2015,705394] ,[222,Segundo,5/9/2017,770034] ,[18,Atleta,28/10/2014,760949] ,[218,Roxinho,3/4/2016,708774] ,[47,Boquinha,5/4/2017,910065] ,[19,Atravessador,9/11/2017,974036] ,[66,Carrossel,14/10/2014,414443] ,[172,Mineirinho,28/8/2014,504873] ,[153,Jovem,5/4/2015,165227] ,[158,Lamborghini,20/10/2014,803800] ,[116,Filho,10/8/2015,503757] ,[131,Gripe,9/5/2017,785469] ,[186,Novo,28/6/2017,280630] ,[150,João Pessoa,20/3/2015,644279] ,[139,Índio,28/6/2014,161105] ,[75,Cintinho,14/9/2014,309017] ,[67,Castor,21/8/2015,599027] ,[122,Fodinha,20/5/2016,364326] ,[236,Vizinho,8/7/2016,518836] ,[172,Mineirinho,18/2/2015,973571] ,[67,Castor,8/11/2014,318295] ,[25,Baianinho,21/3/2016,188337] ,[39,Boa Vista,8/3/2015,478552] ,[176,Montanha,1/7/2016,500798] ,[111,Fazendão,22/3/2017,402806] ,[164,Maçaranduba,15/2/2015,999617] ,[131,Gripe,24/1/2014,384363] ,[117,Filho do reino,22/6/2017,591198] ,[116,Filho,29/3/2016,793406] ,[135,Guarulhos,18/1/2016,278366] ,[172,Mineirinho,3/9/2017,644692] ,[126,Garoto,25/8/2014,604955] ,[94,Dentuço,25/6/2014,553814] ,[69,Centroavante,24/7/2015,748460] ,[233,Vaqueiro,26/8/2014,517217] ,[220,Santo André,26/5/2016,590318] ,[64,Carmem,22/10/2016,309880] ,[56,Caju,16/4/2015,265334] ,[129,Grego,23/7/2016,530377] ,[47,Boquinha,19/8/2017,671110] ,[35,Bico,28/7/2016,703111] ,[90,Decodificado,20/10/2017,854895] ,[172,Mineirinho,8/3/2016,734242] ,[202,Pescador,12/11/2016,687605] ,[85,Crusoé,21/1/2014,902266] ,[173,Misericórdia,26/6/2014,870640] ,[91,Decrépito,8/11/2017,124621] ,[87,Curitiba,8/4/2017,310936] ,[190,Padrinho,11/11/2017,429652] ,[228,Timão,13/7/2015,623745] ,[149,Jangada,12/8/2017,441628] ,[36,Bitelo,24/11/2017,159310] ,[32,Bateria,18/7/2016,652076] ,[144,Italiano,9/2/2017,450517] ,[172,Mineirinho,13/11/2014,532931] ,[164,Maçaranduba,22/3/2014,517732] ,[63,Carajás,6/6/2017,132262] ,[158,Lamborghini,29/1/2015,736449] ,[84,Correios,12/2/2015,697699] ,[146,Itatiaia,1/8/2016,660014] ,[95,Desesperado,15/8/2016,369977] ,[122,Fodinha,28/10/2016,615722] ,[149,Jangada,18/5/2017,741440] ,[84,Correios,24/7/2015,258496] ,[172,Mineirinho,6/1/2015,344377] ,[21,Azeitona,29/2/2015,944697] ,[172,Mineirinho,3/7/2017,986895] ,[91,Decrépito,13/1/2015,345165] ,[60,Calvo,17/4/2017,124423] ,[184,Neto,12/8/2015,862905] ,[188,Oxigênio,15/2/2015,927289] ,[186,Novo,18/10/2016,833185] ,[2,Aço,5/2/2017,699277] ,[93,Dentada,7/3/2014,690310] ,[152,Jornalista,7/10/2016,169627] ,[216,Rio,15/6/2017,604109] ,[172,Mineirinho,20/8/2014,332149] ,[16,Asfalto,25/8/2017,578389] ,[224,Solução,10/1/2014,911577] ,[67,Castor,3/5/2014,608279] ,[95,Desesperado,5/3/2015,218349] ,[156,Kimono,8/3/2014,917151] ,[210,Prosador,28/8/2016,731672] ,[192,Parente,18/6/2015,231713] ,[194,Parreira,17/6/2014,268785] ,[130,Grenal,8/4/2017,255395] ,[172,Mineirinho,29/7/2015,856055] ,[66,Carrossel,1/11/2014,342112] ,[27,Balzac,13/10/2016,178982] ,[168,Médico,17/3/2014,107547] ,[76,Cobra,6/2/2014,136881] ,[77,Colorido,17/1/2015,550154] ,[123,Fósforo,17/1/2016,375429] ,[19,Atravessador,20/10/2016,865999] ,[99,Do reino,3/7/2014,959599] ,[160,Lima,24/3/2017,560977] ,[152,Jornalista,3/6/2015,880919] ,[172,Mineirinho,14/8/2016,499466] ,[33,Belém,28/11/2017,108043] ,[156,Kimono,12/3/2014,785409] ,[152,Jornalista,9/5/2015,110016] ,[30,Barrigudo,24/7/2017,167631] ,[24,Babosa,10/4/2016,415599] ,[180,Navalha,25/11/2017,608367] ,[235,Viagra,8/3/2014,374554] ,[179,Navalha,12/11/2017,550051] ,[160,Lima,21/9/2017,369309] ,[81,Conquistador,29/10/2015,515489] ,[172,Mineirinho,26/10/2015,288702] ,[144,Italiano,15/7/2014,384076] ,[142,Itacaré,15/8/2014,595269] ,[11,Amigo,14/11/2014,897461] ,[22,Babão,2/8/2014,779990] ,[123,Fósforo,30/6/2016,432722] ,[202,Pescador,19/2/2014,368574] ,[233,Vaqueiro,15/2/2016,339655] ,[1,Acelerado,8/1/2016,848717] ,[83,Contas,23/10/2016,150899] ,[120,Fino,19/6/2016,578863] ,[33,Belém,1/10/2017,584666] ,[172,Mineirinho,26/10/2016,902206] ,[237,Wanda,4/5/2014,415877] ,[238,Zagueiro,28/1/2017,779851] ,[147,Itumbiara,23/4/2015,903051] ,[54,Bruto,8/9/2017,719841] ,[4,Anão,5/2/2017,738977] ,[64,Carmem,17/7/2016,358808] ,[88,Da Casa,24/4/2015,242527] ,[158,Lamborghini,19/10/2017,196119] ,[174,Missa,11/1/2016,226298] ,[172,Mineirinho,24/4/2014,235243] ,[11,Amigo,12/7/2016,192227] ,[24,Babosa,27/5/2015,749516] ,[148,Jacaré,12/6/2017,301322] ,[202,Pescador,18/11/2016,189014] ,[217,Roberval Taylor,6/8/2015,917085] ,[121,Flamengo,29/1/2014,441862] ,[102,Duro,27/2/2015,170735] ,[190,Padrinho,28/3/2014,162378] ,[136,Guerrilheiro,28/8/2014,312594] ,[134,Grosseiro,28/1/2014,273318] ,[23,Babel,8/4/2016,621328] ,[172,Mineirinho,4/9/2015,270683] ,[82,Contador,16/9/2016,541501] ,[202,Pescador,2/3/2016,309815] ,[77,Colorido,20/5/2014,885233] ,[153,Jovem,3/10/2016,623796] ,[130,Grenal,15/4/2014,813199] ,[127,Goleiro,4/6/2017,561778] ,[5,Alba,25/4/2014,924193] ,[95,Desesperado,19/5/2014,134678] ,[203,Polo,29/5/2015,595986] ,[153,Jovem,28/1/2017,181927] ,[108,Esquálido,5/8/2015,900411] ,[184,Neto,23/7/2015,329837] ,[172,Mineirinho,21/6/2017,325189] ,[1,Acelerado,2/11/2015,677990] ,[142,Itacaré,29/5/2014,311368] ,[216,Rio,14/2/2014,131682] ,[97,Disco,4/10/2017,196726] ,[149,Jangada,28/10/2014,219650] ,[163,Machado,10/9/2015,217129] ,[150,João Pessoa,11/8/2017,827728] ,[88,Da Casa,15/7/2016,826138] ,[147,Itumbiara,23/7/2017,521613] ,[97,Disco,9/8/2015,452468] ,[172,Mineirinho,16/11/2015,410210] ,[80,Comuna,7/3/2015,701438] ,[4,Anão,13/1/2016,516050] ,[143,Italiano,11/8/2014,969925] ,[125,Frances,2/7/2014,249930] ,[92,Dengo,8/11/2017,727145] ,[146,Itatiaia,28/7/2016,777239] ,[54,Bruto,22/3/2017,781901] ,[155,Justiça,16/7/2016,147560] ,[119,Filósofo,22/1/2016,765147] ,[170,Mercedes,6/4/2016,796305] ,[223,Silo,3/10/2015,173021]]

*/


/*
            Módulo Avançado
*/
