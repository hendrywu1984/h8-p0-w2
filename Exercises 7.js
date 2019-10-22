var rows1 = 5;

for (var i = 1; i <= rows1; i++){
    console.log('*');
}


var rows2 = 5;
var cetak='';

for (var k = 1; k <= rows2; k++){
    for (var l = 1; l <= rows2; l++){
        cetak += '*';
    }
    console.log(cetak);
    cetak = '';
}

var rows3 = 10;

for (var m = 1; m <= rows3; m++) {
    for(var n = 1; n <= m; n ++) {
        cetak += '*';
    }
    console.log(cetak);
    cetak = '';
}