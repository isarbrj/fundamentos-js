const sala1 = [7, 6, 8, 5.5]
const sala2 = [3, 6, 8, 10]
const sala3 = [2, 10, 9, 10]

function mediaSalas(notaSala){
    const somaNotas = notaSala.reduce((acum, atual) => acum + atual, 0)
    return  somaNotas/notaSala.length
}

console.log(`A média da sala 1 é: ${mediaSalas(sala1)}`);
console.log(`A média da sala 2 é: ${mediaSalas(sala2)}`);
console.log(`A média da sala 3 é: ${mediaSalas(sala3)}`);