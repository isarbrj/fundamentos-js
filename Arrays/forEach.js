const notas = [10, 2.3, 7, 4];
let somaNotas = 0; 
notas.forEach(nota => {
    somaNotas += nota
})

let media = somaNotas/notas.length;

console.log(`Sua média é de: ${media} pontos`);