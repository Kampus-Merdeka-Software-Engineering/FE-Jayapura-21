const slider = document.querySelector('.slider');
let slideIndex = 1;
function showSlide(index) {
  slider.style.transform = `translateX(-${(index - 1) * 100}%)`;
}
function nextSlide() {
  slideIndex = (slideIndex % 5) + 1;
  showSlide(slideIndex);
}
setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik

//Side Bar
let navigation = document.querySelector('.navigation');
let toggle = document.querySelector('.toggle');
toggle.onclick = function () {
  navigation.classList.toggle('active');
}

const BASE_URL = 'http://localhost:3000'

function InputData(event) {
  event.preventDefault();
  // const Noid = document.querySelector("#id");
  const NamaPengirim = document.querySelector("#nama_pengirim");
  const EmailPengirim = document.querySelector("#email_pengirim");
  const AlamatPengirim = document.querySelector("#address_pengirim");
  const NamaPenerima = document.querySelector("#nama_penerima");
  const EmailPenerima = document.querySelector("#email_penerima");
  const AlamatPenerima = document.querySelector("#address_penerima");
  const YourMessage = document.querySelector("#pesan");

  fetch(`${BASE_URL}/InputBarang`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // No_Id: Noid.value,
      Nama_Pengirim: NamaPengirim.value,
      Email_Pengirim: EmailPengirim.value,
      Alamat_Pengirim: AlamatPengirim.value,
      Nama_Penerima: NamaPenerima.value,
      Email_Penerima: EmailPenerima.value,
      Alamat_Penerima: AlamatPenerima.value,
      Your_Message: YourMessage.value,
    }),
  }).then(response => response.json())
    .then(response => {
      alert(`Data berhasil disimpan, nomor resi anda adalah ${response.No_Id}`);
      // Noid.value = ''
      NamaPengirim.value = '';
      EmailPengirim.value = '';
      AlamatPengirim.value = '';
      NamaPenerima.value = '';
      EmailPenerima.value = '';
      AlamatPenerima.value = '';
      YourMessage.value = '';
    }).catch((error) => {
    console.error(error);
  });
}

function cekresi(event) {
  const resi = document.querySelector("#resi");
  fetch(`${BASE_URL}/tracking/${resi.value}`)
  .then(response => response.json())
  .then(response => {
  if(response.data){
    const {
      Nama_Pengirim,
      Email_Pengirim,
      Alamat_Pengirim,
      Nama_Penerima,
      Email_Penerima,
      Alamat_Penerima,
      Your_Message
    } = response.data;
     document.querySelector("#content-resi").innerHTML = `
     <table>
     <h2>Data Pelanggan</h2>
     <table class="usertbl">
         <tr>
             <th>Data</th>
             <th>value</th>
         </tr>
         <tr>
             <td>Nama Pengirim</td>
             <td>${Nama_Pengirim}</td>
         </tr>
         <tr>
             <td>Email Pengirim</td>
             <td>${Email_Pengirim}</td>
         </tr>
         <tr>
             <td>Alamat Pengirim</td>
             <td>${Alamat_Pengirim}</td>
         </tr>
         <tr>
             <td>Nama Penerima</td>
             <td>${Nama_Penerima}</td>
         </tr>
         <tr>
             <td>Email Penerima</td>
             <td>${Email_Penerima}</td>
         </tr>
         <tr>
             <td>Alamat Penerima</td>
             <td>${Alamat_Penerima}</td>
         </tr> 
         <tr>
             <td>Message</td>
             <td>${Your_Message}</td>
         </tr>
     </table>
     `;
    }else{
      alert("Data tidak ditemukan");
    }  
    })
    .catch((error) => {
    console.error(error);
  });
}