function myButton() {
  alert("Pesan telah terkirim, mohon tunggu beberapa saat ya ^^");
}

//Side Bar
let navigation = document.querySelector(".navigation");
let toggle = document.querySelector(".toggle");
toggle.onclick = function () {
  navigation.classList.toggle("active");
};

// script.js
const beratPaketInput = document.getElementById("weight");
const tujuanSelect = document.getElementById("tujuan");
const hitungButton = document.getElementById("hitungButton");
const hasilOngkos = document.getElementById("hasilOngkos");

hitungButton.addEventListener("click", () => {
  const beratPaket = parseFloat(beratPaketInput.value);
  const tujuan = tujuanSelect.value;
  let tarifPerKg;

  // Menentukan tarif per kilogram berdasarkan tujuan
  switch (tujuan) {
    case "Jakarta Barat":
      tarifPerKg = 5000; // Ganti dengan tarif per kilogram untuk Kota A
      break;
    case "Jakarta Pusat":
      tarifPerKg = 8000; // Ganti dengan tarif per kilogram untuk Kota B
      break; 
    case "Jakarta Selatan":
      tarifPerKg = 10000; // Ganti dengan tarif per kilogram untuk Kota C
      break;
    case "Jakarta Timur":
      tarifPerKg = 12000; // Ganti dengan tarif per kilogram untuk Kota D
      break;          
    case "Bekasi":
      tarifPerKg = 25000; // Ganti dengan tarif per kilogram untuk Kota E
      break;
    case "Depok":
      tarifPerKg = 20000; // Ganti dengan tarif per kilogram untuk Kota F
      break;
    case "Tangerang":
      tarifPerKg = 6000; // Ganti dengan tarif per kilogram untuk Kota G
      break;
    case "Bogor":
      tarifPerKg = 21000; // Ganti dengan tarif per kilogram untuk Kota H
      break;
    default:
      tarifPerKg = 0; // Jika tidak ada tujuan yang dipilih
  }

  if (tarifPerKg === 0 || isNaN(beratPaket)) {
    hasilOngkos.textContent =
      "Pilih tujuan dan masukkan berat paket yang valid.";
  } else if (beratPaket > 100) {
    hasilOngkos.textContent = "maximum weight";
  } else {
    alert("Sedang kami hitungkan ya ^^");
    const ongkosKirim = beratPaket * tarifPerKg;
    hasilOngkos.textContent = `Ongkos kirim ke ${tujuan}: Rp ${ongkosKirim}`;
  }
});
