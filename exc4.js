const linhas = input.split('\n');
const uvas = linhas[1].split(' ').map(str => Number(str));

const ocorrenciasDeCadaTipoDeUva = {};

uvas.forEach(tipoUva => {
    if (ocorrenciasDeCadaTipoDeUva[tipoUva]) {
        ocorrenciasDeCadaTipoDeUva[tipoUva] += 1
    } else {
        ocorrenciasDeCadaTipoDeUva[tipoUva] = 1
    }
})

const valoresDeOcorrencias = Object.values(ocorrenciasDeCadaTipoDeUva).sort((a, b) => b - a);
const duasMaioresOcorrencias = [valoresDeOcorrencias[0], valoresDeOcorrencias[1]];

console.log(duasMaioresOcorrencias.reduce((acc, currValue) => acc + currValue));