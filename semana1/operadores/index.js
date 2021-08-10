// Exercícios de Interpretação de código
// 1.a) false
// b) false
// c) true
// d) Boolean

//2. O problema foi que as respostas do prompt, que são sempre do tipo string, não foram convertidas em Number para permitir fazer a operação de soma corretamente. Mesmo digitando um número, os dados do prompt sempre são do tipo string. na tela não vai aparecer o resultado da soma, mas apenas dos números inseridos um do lado do outro.

// 3. Para não ocorrer esse erro, ele pode na própria atribuição da variável fazer a conversão dos dados do prompt de string para number, da seguinte forma:
// let primeiroNumero = Number(prompt("Digite um número!"))
// let segundoNumero = Number(prompt("Digite um outro número!"))

// const soma = primeiroNumero + segundoNumero 
// console.log(soma)

//Exercícios de escrita de código
//1. 
// const idadeUsuario = Number(prompt("Qual a sua idade?"))
// const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

// console.log("Sua idade é maior do que a do seu amigo?", idadeUsuario >= idadeAmigo)
// console.log(idadeUsuario - idadeAmigo)

//2.
// let numeroPar = Number(prompt("Insira um número par."))

// console.log(numeroPar % 2)
// Ao inserir um número par, nunca temos resto de divisão, sempre volta 0, pois estamos dividindo um número par por outro número par.
// Ao inserir um número impar, ele devolve um resultado diferente de 0 pois nesse caso há resto de divisão. por estarmos divindindo por 2, o resultado do resto é 1.

// 3.
// let idade = Number(prompt("Quantos anos você tem?"))
// const mesesAno = 12
// const diasMes = 30
// const horasDias = 24

// let idadeMeses = idade * mesesAno
// console.log(idadeMeses) 

// let idadeDias = idadeMeses * diasMes
// console.log(idadeDias)

// let idadeHoras = idadeDias * horasDias
// console.log(idadeHoras)

// 4.
let primeiroNumero = Number(prompt("Insira um número aqui."))
let segundoNumero = Number(prompt("Insira outro número aqui."))

console.log("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro número é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro número é divisível pelo segundo?", (primeiroNumero % segundoNumero) === 0)
console.log("O segundo número é divisível pelo primeiro?", (segundoNumero % primeiroNumero) === 0)





