~~~
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let ocorrencias = 0;
    for(let i of arrayDeNumeros){
        if(i === numeroEscolhido) {
            ocorrencias += 1 
        }
    }
    if(ocorrencias === 0){
return `Número não encontrado`
    } else {
        return `O número ${numeroEscolhido} aparece ${ocorrencias}x`
    }
}
~~~