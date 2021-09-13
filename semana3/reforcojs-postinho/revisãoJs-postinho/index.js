
//COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 2));

// // b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//     //  Sua lógica aqui
//     return `No comparador de igualdade ${a}===${b} é ${a === b}`
// }

// console.log(checarIgualdade(1, 2))

// // c-)Faça uma função chamada "verificaSeEMaior"
// function verificaSeEMaior (a,b) {
//     if (a > b) {
//         return `${a} é maior que ${b}`
//     } else {
//         return `${a} não é maior que ${b}`
//     }
// }
// console.log(verificaSeEMaior(321, 2156));
// console.log(verificaSeEMaior(2156, 321));

// Exercício 2------------------------------------------------------------------------------------
// Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


//CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

// const cadastro = () => {
//     const usuario = []

//     //  Sua lógica aqui
//     const nomeDoUsuario = prompt("Qual o seu nome?").toLowerCase()
//     const anoDeNascimento = Number(prompt("Insira seu ano de nascimento."))
//     const senhaDoUsuario = prompt("Insira sua senha de no mínimo 6 dígitos").toLowerCase()
//     const nacionalidade = prompt("Insira sua nacionalidade").toLowerCase()

//     const anoAtual = 2021
//     const idadeDoUsuario = anoAtual - anoDeNascimento

//     console.log(idadeDoUsuario)

//     if (idadeDoUsuario >= 18 && senhaDoUsuario.length >= 6 && (nacionalidade === "brasileira"||"brasileiro")) {
//         usuario.push(nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade)
//     } else {
//         return `Não foi possível concluir seu cadastro`
//     }

//     return usuario

// }
// console.log(cadastro());


// Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = "labenu"
//     //  Sua lógica aqui
//     const senhaInserida = prompt("Insira aqui sua senha.").toLowerCase()

//     if (login === senhaInserida) {
//         return `Usuário logado`
//     } else {
//         return `Senha Inválida`
//     }
// }

// console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {

//     //  Sua lógica aqui
//     const nomeDoUsuario = prompt("Qual o seu nome?").toLowerCase()
//     const vacinaUsuarioTomou = prompt("Qual vacina você tomou?").toLowerCase()

//     let tempo = " "
//     if(vacinaUsuarioTomou === "coronavac") {
//         tempo = "28 dias"
//     } else if (vacinaUsuarioTomou === "Astrazeneca"||"Pfizer") {
//         tempo = "90 dias"
//     }
//     let dataDaPrimeiraDose = "01/09/2021"
//     let dataRetorno = " "

//     if(vacinaUsuarioTomou === "coronavac") {
//         dataRetorno = "29/09/2021"
//     } else {
//         dataRetorno = "01/12/2021"
//     }

//     return `Olá ${nomeDoUsuario}! A próxima dose da ${vacinaUsuarioTomou} é daqui ${tempo} dias. Compareça no posto na data ${dataRetorno}.`

// }
// console.log(primeiraDose())


// // LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]
    
//     const validacaoVacina = usuarios.filter((usuario) => {
//         if (usuario.nome === nomeDoUsuario)
//         usuario.imunizacao = "completa"
//         return usuario
//     })

//     return validacaoVacina

// }

    

// console.log(segundaDose("Barbara"));

// // Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]
//     const avisoAtraso = usuarios.filter((usuario) => {
//         if (usuario.imunizacao === "incompleta") {
//             console.log(`Olá ${usuario.nome}! Sua imunização está ${usuario.imunizacao}, por favor volte ao postinho para tomar a  segunda dose.`)
//         }
//     })
//         }
// console.log(avisoAosAtrasados());


// // DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {
    //  Sua lógica aqui

    const nome = prompt("Qual o seu nome?").toLowerCase()
    const ano = Number(prompt("Insira seu ano de nascimento."))
    const senha = prompt("Insira sua senha de no mínimo 6 dígitos").toLowerCase()
    const nacionalidade = prompt("Insira sua nacionalidade").toLowerCase()

    const anoAtual = 2021
    const idadeDoUsuario = anoAtual - ano

    if (idadeDoUsuario >= 18 && senha.length >= 6 && (nacionalidade === "brasileira"||"brasileiro")) {
        usuarios.push({nome, ano, nacionalidade, senha})
    } else {
        return `Não foi possível concluir seu cadastro`
    }

    return usuarios

}

console.log(cadastro());

const login = () => {
    
    const senhaInserida = prompt("Insira sua senha de no mínimo 6 dígitos").toLowerCase()

    const checaSenha = usuarios.filter((usuario) => {
        if(usuario.senha === senhaInserida) {
        console.log(`Usuário logado`)
        } else {
        console.log(`Senha Inválida`)
        }
})

}

login()


// const primeiraDose = () => {
// //  Sua lógica aqui
// }

    const vacinaUsuarioTomou = prompt("Qual vacina você tomou?").toLowerCase()


// console.log(primeiraDose())


// console.log(primeiraDose())
// const segundaDose = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDose("ALGUM NOME AQUI"));

// const avisoAosAtrasados = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasados());