function konversiMenit(menit) {
    // you can only write your code here!
    var jam, vMenit;

    //menghitung menjadi jam
    jam =  Math.floor(parseFloat(menit)/60).toString();

    //membuat jam menjadi 2 digit
    if(jam.length === 1) {
        jam = '0' + jam;
    } else {
        if (jam >= 24) hasilJam = 'Error';
    }

    //menghitung menit
    vMenit = menit - (jam * 60);
    
    //membuat menit menjadi 2 digit
    if(vMenit.toString().length === 1) vMenit = '0' + vMenit;
    
    return jam + ':' + vMenit;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00