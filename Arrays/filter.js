const alunos = ["Ana", "Mari", "lara", "Isa"];
const notas = [10, 7, 6, 3];

const reprovados = alunos.filter ((aluno, indice) => notas[indice] < 6 );

console.log(reprovados);