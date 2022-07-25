let word = 'Breno';
let reverse = '';


for (let index = word.length - 1; index >= 0; index-=1) {
    reverse += word[index];
}

console.log('A palavra era ' + word);
console.log('Escrevendo ao contrário se torna ' + reverse);

//algoritmo que é capaz de inverter uma palavra.//