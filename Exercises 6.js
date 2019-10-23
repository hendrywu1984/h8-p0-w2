 //1.
 
var curr = 2;

console.log('LOOPING PERTAMA');

while (curr <= 20) {
    console.log (curr.toString() + ' - I love coding');
    curr += 2;
}

curr = 20;

console.log('LOOPING KEDUA');

while (curr >=2) {
    console.log(curr.toString() + ' - I will become fullstack developer');
    curr -= 2;
}

//2.

console.log('LOOPING PERTAMA');
for(var curr=2; curr<=20; curr += 2){
    console.log (curr.toString() + ' - I love coding');
}

console.log('LOOPING KEDUA');
for(var curr=20; curr>=2; curr -= 2){
    console.log (curr.toString() + ' - I will become fullstack developer');
}


//3.
for (var i=1; i<= 100; i++){
    if (i % 2 === 0) console.log ('GENAP');
    else console.log ('GANJIL');
}

function kelipatan (pertambahan, kelipatan) {
    for (var j=1; j<= 100; j=j+pertambahan){
        if (j % kelipatan === 0) console.log (j + ' KELIPATAN ' + kelipatan);
        else '\n';
    }    
}

var varTambah=2;
var varLipat=3;
kelipatan (varTambah, varLipat);
varTambah=5;
varLipat=6;
kelipatan (varTambah, varLipat);
varTambah=9;
varLipat=10;
kelipatan (varTambah, varLipat);