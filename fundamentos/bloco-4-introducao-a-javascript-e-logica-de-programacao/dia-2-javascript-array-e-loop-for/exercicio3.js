let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let mediaA = 0;

for  (let index = 0; index < numbers.length; index += 1) {
    soma += (numbers[index])
    mediaA = soma / numbers.length;
}

mediaA = soma / numbers.length;

console.log(mediaA);

//calcule e imprima a média aritmética dos valores contidos no array;//