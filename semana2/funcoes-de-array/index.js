// Exercícios Funções de Array - Aula 10
// Parte 1 - Interpretação de Código

// 1)
// a. Nesse caso, a função vai devolver cada objeto do array original como um novo array contendo o item em si, a posição que ele ocupa no array original e o array original novamente.

// b. Nesse caso como nosso callback usa apenas o item como parâmetro, ele devolve um novo array com todos os nomes do array original.

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

// c. Ele devolverá o novo array com os objetos que passaram no teste da condição (true), ou seja, que tem o apelido diferente de "Chijo".

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// Parte 2 - Escrita de Código
// 1)
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  // a.
//  const nomeDosDoguinhos = pets.map((item, index, array) => {
//      return item.nome
//  })

//  console.log(nomeDosDoguinhos)

// b.

// const salsichinhas = pets.filter((item, index, array) => {
//     return item.raca === "Salsicha"
// })

// console.log(salsichinhas)

// c.

// const descontoParaPoodle = pets
// .filter((item, index, array) => {
//     return item.raca === "Poodle" 
// })
// .map((item, index, array) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
// })

// console.log(descontoParaPoodle)

2. 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a.
const nomeDosProdutos = produtos.map((item) => {
    return item.nome
})

console.log(nomeDosProdutos)

// b. 

const produtosComDesconto = produtos.map((item) => {
    return {nome: item.nome, preco: item.preco - (item.preco*0.05)}
})
console.log(produtosComDesconto)

// c.
const produtosCategoriaBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})
console.log(produtosCategoriaBebidas)

// d.
const produtosYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
} )
console.log(produtosYpe)

// e.
const frasesProdutosYpe = produtosYpe.map((item) => {
    return `Compre ${item.nome} por R$${item.preco}.`
})
console.log(frasesProdutosYpe)



