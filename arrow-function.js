console.log('-----Caixa Eletrônico-----')

const pagarConta = (conta, saldo) => {
    if ( saldo >= conta) {
       return console.log( `A conta foi paga, seu saldo atual é de R$${saldo - conta}`)

    } else {
        return console.log( `A conta não foi paga pois você não possui saldo suficiente, faltam R$${conta - saldo} para que a conta seja paga`)
    }
}

 pagarConta(100, 900);
