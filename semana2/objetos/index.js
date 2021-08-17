// Objetos - Exercícios
// Interpretação de código
// 1)
// a. Será impresso:
// Matheus Nachtergale
// Virginia Cavendish
// {canal: "Globo", horario: "14h"}


// 2) 
// a. Será impresso:
//    {nome: "Juca", idade: 3, raca: "SRD" }
//    {nome: "Juba", idade: 3, raca: "SRD" }
//    {nome: "Jubo", idade: 3, raca: "SRD" }
// b. As reticências antes do objeto é a sintaxe do spread ou espalhamento, 
// que permite a copia completa de um objeto para outro e a partir dela alterar ou acrescentar propriedades.

// 3)
// a. Será impresso: 
//    false
//    undefined
// b. O falso será impresso como resposta da chave backender, mas altura será undefined porque não foi previamente
// essa chave dentro do objeto.

// Escrita de código
// 1)
// a.
const pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi" ]
    }

    function frasePessoa (pessoa) {
        console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`) }

    frasePessoa(pessoa)

// b. 
const novaPessoa = {
    ...pessoa,
    apelidos: ["Jess", "Jé", "Jessy"]
}

frasePessoa(novaPessoa)

// 2)
const pessoa1 = {
    nome: "Jessica",
    idade: 30,
    profissao: "Estudante"
}

const pessoa2 = {
    nome: "Bruno",
    idade: 25,
    profissao: "Instrutor"
}

function arrayPessoa1 (pessoa1) {
    const array = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length]
    return array
}

console.log(arrayPessoa1(pessoa1))

//3 
let carrinho = []

const fruta1 = {
    nome: "Banana",
    Disponibilidade: true
}

const fruta2 = {
    nome: "Maçã",
    Disponibilidade: true
}

const fruta3 = {
    nome: "Manga",
    Disponibilidade: true
}

function funcaoFruta () {
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)
    
}

funcaoFruta(fruta1, fruta2, fruta3)
console.log(carrinho)

