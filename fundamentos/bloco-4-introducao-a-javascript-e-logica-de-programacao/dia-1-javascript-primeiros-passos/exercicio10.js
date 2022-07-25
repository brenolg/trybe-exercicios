const custo = 30;
const venda = 60;
let quntidadeDeVenda = 1000;
let imposto = custo * 0.20;
let custoTotal = custo + imposto;
let custoDeProducao = custoTotal * quntidadeDeVenda;
let lucroDeVenda = venda * quntidadeDeVenda;
let lucroLiquido = lucroDeVenda - custoDeProducao;
console.log(lucroLiquido);

//Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.//
