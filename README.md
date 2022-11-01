# AppleDeveloperAcademy-Challenge
Este repositório contém a resolução da etapa de teste técnico proposto pela Apple Developer Academy para o processo seletivo de 2023-2024.

## Exercício 1

Dada uma lista de números inteiros arr de tamanho n, conte quantas vezes o menor elemento aparece na lista.

- Entrada

A primeira linha contém um inteiro n, que representa da lista arr.
A segunda linha contém n inteiros separados por espaço, que são os elementos de arr, sendo arr[i] o i-ésimo elemento da lista.

- Restrições

1 ≤ n ≤ 10⁵

1 ≤ arr[i] ≤ 10⁵

- Saída

Um único número inteiro indicando quantas vezes o menor elemento de arr aparece na lista.


- Exemplo

Entrada:
```dados
4
5 4 9 4
``` 
Saída:
```dados
2
```
Explicação: o menor elemento da lista é o número 4, que ocorre duas vezes na lista.

## Exercício 2

Maria está brincando de pular ladrilhos. Existem dois tipos de ladrilhos: azuis e vermelhos. Nesta brincadeira, há um número n de ladrilhos sequenciais ladrilhos. O objetivo de Maria é pular de ladrilho em ladrilho até chegar novamente no ladrilho inicial.

Maria começa com uma quantidade de energia e = 100 e gasta uma unidade de energia a cada pulo; quando ela pula para um ladrilho vermelho, isto é, ladrilhos[i] = 1, ela gasta duas unidades de energia adicionais. Maria começa do ladrilho de índice 0 e usa 1 unidade de energia para fazer um pulo de tamanho k para o ladrilho de índice (i + k) % n. A brincadeira acaba quando Maria retorna ao ladrilho de índice 0.

Seu objetivo é criar um programa que retorne a quantidade de energia restante de Maria após finalizar a brincadeira.

- Entrada

A primeira linha contém um inteiro n, que representa o tamanho da lista ladrilhos.
A segunda linha contém n inteiros separados por espaço, que são os elementos de ladrilhos, sendo ladrilhos[i] o tipo do i-ésimo ladrilho, onde:
ladrilhos[i] = 0 indica que o i-ésimo ladrilho é azul;
ladrilhos[i] = 1 indica que o i-ésimo ladrilho é vermelho.
A terceira linha contém um inteiro k representando o tamanho do pulo que Maria deve dar.

- Restrições

2 ≤ n ≤ 25

1 ≤ k ≤ n

n % k = 0

ladrilhos[i] ∈ {0, 1}

- Saída

A energia restante de Maria após o término da brincadeira, isto é, após retornar ao ladrilho inicial.


- Exemplo
Entrada:
```dados
4
0 1 1 0
2
```
Saída:
```dados
96
```
Explicação:

Maria inicia a brincadeira no ladrilho de índice 0 com energia e = 100:

ela pula para o ladrilho de índice 0 + 2 = 2 e gasta 3 unidades de energia (1 unidade com o pulo e 2 unidades porque o ladrilho no índice 2 é vermelho, ou seja, ladrilhos[2] = 1); a energia total de Maria após o pulo é e = 100 - 3 = 97;
ela pula para o ladrilho de índice (2 + 2) % 4 = 0 e gasta 1 unidade de energia; a energia total após o pulo é e = 97 - 1 = 96; como Maria retornou ao ladrilho de índice 0, a brincadeira é encerrada.
A energia final de Maria, após todos os pulos, é e = 96.

## Exercício 3

João participou de uma prova de sua escola e recebeu a sua nota atrasada esta semana. Em sua escola, foi disponibilizado um mural com a nota de todos os alunos que realizaram a prova e João precisa consultar este mural para, com sua nota, saber qual foi a sua posição final no ranking deste exame, pois ela foi disponibilizada somente após a publicação do mural. Este mural está em ordem descrescente, de forma que a primeira pessoa está no 1º lugar do ranking. Participantes que obtiveram a mesma nota ocupam o mesmo lugar no ranking.

Por exemplo, considerando o mural ranking = [50, 45, 45, 42, 40, 30] e a nota de João j = 41, as posições de quem está no ranking (sem considerar a nota de João) são 1º, 2º, 2º, 3º, 4º e 5º, respectivamente. Se compararmos a nota de João com o mural, sua posição final seria 4º lugar.

Seu objetivo é, dado o mural e nota de João, informar a posição final de João no ranking.

- Entrada

A primeira linha contém um inteiro n, que representa o tamanho do mural ranking.
A segunda linha contém n inteiros separados por espaço, que são os elementos de ranking, sendo ranking[i] o i-ésimo elemento da lista.
A terceira linha contém a nota de João j.

- Restrições

1 ≤ n ≤ 103

0 ≤ ranking[i] ≤ 105

0 ≤ j ≤ 105
 
- Saída

Um número inteiro representando a posição final de João no ranking.

 
- Exemplo
Entrada:
```dados
4
100 90 80 80
80
```
Saída:
```dados
3
```
Explicação:

A nota 100 está na 1ª colocação, a nota 90 está na 2ª e as notas 80 estão na 3ª. Como João obteve 80 de nota, também está em 3º lugar.

## Exercício 4

Você está visitando uma vinícola que tem uma única fileira de parreiras (pé de uva) organizadas da esqueda para a direita. As parreiras são representadas por uma lista parreiras onde parreiras[i] indica o tipo da uva que a i-ésima parreira produz.

Você precisa colher a maior quantidade de cachos de uva possível. Porém, existem algumas regras que você deve seguir, de acordo com a proprietária:

você tem apenas duas cestas e cada cesta pode armazenar apenas um único tipo de uva. Não há limite na quantidade de cachos de uva que cada cesta pode armazenar;
começando de qualquer parreira à sua escolha, você deve colher exatamente um cacho de uva de cada parreira (incluindo da parreira de onde você inicia a colheita) movendo-se para a direita. Os cachos colhidos devem poder ser armazenados em uma de suas cestas;
quando você chegar a uma parreira cujo cacho não pode mais ser armazenado em uma de suas cestas, você deve parar a colheita.
Dada uma lista de números inteiros parreiras, construa um programa que retorne a quantidade máxima de cachos de uva que você pode colher.

- Entrada

A primeira linha contém um inteiro n, que representa o tamanho da lista parreiras.
A segunda linha contém n inteiros separados por espaço, que são os elementos de parreiras, sendo parreiras[i] o tipo da uva produzida pela i-ésima parreira.

- Restrições

1 ≤ n ≤ 105

0 ≤ parreiras[i] < 105
 
- Saída

Um número inteiro representando a quantidade máxima de cachos de uva que você pode colher na fileira de parreiras da vinícola.


- Exemplo
Entrada:
```dados
4
1 2 2 1
```
Saída:
```dados
4
```
Explicação:

Como há apenas dois tipos de uvas, podemos colher de todas as parreiras, pois cada tipo de uva pode ser armazenado em uma cesta. Logo, a saída é a quantidade de parreiras, ou seja, 4.



