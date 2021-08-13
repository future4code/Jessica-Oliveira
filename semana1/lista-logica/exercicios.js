// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite aqui a largura do retângulo."))
  const largura = Number(prompt("Agora insira a largura do retângulo."))
  const area = (altura*largura)
  console.log(area)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite aqui o ano atual."))
  const anoNascimento = Number(prompt("Agora digite o ano em que você nasceu."))
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return (peso / (altura*altura))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite o seu nome.")
  const idade = prompt("Insira sua idade.")
  const email = prompt("Agora insira seu email.")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const primeiraCor = prompt("Digite sua cor preferida.")
  const segundaCor = prompt("Digite aqui mais uma cor que você prefere.")
  const terceiraCor = prompt ("Insira mais uma cor que você prefere.")
  const arrayCores = [primeiraCor, segundaCor, terceiraCor]
  console.log(arrayCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  
  let temp = array[0] 
  array[0] = array[array.length - 1] 
  array[array.length - 1] = temp

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()
}


// EXERCÍCIO 13
// function checaRenovacaoRG() {
//   // implemente sua lógica aqui
//   const anoAtual = Number(prompt("Insira o ano atual."))
//   const anoNascimento = Number(prompt("Insira o ano em que você nasceu."))
//   const emissaoRG = Number(prompt("Insira o ano em que sua carteira de trabalho foi emitida."))

//   const idade = anoAtual - anoNascimento
//   const vencimentoRG = anoAtual - emissaoRG

//   if (idade <= 20 && vencimentoRG >= 5) {
//     true 
//   } else {
//     false 
//   }

//   if (idade >= 20 <= 50 && vencimentoRG >= 10) {
//     true 
//   } else {
//     false 
//   }

//   if (idade >= 50 && vencimentoRG >= 15) {
//     true 
//   } else {
//     false 
//   }

//  return checaRenovacaoRG
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}