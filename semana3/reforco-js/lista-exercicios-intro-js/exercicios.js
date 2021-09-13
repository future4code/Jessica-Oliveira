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

// // EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite aqui a altura do retângulo"))
  const largura = Number(prompt("Digite agora a largura desse retângulo"))
  const area = (altura * largura)
  console.log(area)
}


// // EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Digite o ano atual."))
const anoNascimento = Number(prompt("Digite aqui o ano que você nasceu."))
const idadeUsuario = anoAtual - anoNascimento
console.log(idadeUsuario)
}

// por que as que tem console.log dentro da função não precisam de return? o return não é o resultado consolidado que eu quero repetir?

// imprimeIdade()

// // EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 return peso / (altura * altura)

}

console.log(calculaIMC())

// Por que aqui tem os parâmetros? qual o benefício ou lógica de declarar e vou pedi-los ao usuário de qualquer forma?

// // EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nomeUsuario = prompt("Qual o seu nome?")
const idadeUsuario = Number(prompt("Qual a sua idade?"))
const emailUsuario = prompt("Qual o seu email?")
const mensagem = `Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`
console.log(mensagem)
}

// pq não tem os parâmetros aqui? 


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const primeiraCorFavorita = prompt("Digite a sua cor preferida.")
const segundaCorFavorita = prompt("Digite mais uma cor favorita.")
const terceiraCorFavorita = prompt("Digite outra cor favorita")
const arrayCoresFavoritas = []
arrayCoresFavoritas.push(primeiraCorFavorita, segundaCorFavorita, terceiraCorFavorita)
console.log(arrayCoresFavoritas)
}

// // EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// // EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const quantidadeIngressos = custo / valorIngresso
return quantidadeIngressos
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
return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let temp = array[0]
  array[0] = array[array.length-1]
  array[array.length-1] = temp
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Em que ano você nasceu?"))
  const anoEmissaoCarteira = Number(prompt("Em que ano sua carteira de identidade foi emitida"))

  const idadeUsuario = anoAtual - anoNascimento
  const renovacaoCarteira = anoAtual - anoEmissaoCarteira

  if(idadeUsuario <= 20 && renovacaoCarteira >= 5) {
    console.log(true)
  } else if (idadeUsuario > 20 && idadeUsuario <= 50 && renovacaoCarteira >= 10){
    console.log(true)
  } else if (idadeUsuario > 50 && renovacaoCarteira >=15) {
    console.log(true)
  } else {
    false
  }

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui


  if (ano % 400 === 0) {
    return true
  } else if (ano % 4 === 0 && !(ano % 100 === 0)){
    return true 
  }else {
    return false
  }
  }


//EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
//implemente sua lógica aqui
const maiorDeIdade = prompt("Você tem mais de 18 anos?").toLowerCase()
const ensinoMedioCompleto = prompt("Você possui ensino médio completo?").toLowerCase()
const disponibilidadeExclusiva = prompt("Você possui disponibilidade exclusiva durante os horários do curso?").toLowerCase()

  if (maiorDeIdade === "sim" && ensinoMedioCompleto === "sim" && disponibilidadeExclusiva === "sim"){
    return true
  } else {
    return false
  }
}
