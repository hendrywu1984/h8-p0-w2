var nama = prompt ("Nama Anda: ");
var peran = prompt ("Peran Anda (Ksatria / Tabib / Penyihir) : ");
var pesan;

//cek apakah nama sudah terisi?
if (nama.length === 0) {
  pesan = 'Nama harus diisi!';
} else {
  //cek apakah peran sudah terisi?
  if ((peran.trim()).length === 0) {
    pesan = 'Halo ' + nama + ', Pilih peranmu untuk memulai game!';
  } else {
    //cek peran apakah valid (tidak case sensitive, karena sudah diset menjadi uppercase semua)
    switch (peran.trim().toUpperCase()) {
      case 'KSATRIA':
        pesan = 'Selamat datang di Dunia Proxytia, ' + nama + '\nHalo Ksatria ' + nama + ', Kamu dapat menyerang dengan senjatamu!';
        break;
      case 'TABIB':
        pesan = 'Selamat datang di Dunia Proxytia, ' + nama + '\nHalo Tabib ' + nama + ', Kamu akan membantu temanmu yang terluka.';
        break;
      case 'PENYIHIR':
        pesan = 'Selamat datang di Dunia Proxytia, ' + nama + '\nHalo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!';
        break;
      default:
        pesan = 'Selamat datang di Dunia Proxytia, ' + nama + '\nKamu salah menginput peranmu di dalam game ini';
        break;
    }
  }
}
console.log (pesan);
alert (pesan);