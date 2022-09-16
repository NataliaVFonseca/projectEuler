

// Desafio: Encontre o maior palíndromo feito do produto de dois números de 3 algarismos.

let palindromic = palindromicProduct();
let largerPalindromic = palindromic[palindromic.length-1];
console.log("o maior numero palíndromo feito do produto de dois números de 3 algarismos é: " + largerPalindromic )


function palindromicProduct(){

    let product ;
    let vetProduct = [];
    let vetPalindromic5 = [];
    let vetPalindromic6 = [];
    let vetPalindromic = [];
    

    for( var i = 100; i <= 999; i++){
        for( var j = 100; j <= 999; j++){

            product = i * j; 
            productString = product.toString();
            vetProduct.push(productString);


            if(productString.length == 5 && productString.substr(0, 1) === (productString.substr(4, 1)) && productString.substr(1, 1) === productString.substr(3, 1)){
                vetPalindromic5.push(productString); 
            }
             
            if(productString.length == 6 && productString.substr(0, 1) === productString.substr(5, 1) && productString.substr(2, 1) === productString.substr(3, 1) && productString.substr(1, 1) === productString.substr(4, 4)) {
                vetPalindromic6.push(productString);
             }
        }
    }

    vetPalindromic = vetPalindromic5.concat(vetPalindromic6);
    console.log("vet soma: " + vetPalindromic);

    return vetPalindromic;
    }


