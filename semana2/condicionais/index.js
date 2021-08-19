// EXERCÍCIOS - CONDICIONAIS

// INTERPRETAÇÃO DE CÓDIGO
// 1)
// a.Ele faz um teste com um número inserido via prompt para determinar se o resto da divisão do número inserido por 2 é igual a 0. Se o resultado for igual a zero, retorna a mensagem "Passou no teste.", se for diferente retorna "Não passou no teste."
// b. Para os números pares.
// c. Para os números ímpares.

// 2.
// a. Ele recebe uma fruta inserida pelo usuário via prompt e mostra uma frase contendo a fruta escolhida e quanto ela custa.
// b. Será impresso: "O preço da fruta Maçã é R$ 2.25"
// c. Sem o break o código seria lido até o final, então seria impresso: "O preço da fruta Pêra é R$ 5"

// 3.
// a. Está pedindo que o usuário insira um número via prompt e já tratando esse dado para que ele passe de string para number.
//b. Se o número for 10, ele retorna a mensagem "Esse número passou no teste" porque 10 satisfaz a condição de ser maior que 0. Já para o -10, não aparece mensagem nenhuma porque ele não satisfaz a condição e não especificamos o que faz caso a condição não seja atendida.
// c. a variável mensagem foi declarada dentro de um escopo local, dentro da condicional e não tem nenhum retorno indicado para ser usado no global, por isso aparece uma mensagem dizendo que let mensagem não foi definida.


// ESCRITA DE CÓDIGO
// 1. 
// const idade = Number(prompt("Quantos anos você tem?"))

// if (idade >= 18) {
//     console.log("Você pode dirigir.")
// } else {
//     console.log("Você não pode dirigir.")
// }


//2. 
// const periodoQueEstuda = prompt(`Em qual período do dia você estuda? Digite "M" para matutino, "V" para Vespertino ou "N" para Noturno.`).toUpperCase()

// if (periodoQueEstuda === "M") {
//     console.log("Bom Dia!")
// } else if (periodoQueEstuda === "V") {
//     console.log("Boa Tarde!")
// } else if (periodoQueEstuda === "N") {
//     console.log("Boa Noite!")
// } else {
//     console.log(`Insira um período válido. Digite "M" para Matutino, "V" para Vespertino ou "N" para Noturno.`)
// }


// 3. 
// const periodoQueEstuda = prompt(`Em qual período do dia você estuda? Digite "M" para matutino, "V" para Vespertino ou "N" para Noturno.`).toUpperCase()

// switch (periodoQueEstuda) {
//     case "M":
//         console.log("Bom Dia!")
//         break
//     case "V":
//         console.log("Boa Tarde!")
//         break
//     case "N":
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log(`Insira um período válido. Digite "M" para Matutino, "V" para Vespertino ou "N" para Noturno.`)
// }


// 4.
// const generoFilme = prompt("Qual o gênero do filme que você vai assistir?").toLowerCase()
// const valorIngresso = Number(prompt("Qual o valor do ingresso do filme?"))

// if (generoFilme === "fantasia" && valorIngresso <= 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }


// DESAFIOS
// 1.
// const generoFilme = prompt("Qual o gênero do filme que você vai assistir?").toLowerCase()
// const valorIngresso = Number(prompt("Qual o valor do ingresso do filme?"))

// if (generoFilme === "fantasia" && valorIngresso <= 15) {
//     const lanchinho = prompt("Qual lanche você vai comprar para assistir o filme?").toLowerCase()
//     console.log("Bom filme!")
//     console.log(`Aproveite o seu ${lanchinho}.`)
// } else {
//     console.log("Escolha outro filme :(")
// }

// 2.
const nomeUsuario = prompt("Digite seu nome completo.")
const tipoDeJogo = prompt(`Insira "IN" se o ingresso que deseja comprar é internacional ou "DO" se for nacional.`).toUpperCase()
const etapaDoJogo = prompt(`Indique a etapa do jogo que deseja comprar. Insira "SF" para semifinal, "DT" para Decisão 3º lugar ou "FI" para Final.`).toUpperCase()
const categoriaIngresso = prompt(`Escolha a categoria do ingresso que deseja comprar. Categorias disponíveis: 1,2,3 ou 4`)
const quantidadeIngresso = Number(prompt("Quantos ingressos deseja comprar?"))

