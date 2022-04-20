function ArkFood(harga, voucer, jarak, pajak) {
   // potongan harga
   let potongan = 0;
   if (voucer == 'ARKAFOOD5' && harga >= 50000) {
      potongan = harga * 0.5;
      if (potongan >= 50000) {
         potongan = 50000;
      }
   }

   if (voucer == 'DITRAKTIRDEMY' && harga >= 25000) {
      potongan = harga * 0.6;
      if (potongan >= 30000) {
         potongan = 30000;
      }
   }

   // proses tarif
   let tarifAntar = 0;
   if (jarak <= 2) {
      tarifAntar = 5000;
   }
   if (jarak > 2) {
      tarifAntar = 5000 + (jarak - 2) * 3000;
   }

   // proses pajak
   let tarifPajak = 0;
   if (pajak === true) {
      tarifPajak = harga * 0.05;
   }

   // proses perhitungan total
   let subTotal = harga - potongan + tarifAntar + tarifPajak;
   return console.log(`Harga : ${harga} \nPotongan : ${potongan} \nBiaya Antar : ${tarifAntar} \nPajak : ${tarifPajak} \nSubTotal : ${subTotal}`);
}

ArkFood(75000, 'ARKAFOOD5', 5, true);
