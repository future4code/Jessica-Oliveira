// Exercícios de interpretação
// Exercício 1: console.log(b) vai devolver 10 e console.log(a,b) vai devolver (10,5)
// Exercício 2: console.log(a,b,c) vai devolver (10,10,10)
// Exercício 3: o programa calcula o valor recebido por hora de trabalho. 
// Sugestão de nome das variáveis: p = "horasTrabalhadasDia" e t = valorRecebidoDia

//Exercícios de escrita de código

//Exercício 1
/*let nome 
let idade 

console.log(typeof nome)
console.log(typeof idade) 
o tipo de variável impressa é undefined porque não atribuí nenhum valor a elas*/

let nome = prompt("Qual o seu nome?")
console.log(nome)


let idade = prompt("Qual a sua idade?")
console.log(idade)

console.log(typeof nome, typeof idade)
// Como essas variáveis são perguntas ao usuário e resultado do prompt, o tipo é string para as duas, mesmo o usuário colocando um número pois o resultado do prompt é sempre string. Depois é possível converter esse resultado em outro tipo.

console.log("Olá", nome, "você tem",idade,"anos.")

//Exercício 2

const animal = "Você tem animal de estimação?"
const cafe = "Você toma café todos os dias?"
const jilo = "Você gosta de jiló?"

const respostaAnimal = "Sim."
const respostaCafe = "Sim."
const respostaJilo = "Não."

console.log(animal,respostaAnimal)
console.log(cafe,respostaCafe)
console.log(jilo,respostaJilo)

//Exercício 3

let a = 10
let b = 25 
let x 

x = a
a = b 
b = x 

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

