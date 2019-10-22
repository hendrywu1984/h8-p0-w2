//untuk menampilkan nilai default
var today = new Date();
var pesan = '';
var cetak = '';
var bulan = '';

//akan berulang apabila inputan tidak valid
do {            
    pesan = '';
    //menampung inputan dengan type int
    var hari = parseInt(prompt ('Masukkan tanggal lahirmu [1-31]: ', today.getDate()));
    var bulan = parseInt(prompt ('Masukkan bulan lahiranmu [1-12]: ', today.getMonth()+1));
    var tahun = parseInt(prompt ('Masukkan tahun lahirmu [1900-2200]: ', today.getFullYear()));
            
    
    //validasi jumlah hari per bulan (31)
    if (bulan === 1 || bulan === 3 || bulan === 5 || bulan === 7 || bulan === 8 || bulan === 10 || bulan === 12) {
        //validasi bulan yang memiliki 31 hari
        if (hari < 1 || hari > 31) {
            pesan += 'Tanggal yang Anda input harus tanggal 1-31\n'
        } else {
            //set tanggal yang valid (Jan, Mar, Mei, Jul, Aug, Okt, Des)
            switch (bulan) {
                case 1:
                    bulan = ' Januari '
                    break;
                case 3:
                    bulan = ' Maret '
                    break;
                case 5:
                    bulan = ' Mei '
                    break;
                case 7:
                    bulan = ' Juli '
                    break;
                case 8:
                    bulan = ' Agustus '
                    break;
                case 10:
                    bulan = ' Oktober '
                    break;            
                case 12:
                    bulan = ' Desember '
                    break;
            }
        }
    } else 
    if (bulan === 4 || bulan === 6 || bulan === 9 || bulan === 11){
        //validasi bulan yang memiliki 30 hari
        if (hari < 1 || hari > 30) {
            pesan += 'Tanggal yang Anda input harus tanggal 1-30\n'
        } else {
            //set tanggal yang valid (Apr, Jun, Sept, Nov)
            switch (bulan) {
                case 4:
                    bulan = ' April '
                    break;
                case 6:
                    bulan = ' Juni '
                    break;
                case 9:
                    bulan = ' September '
                    break;
                case 11:
                    bulan = ' November '
                    break;
            }
        }
    } else {
        //validasi bulan februari
        if (bulan === 2){
            //validasi hari di tahun kabisat or not
            if ((tahun % 4 === 0 && (hari >= 1 && hari <= 29)) || (tahun % 4 !== 0 && (hari >= 1 && hari <= 28))) {
                bulan = ' Februari '
            } else {
                pesan += 'Tanggal yang anda masukkan tidak valid\n'
            }
        } else {
            pesan += 'Bulan yang Anda masukkan tidak valid\n'
        }
    }

    cetak = hari + bulan + tahun;
    //validasi tahun        
    if (tahun < 1900 || tahun > 2200) pesan += 'Tahun yang Anda masukkan tidak valid\n';

    if (pesan.length > 0) {
        pesan = "Terdapat kesalahan input, yaitu:\n" + pesan + "\nSilakan input ulang kembali";
        alert(pesan);
    }
 } while (pesan.length > 0)

 console.log(cetak);
 alert(cetak);
