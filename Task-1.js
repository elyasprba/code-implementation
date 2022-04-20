/**
 * Deteksi Palindrom
 * periksa apakah kata tersebut adalah palindro atau tidak.
 * Misalnya tekx "Malam", output = palindrom
 */

function cekPalindrom(cek) {
   let hasil = cek.toLowerCase();
   let result = '';

   for (let i = hasil.length - 1; i >= 0; i--) {
      result = result + hasil[i];
   }
   if (result === hasil) {
      return 'Palindrom';
   }
   return 'Bukan Palindrom';
}
console.log(cekPalindrom('Malam'));
console.log(cekPalindrom('Malim'));
