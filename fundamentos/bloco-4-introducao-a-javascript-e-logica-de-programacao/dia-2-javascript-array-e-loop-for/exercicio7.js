let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorN = 100;

for  (let i = 0; i < numbers.length; i+= 1) {
  
  if (numbers[i] < menorN) {
     menorN= numbers[i];
  }
}

console.log(menorN + 'é o menor numero')