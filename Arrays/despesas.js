console.log(`---- Gerenciador de Despesas ----`);
const contas = ['saúde', 'escola', 'aluguel', 'academia', 'cartão de crédito', 'água', 'alimentação', 'luz', 'lazer', 'viajens'];

contas.splice (4, 2, `compras`);
console.log(`Total de contas a pagar: ${contas.length}`);

const contasFixas = contas.slice(0, contas.length / 2);
const contasVariaveis = contas.slice(contas.length / 2);

console.log(`Suas contas fixas são: ${contasFixas}`);
console.log(`Suas contas variáveis são: ${contasVariaveis}`);

const despesa = [150, 350, 200, 570, 100, 550, 300, 600, 750, 800];
despesa.pop();
console.log(`O valor de cada conta, respectivamente, é de: ${despesa}`);

var media = (despesa[0], despesa[1], despesa[2], despesa[3], despesa[4]) / despesa.length;
media = Math.round(media * 100) / 100;

console.log(`Sua média de gastos esse mês será de: R$${media}`);
