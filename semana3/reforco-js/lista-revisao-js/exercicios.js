// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
//   return array.reverse()
let arrayInvertido = []
    for (i = array.lenght-1; i >= 0; i--) {
        arrayInvertido.push(array[i])
    }
    return arrayInvertido
}
console.log(retornaArrayInvertido())

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
//   return array.sort()
let arrayOrdenado = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i+1]) {
            arrayOrdenado.push(array[i])
        }
    return arrayOrdenado
    }
}
console.log((retornaArrayOrdenado()))


// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayNumerosPares = array.filter((array) => {
        return (array[i] % 2 === 0)
    })
}
// let arrayNumerosPares = []
//     for (numeros of array) {
//         if (array[i] % 2 === 0) {
//             arrayNumerosPares.push(array[i])
//         }
//     return arrayNumerosPares
//     }
// }

console.log(retornaNumerosPares())

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayNumerosPares = array.filter((array) => {
        if (array[i] % 2 === 0) {
            return array[i]*array[i]
        }
    })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}