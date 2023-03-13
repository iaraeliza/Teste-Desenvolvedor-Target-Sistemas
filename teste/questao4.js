/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de 
representação que cada estado teve dentro do valor total mensal da distribuidora.*/

// Valor de faturamento mensal por estado
const faturamentoPorEstado = {
  "SP": 67836.43,
  "RJ": 36678.66,
  "MG": 29229.88,
  "ES": 27165.48,
  "Outros": 19849.53
};

// Calcula o valor total de faturamento mensal
const total = Object.values(faturamentoPorEstado).reduce((acc, curr) => acc + curr, 0);

// Calcula o percentual de representação de cada estado
const representacaoPorEstado = {};
for (let estado in faturamentoPorEstado) {
  const faturamento = faturamentoPorEstado[estado];
  const representacao = (faturamento / total) * 100;
  representacaoPorEstado[estado] = representacao.toFixed(2) + "%";
}

// Imprime os resultados
console.log("Percentual de representação do faturamento mensal por estado:");
console.log(representacaoPorEstado);