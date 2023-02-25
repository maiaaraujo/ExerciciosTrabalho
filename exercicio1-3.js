//desenvolver um algoritmo que efetue a soma de todos os numeros impares que são e que se encontram no conjunto de numeros de 1 ate 500

// ir de 1 a 500

// os numeros impares

// os multiplos por 3 (divindindo por 3 da)

let soma = 0;

for (let i = 0; i < 500; i++){ // para ler do 1 ao 500 ; pq i tem que ser < e nao <= 500?
    if((i % 2) != 0){ //os numeros impares
        if((i % 3) == 0) // os numeros multiplos de 3
        soma = soma + i;
    }

}

alert (soma);


// let soma = 10 + 50;
// console.log(soma);

// let subtracao = "100" - 50;
// console.log(subtracao);

// let multiplicação = "100" * 2;
// console.log(multiplicação);

// let divisao = "10" / 2;
// console.log(divisao);