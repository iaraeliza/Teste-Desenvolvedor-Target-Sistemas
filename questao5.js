/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/

// Define a string a ser invertida
const str = "Hello, world!";

// Cria uma nova string para armazenar o resultado
let inverted = "";

// Percorre a string original de trás para frente e adiciona cada caractere na nova string
for (let i = str.length - 1; i >= 0; i--) {
  inverted += str[i];
}

// Imprime a string invertida
console.log(inverted);