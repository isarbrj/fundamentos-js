function calculaMediaGastos(jan = 0, fev = 0, mar = 0, abr = 0, mai = 0, jun = 0, jul = 0, ago = 0, set = 0, out = 0, nov = 0, dez = 0) {

    const media = (jan + fev + mar + abr + mai + jun + jul + ago + set+ out + nov + dez) / 12
    return Math.round(media * 100) / 100;
}

function apresentaUsuario(nome){
    return `Olá meu nome é ${nome}`
}

console.log(apresentaUsuario(`Isa`));
console.log(`A minha média de gastos anual foi de R$${calculaMediaGastos ( 1200, 2500, 700, 1600, 300, 500, 1700, 900, 2000, 1500, 890, 720)}`);
