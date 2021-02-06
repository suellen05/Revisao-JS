console.log ("Ola Mundo")

/* 
comentarios de varias linhas
*/

// comentario de uma linha

//variaveis ( espaco na memoria)

let nome; 
nome = "Guto" // sting ( texto)
console.log (nome);

let idade = 34; // number (numero)

let resposta = false; // booleon

nome = "Guto Xavier";
console.log (nome);

//array

let frutas = ['Maçã','Morango', 'Limao'];
console.log(frutas[0])

//Objetos ( colecao de dados) posso ter valores e funcoes.

let pessoas = {
    nome: 'Guto Xavier',
    idade: 34,
    sexo: 'Masculino',
    interesses: 'musicas, esportes'
}

// Constante ( qdo define seu valor nao pode ser alterado)

const pontos = 100;


// operadores
console.log(10 + 5); // adisao ou "concatenacao"
console.log (10-5); // subtracao ou variaveis   

let numero1 = 10, numero2 = 3;
console.log (numero1/numero2);
console.log(numero1*numero2);

console.log(10==3), //verifica a igualdade e vai retornar verdadeiro ou falso
console.log(10!=3), // != verifica se é diferente ( no caso verdadeiro true)
console.log(numero1>numero2);
console.log(numero1<100);
console.log(10 >= 11);
console.log(10<=11);

function EscreverMes (){
console.log("fevereiro");
}
let titulo = document.querySelector("#titulo");
titulo.textContent = "Revisão JS";

function Multiplica (num1, num2) {
     let resultado = num1 = num2;
     return resultado;

}

console.clear();
idade = 18 ;

if (idade >= 16){
    console.log("maior de idade");
}else if (idade>= 16) { 
    console.log("quase la");
    
}else {
    console.log("menor de idade");

}

let dia = 4 ;
switch (dia) {
    case 1:
    console.log("domingo");
    break;
    case 2:
    console.log ("segunda");
    break;
    case 3:
        console.log("terça");
        break;
    case 4:
        console.log ("quarta");
        break;
        default:
        console.log("outro dia");
}


let contador = 0 ;
while(contador < 5){
    console.log("ola");
    contador++;
}

contador = 0;
do{
console.log("tchau");
contador++;
}while (contador <5);

for(let i = 0; i<5; i ++){
    console.log ("oi");

}

//Documento Object Model
//Documento.getElementByID("titulo").textContent = "Revisao JS";

function MudarTitulo(texto){
    document.querySelector ("#titulo").textContent = texto;
}

function MudarTitulo2(){
    document.querySelector("#titulo").textContent = document.querySelector
    ("#nome").value;
    document.querySelector("#nome").value = "";
}

function InserirItem(){
    document.querySelector("#topicos-revisao").innerHTML += "<li>" +
    document.querySelector("#nome").value + "</li>";
}