/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.*/

const fs = require('fs');

// Lê o arquivo JSON contendo as informações do faturamento diário
const faturamentoDiario = JSON.parse(fs.readFileSync('dados.json'));

// Inicializa as variáveis de mínimo, máximo e soma
let min = Infinity;
let max = Number.MIN_VALUE;
let soma = 0;
let diasComFaturamentoMaiorQueMedia = 0;

// Percorre o vetor de faturamento diário e calcula o mínimo, o máximo e a soma
faturamentoDiario.forEach((dia) => {
  const valor = dia.valor;

  if (valor < min && valor > 0) {
    min = valor;
  }

  if (valor > max) {
    max = valor;
  }

  if (valor > 0) {
    soma += valor;
  }
});

// Calcula a média mensal de faturamento
const diasComFaturamento = faturamentoDiario.filter((dia) => dia.valor > 0);
const media = soma / diasComFaturamento.length;

// Calcula o número de dias no mês em que o valor de faturamento diário foi superior à média mensal
diasComFaturamentoMaiorQueMedia = diasComFaturamento.filter((dia) => dia.valor > media).length;

// Imprime os resultados
console.log(`Menor valor de faturamento: R$ ${min.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${max.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média mensal: ${diasComFaturamentoMaiorQueMedia}`);
``
