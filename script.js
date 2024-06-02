function goBack() {
    window.history.back();
}
document.getElementById('requestForm').addEventListener('submit', function(event) {
event.preventDefault();

// Mengambil nilai dari setiap input
var nama = document.getElementById('nama').value;
var asal = document.getElementById('asal').value;
var pemainFavorit = document.getElementById('pemainFavorit').value;
var coachFavorit = document.getElementById('coachFavorit').value;
var Kesan = document.getElementById('Kesan').value
var tgl = document.getElementById('tgl').value
var Jersey = document.getElementById('Jersey').value
// Menggabungkan nilai-nilai dalam satu pesan
var pesan = "Nama: " + nama +
        "\nAsal: " + asal +
        "\nTanngal Lahir: " + tgl +
        "\nPemain Favorit: " + pemainFavorit +
        "\nJersey Favorit: " + Jersey +
        "\nCoach Favorit: " + coachFavorit +
        "\nPesan Kesan: " + Kesan;
        

// Menampilkan pesan dalam sebuah alert
alert(pesan);
});