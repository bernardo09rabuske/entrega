// function calcularcusto() {
    
//     let salarioMinimo = parseFloat(prompt("Digite o valor do salário mínimo em reais: "));
//     let quilowattsConsumidos = parseFloat(prompt("Digite a quantidade de quilowatts consumidos pela residência: "));
    
   
//     let valor100kWh = salarioMinimo / 7;
    
    
//     let valorPorkWh = valor100kWh / 100;

   
//     let valorTotal = quilowattsConsumidos * valorPorkWh;

   
//     let valorComDesconto = valorTotal * 0.9;

    
//     console.log(`Valor de cada quilowatt: R$ ${valorPorkWh.toFixed(2)}`);
//     console.log(`Valor a ser pago sem desconto: R$ ${valorTotal.toFixed(2)}`);
//     console.log(`Valor com desconto de 10%: R$ ${valorComDesconto.toFixed(2)}`);
// }


// calcularcusto();





// function aplicaçãodedesconto(){
//     let valorProduto = parseFloat(prompt("Digite o valor do produto em reais"))

// let desconto = valorProduto * 0.09
// let Total = valorProduto - desconto

// console.log(`Valor original do produto : R$ ${valorProduto.toFixed(2)}`);
// console.log(`Desconto de 9%: R$ ${desconto.toFixed(2)}`);
// console.log(`Valor após o desconto: R$ ${Total.toFixed(2)}`);

// }

// aplicaçãodedesconto();




// function faturamentofitas() {
    
//     let quantidadeFitas = parseInt(prompt("Digite a quantidade de fitas da locadora: "));
//     let valorAluguel = parseFloat(prompt("Digite o valor do aluguel por fita em reais: "));
    
   
//     let fitasAlugadasPorMes = quantidadeFitas / 3;  
//     let faturamentoMensal = fitasAlugadasPorMes * valorAluguel;
//     let faturamentoAnual = faturamentoMensal * 12;

    
//     let fitasDevolvidasComAtrasoPorMes = fitasAlugadasPorMes / 10;  
//     let multaPorAtraso = valorAluguel * 0.10;  
//     let ganhoComMultasPorMes = fitasDevolvidasComAtrasoPorMes * multaPorAtraso;
//     let ganhoComMultasAnual = ganhoComMultasPorMes * 12;

    
//     let fitasEstragadasPorAno = quantidadeFitas * 0.02;  
//     let fitasReposicao = quantidadeFitas / 10;  
//     let quantidadeFinalFitas = quantidadeFitas - fitasEstragadasPorAno + fitasReposicao;

    
//     console.log(`Faturamento anual da locadora: R$ ${faturamentoAnual.toFixed(2)}`);
//     console.log(`Valor ganho com multas por mês: R$ ${ganhoComMultasPorMes.toFixed(2)}`);
//     console.log(`Valor ganho com multas por ano: R$ ${ganhoComMultasAnual.toFixed(2)}`);
//     console.log(`Quantidade de fitas no final do ano: ${quantidadeFinalFitas}`);
// }


// faturamentofitas();




// function cdu(){
//     let CentenaDezenaUnidade = prompt("Digite um número com três dígitos :");

//     let invertNumero = CentenaDezenaUnidade.split('').reverse().join('');

//     console.log(`Número Invertido : ${invertNumero}`);
// }
// cdu();








function conta() {
    
    let numeroConta = prompt("Digite o número da conta corrente de 3 dígitos: ");
    
    //alteracao
    if (numeroConta.length !== 3) {
        console.log("Insira um número de conta corrente com exatamente 3 dígitos.");
        return;
    }
    let inverteNumero = numeroConta //invertido
    for(let i =0;i<inverteNumero.length;i++);
    let soma = parseInt(inverteNumero) + parseInt(numeroConta)
    
    let somaString = String(soma)
    let somaAux = 0
    for(let i = 0; i<somaString.length;i++){
        somaAux += parseInt(somaString[i]*(i+1))
    }   
    let somaAuxString = String(soma)
    let verificador = somaAuxString[somaAuxString.length-1]
    
    console.log(`O número de acesso da sua conta é :  ${verificador}`)
}

conta();
