/**
 * Reverse Words
 * Ubah urutan kata-kata didalam kalimat menjadi tervalik.
 * Misalnya kalimat "Saya Belajar Javascript" output : "Javascipt belajar Saya"
 */

function reverseWords(key) {
   let result = '';
   let newResult = '';
   for (let i = 0; i <= key.length - 1; i++) {
      if (key[i] !== ' ') {
         newResult += key[i];
      } else {
         result = newResult + ' ' + result;
         newResult = '';
      }
   }
   result = newResult + ' ' + result;
   return console.log(result);
}

reverseWords('Saya belejar Javascript');
