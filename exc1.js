const linhas = input.split('\n');
const numeros = linhas[1].split(' ').map(str => Number(str));


  let menorNumero = numeros[0]; 
  numeros.forEach(num => { 
    if (num < menorNumero) {
      menorNumero = num;
    }
  });
  let ocorrenciasMenorNumero = 0; 
  numeros.forEach(num => { 
    if (num === menorNumero) {
      ocorrenciasMenorNumero += 1;
    }
  });
  console.log(ocorrenciasMenorNumero);