/**
 * Reverse Words
 * Ubah urutan kata-kata didalam kalimat menjadi tervalik.
 * Misalnya kalimat "Saya Belajar Javascript" output : "Javascipt belajar Saya"
 */

function reverseWords(sentence) {
   sentence = sentence.split(' ');
   let result = [];
   result = sentence.reverse();
   return console.log(result.join(' '));
}

reverseWords('Saya belejar Javascript');
