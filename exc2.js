const linhas = input.split('\n');
const ladrilhos = linhas[1].split(' ').map(str => Number(str));
const numeroDeLadrilhos = ladrilhos.length;
const tamanhoPulo = Number(linhas[2]);

let energia = 100;

let indiceMaria = 0;

const realizarSalto = () => {
    const ladrilhoAlvo = (indiceMaria + tamanhoPulo) % numeroDeLadrilhos;
    const energiaNecessaria = ladrilhos[ladrilhoAlvo] === 0 ? 1 : 3;

    if (energia < energiaNecessaria) {
        console.log('maria ficou sem energia');
        return true;
    }

    energia = energia - energiaNecessaria;
    indiceMaria = ladrilhoAlvo;
}

realizarSalto();
while(indiceMaria !== 0) {
    if(realizarSalto()) break;
}

console.log(energia);