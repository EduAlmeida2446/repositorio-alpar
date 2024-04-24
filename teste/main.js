const prompt = require(`prompt-sync`)()

// function pessoas (nome,idade) {
//     this.nome = nome;
//     this.idade = idade;
// }
// let pessoas = new pessoas ("Maria", 25);
// console.log(pessoas())

// let frutas = ["maca","pera"];
// console.log(frutas)

// console.log("Digitar novas frutas")



let numero = parseInt(prompt("Digite um número inteiro positivo maior que 1: "));

if (numero <= 1) {
    console.log("O número deve ser maior que 1.");
} else {
    let Primo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            Primo = false;
            break;
        }
    }
    if (Primo) {
        console.log(numero + " é um número primo.");
    } else {
        console.log(numero + " não é um número primo.");
    }
}