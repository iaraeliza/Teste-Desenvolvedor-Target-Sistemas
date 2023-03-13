/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
 escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e 
 retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

function fibonacci(n) {
  if (n < 0) {
    return "O número deve ser positivo!";
  } else if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    let seq = fibonacci(n - 1);
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return seq;
  }
}

function verificaFibonacci(num) {
  let seq = fibonacci(100); // define o tamanho máximo da sequência
  if (seq.includes(num)) {
    return num + " pertence à sequência de Fibonacci!";
  } else {
    return num + " não pertence à sequência de Fibonacci!";
  }
}

// exemplo de uso
console.log(verificaFibonacci(4)); // retorna "4 não pertence à sequência de Fibonacci!"
console.log(verificaFibonacci(21)); // retorna "21 pertence à sequência de Fibonacci!"


