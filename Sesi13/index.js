// function seatingArrangement(students) {
//   let maleStudents = [];
//   let femaleStudents = [];
//   let result = [];

//   // Separate students by gender
//   students.forEach((student) => {
//     if (student.gender === "male") {
//       maleStudents.push(student.name);
//     } else {
//       femaleStudents.push(student.name);
//     }
//   });

//   // Pair up students of the same gender
//   while (maleStudents.length > 1) {
//     result.push([maleStudents.shift(), maleStudents.shift()]);
//   }
//   while (femaleStudents.length > 1) {
//     result.push([femaleStudents.shift(), femaleStudents.shift()]);
//   }

//   // Add any remaining students as individual groups
//   if (maleStudents.length) result.push([maleStudents.shift()]);
//   if (femaleStudents.length) result.push([femaleStudents.shift()]);

//   return result;
// }

// const students = [
//   {
//     name: "Adi",
//     gender: "male",
//   },
//   {
//     name: "Budi",
//     gender: "male",
//   },
//   {
//     name: "Cindy",
//     gender: "female",
//   },
//   {
//     name: "Susi",
//     gender: "female",
//   },
//   {
//     name: "Santi",
//     gender: "female",
//   },
//   {
//     name: "Robi",
//     gender: "male",
//   },
// ];

// console.log(seatingArrangement(students));
// /*
//     [
//         ['Adi', 'Budi],
//         ['Cindy', 'Susi'],
//         ['Santi'],
//         ['Robi']
//     ]
// */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = [3, 2, 5, 6, 4, 7, 8, 9, 10, 1, 11];
let arrChar = [
  "Paimon",
  "Amber",
  "Bennet",
  "Rell",
  "Nahida",
  "Kuki",
  "Kamisato Ayaka",
  "Eula",
  "Jean",
  "Diluc",
];
// console.log(arr[0] + arr[1]);
// arr.push(11); // [1,2,3,4,5,6,7,8,9,10,11]

// arr.pop(); // [1,2,3,4,5,6,7,8,9]

// arr.unshift(0); // [0,1,2,3,4,5,6,7,8,9,10]

// arr.shift(); // [2,3,4,5,6,7,8,9,10]

// arr.sort((a, b) => a - b);
// arr.sort(function (a, b) {
//   return a > b;
// });
// arrChar.sort();

console.log(arr.length);
// console.log(arrChar);
