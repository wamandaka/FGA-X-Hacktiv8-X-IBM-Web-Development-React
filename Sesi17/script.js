// function listPrima(angkaPertama, angkaKedua) {
//   let prima = [];

//   for (let i = angkaPertama; i <= angkaKedua; i++) {
//     if (angkaPrima(i)) {
//       prima.push(i);
//     }
//   }

//   return prima;
// }

// function angkaPrima(num) {
//   if (num < 2) return false;
//   for (let i = 2; i * i <= num; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// console.log(listPrima(1, 5)); // [2, 3, 5]
// console.log(listPrima(5, 10)); // [5, 7]
// console.log(listPrima(10, 20)); // [11, 13, 17]

// function sumOfDigits(number) {
//     let sum = 0;
//     let num = number < 0 ? -number : number; // Menghandle angka negatif secara manual

//     while (num > 0) {
//         sum += num % 10; // Ambil digit terakhir
//         num = (num - (num % 10)) / 10; // Hilangkan digit terakhir tanpa menggunakan Math.floor
//     }

//     return sum;
// }

// // Contoh penggunaan
// console.log(sumOfDigits(1234)); // Output: 6 (1 + 2 + 3)
// console.log(sumOfDigits(567)); // Output: 22 (4 + 5 + 6 + 7)
// console.log(sumOfDigits(54321)); // Output: 24 (9 + 8 + 7)

// function sumOfDigits(num) {
//   let sum = 0;

//   // Jika angkanya negatif, ubah menjadi positif
//   if (num < 0) {
//     num = -num;
//   }

//   for (; num > 0; num = (num - (num % 10)) / 10) {
//     sum += num % 10; // Ambil digit terakhir dan tambahkan ke sum
//   }

//   return sum;
// }

// // Contoh penggunaan
// console.log(sumOfDigits(1234)); // Output: 6 (1 + 2 + 3)
// console.log(sumOfDigits(567)); // Output: 22 (4 + 5 + 6 + 7)
// console.log(sumOfDigits(54321)); // Output: 24 (9 + 8 + 7)

// function asterisk(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }

// // Contoh penggunaan
// asterisk(5);
// /*
//  *
//  **
//  ***
//  ****
//  *****
//  */

function reverseAsterisk(n) {
  if (n === 0) return;
  
  console.log('*'.repeat(n));
  
  reverseAsterisk(n - 1);
}

// Contoh penggunaan
reverseAsterisk(5);
/*
 *****
 ****
 ***
 **
 *
 */
