/**
 * Buatlah method atau function yang menerima paramater hanya deret angka dan menghasilkan output seperti keterangan diatas
 * Input : devideAndSort(5956560159466056)
 * Output : 55566914566956
 */

// num dijadikan string dan displit
// split merubah menjadi array, terus method map meloop tiap karakter di array, terus dimasukin ke partResult
// habis selesai looping, part result di sort lalu di join, lalu mengembalikan nilai part result ke array yang di map tadi

function devideAndSort(num) {
   let hasil = num
      .toString()
      .split(0)
      .map((result) => {
         let partResult = [];
         for (let i = 0; i <= result.length - 1; i++) {
            partResult[i] = result.charAt(i);
         }
         partResult = partResult.sort().join('');
         return partResult;
      });
   // Mangubah string menjadi number
   let result = hasil.join(''); // Tambahkan (* 1)
   return console.log(Number(result));
   // return console.log(result);
}

devideAndSort(98706540321);
