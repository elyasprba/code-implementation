/**
 * Buatlah method atau function yang menerima paramater hanya deret angka dan menghasilkan output seperti keterangan diatas
 * Input : devideAndSort(5956560159466056)
 * Output : 55566914566956
 */

// num dijadikan string dan displit
// split merubah menjadi array, terus method map meloop tiap karakter di array, lalu dimasukan ke partResult
// habis selesai looping, part result di sort lalu di join, lalu mengembalikan nilai part result ke array yang di map tadi
// chartAt() digunakan untuk mengetahui nilai char yang ada pada result lalu di tampung ke dalam newResult

function divideAndSort(num) {
   let hasil = num
      .toString()
      .split(0)
      // method map digunakan untuk melooping tiap karakter, lalu dimasukan ke newResult
      .map((result) => {
         let newResult = [];
         for (let i = 0; i <= result.length - 1; i++) {
            newResult[i] = result.charAt(i);
         }
         // habis selesai looping, part result di sort lalu di join, lalu mengembalikan nilai part newResult ke array yang di map tadi
         newResult = newResult.sort().join('');
         return newResult;
      });
   // Mangubah string menjadi number
   hasil = hasil.join(''); // Tambahkan (* 1)
   return console.log(Number(hasil));
   // return console.log(result);
}

divideAndSort(98706540321);
