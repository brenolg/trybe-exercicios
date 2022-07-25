const a = 60;
const c = 60;
const b = 59;

if (a + b + c === 180) {
    console.log(true)
}else if (a + b + c < 0) {
    console.log("valor invalido")
}else {
    console.log(false)
} 

//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.//