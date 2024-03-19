console.log("Trabalhando com atribuição de variáveis");

const idade = 20;
//const nome = "Taís";
let nome = "Taís";
const sobrenome = "Pescone";

//console.log(nome + " " + sobrenome)
console.log(nome, sobrenome)
console.log(`Meu nome é ${nome} ${sobrenome}`);

nome = nome + sobrenome;

console.log(nome)
//Quando a variavel nome esta com const, estava dando erro pq:
//Erro, praticamente está tentando variar uma constante; ai entra o let, que pode variar o valor da variável...
//TypeError: Assignment to constant variable.

//
//