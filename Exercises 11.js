function balikKata(kata) {
  // you can only write your code here!
  
    var panjangKata = kata.length;
    var finalKata = '';
    /* apabila pakai array
    var tempKata = [];
    
    
    for (var i = 0; i < panjangKata; i++) {
        tempKata[i] = kata[panjangKata-i-1]; 
        finalKata += tempKata[i];
    }
    return finalKata;
  */
    for (var j = 1; j <= panjangKata; j++){
        finalKata+= kata.charAt(panjangKata-j);
    }

    return finalKata;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS