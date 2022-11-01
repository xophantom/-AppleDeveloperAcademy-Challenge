const linhas = input.split('\n');
let notas = linhas[1].split(' ').map(str => Number(str));
const notaDoJoao = Number(linhas[2]);
notas.push(notaDoJoao);
notas = notas.sort((a, b) => a - b);
notas = notas.reverse();
console.log(notas);

let posicaoAtual = 1;
let notaAtual = notas[0];
for(const nota of notas) {
    if (nota !== notaAtual) {
        posicaoAtual += 1;
        notaAtual = nota;
    }
    if (notaAtual === notaDoJoao) {
        console.log(posicaoAtual);
        break;
    }
}