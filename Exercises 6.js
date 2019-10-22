/* 1.
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
}*/

//2.
/*
console.log('LOOPING PERTAMA');
for(var curr=2; curr<=20; curr += 2){
    console.log (curr.toString() + ' - I love coding');
}

console.log('LOOPING KEDUA');
for(var curr=20; curr>=2; curr -= 2){
    console.log (curr.toString() + ' - I will become fullstack developer');
}
*/

//3.
for (var i=1; i<= 100; i++){
    if (i % 2 === 0) console.log ('GENAP');
    else console.log ('GANJIL');
}

function kelipatan (k) {
    for (var j=1; j<= 100; j++){
        if (j % k === 0) console.log (j + ' KELIPATAN ' + k);
        else '\n';
    }    
}

var k=2;
kelipatan (k);
k=5;
kelipatan (k);
k=9;
kelipatan(k);