/**
 * Buatlah method atau function yang menerima paramater hanya deret angka dan menghasilkan output seperti keterangan diatas
 * Input : devideAndSort(5956560159466056)
 * Output : 55566914566956
 */

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
   hasil = hasil.join('') * 1;
   return console.log(hasil);
}

devideAndSort(5956560159466056);
