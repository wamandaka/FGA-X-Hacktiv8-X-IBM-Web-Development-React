// // const foo = "1 jam sama dengan 60 menit";

// // const regex = /(\d+) jam sama dengan (\d+) menit/;

// // console.log(regex.exec(foo));

// const number1 = "021-12345-123";
// const number2 = "021-12345-6784";
// const number3 = "021-12345-12312378";

// const zipCode1 = "12345";
// const zipCode2 = "12345-678";

// const checkPhoneNumber = (number) => {
//   const regex = /^\d{3}-\d{5}-\d{3,4}$/;

//   return regex.test(number);
// };

// // const checkZipCode = (zipCode) => {
// //   const regexZipCode = /^(\d{5})-(\d{3})$/;
// //   return regexZipCode.test(zipCode);
// // };

// console.log(checkPhoneNumber(number1));
// console.log(checkPhoneNumber(number2));
// console.log(checkPhoneNumber(number3));

// // console.log(checkPhoneNumber(zipCode1));
// // console.log(checkPhoneNumber(zipCode2));

// function checkCompanyEmail(email) {
//     // Regex untuk memvalidasi email dengan domain hacktiv8.com atau hacktiv8.co.sg
//     const regex = /^v-[a-zA-Z0-9._%+-]+@hacktiv8\.(com|co\.sg)$/;
//     return regex.test(email);
// }

// // Test Cases
// const email1 = 'v-arrizal@hacktiv8.com'; // true
// const email2 = 'arrizal@hacktiv8.com'; // false
// const email3 = 'v-arrizal@hacktiv8.co.sg'; // true

// console.log(checkCompanyEmail(email1)); // true
// console.log(checkCompanyEmail(email2)); // false
// console.log(checkCompanyEmail(email3)); // true

function checkDateFormat(date) {
    const regex = /^([0-2][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
    return regex.test(date);
}

// Test Cases
console.log(checkDateFormat("31/12/2023")); // true
console.log(checkDateFormat("12/31/2023")); // false (MM/DD/YYYY, harus ditolak)
console.log(checkDateFormat("29/02/2024")); // true (leap year)
console.log(checkDateFormat("30/02/2024")); // false (invalid day)
console.log(checkDateFormat("01/01/1990")); // true

