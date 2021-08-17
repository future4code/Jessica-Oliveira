// EXERCÍCIOS - INTERPRETAÇÃO DE CÓDIGO
// 1)
// a.Para minhaFuncao(2), o retorno é 10 e para minhaFuncao(10) é 50
// b. Não aparecerá nada no console porque retiramos esse comando de imprimir, mas a variável existe e é executada quando a chamamos, ela só não aparece no console.

// 2)
// a. Essa função pega um texto inserido pelo usuário e converte esse texto todo para letras minúsculas, além de checar se nessa string de texto encontramos os caracteres da palavra "cenoura". Ela pode ser útil para separar as frases de entrada em dois grupos (contém ou não "cenoura") e a partir disso propor alguma ação diferente para cada, e passar para minúsculas pode ser útil para uniformizar as entradas e não ter problemas para pesquisar e comparar os dados por conta de letras maiúsculas, por exemplo.
// b.
// i. true
// ii. true
// iii. true

// EXERCÍCIOS - ESCRITA DE CÓDIGO
// 1)
// a. 
// function sobreMim () {
//     const fraseSobreMim = console.log("Eu sou Jéssica, tenho 30 anos, moro em São Bernardo do Campo e sou estudante.")
// }

// sobreMim()

//b.   
// function sobreUsuario (nome,usuario,cidade,profissao) {
//     nome = prompt("Qual o seu nome?")
//     idade = Number(prompt("Qual a sua idade?"))
//     cidade = prompt ("Em qual cidade você mora?")
//     profissao = prompt("Qual sua profissão?")
    
//     const dadosUsuario = console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)

// }

// sobreUsuario()


//OU 

// function sobreUsuario1 (nome1, idade1, cidade1, profissao1) {
//     const dados = console.log(`Eu sou ${nome1}, tenho ${Number(idade1)} anos, moro em ${cidade1} e sou ${profissao1}.`)

// }

// sobreUsuario1 ("Jessica", 30, " São Bernardo", "estudante")

// 2)
// a. 
// const soma = (primeiroNum, segundoNum) => {
//     resultado = primeiroNum + segundoNum

//     return resultado
// }

// console.log(soma(1200,584))

// b.
// const comparacaoNumeros = (primeiroNum, segundoNum) => {
//     seMaior = primeiroNum >= segundoNum 

//     return seMaior
// }

// console.log(comparacaoNumeros(1,5))

//c. 
// const numeroPar = (numero) => {
//     resultado = numero % 2 === 0

//     return resultado
// }

// console.log(numeroPar(17))

//d. 
// const frase = (mensagem) => {
//     const resultado = console.log(mensagem.length, mensagem.toUpperCase())

//     return resultado
// }

// frase("O que você está fazendo hoje?")

//3. 

const somar = (num1, num2) => {
    const resultado = num1 + num2

    return resultado
}

const subtrair = (num1, num2) => {
    const resultado = num1 - num2
    
    return resultado
}

const multiplicar = (num1, num2) => {
    const resultado = num1 * num2

    return resultado
}

const dividir = (num1, num2) => {
    const resultado = num1 / num2

    return resultado
}

const num1 = Number(prompt("Insira um número."))
const num2 = Number(prompt("Insira mais um número"))

console.log("Números inseridos:", num1, num2)
console.log("Soma: ", somar())
console.log("Diferença: ", subtrair())
console.log("Multiplicação: ", multiplicar())
console.log("Divisão: ", dividir())

