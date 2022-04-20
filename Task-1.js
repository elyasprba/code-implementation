/**
 * Deteksi Palindrom
 * periksa apakah kata tersebut adalah palindro atau tidak.
 * Misalnya tekx "Malam", output = palindrom
 */

function cekPalindrom(cek) {
   let hasil = cek;
   let newString = '';

   for (let i = hasil.length - 1; i >= 0; i--) {
      newString = newString + hasil[i];
   }
   if (newString !== hasil) {
      return console.log('Bukan Palindrom');
   }
   return console.log('Palindrom');
}

cekPalindrom('makan');
