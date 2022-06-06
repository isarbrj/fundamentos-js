const notas = [10, 7, 6.2, 9]

somaDasNotas = 0;

for(let i =0; i < notas.length; i++){
    somaDasNotas += notas[i]
};

let media = somaDasNotas/notas.length;

console.log(media);