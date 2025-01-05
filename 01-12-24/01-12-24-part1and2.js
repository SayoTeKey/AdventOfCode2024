// document.getElementById('listOfData-AoC-day1-spreadsheet.csv').addEventListener('change', function (event) {
//     const file = event.target.files[0];
//     if (file) {
//         Papa.parse(file, {
//             header: true,
//             delimiter: ",", // Sicherstellen, dass Kommas als Trennzeichen verwendet werden


//             complete: function (results) {
//                 const data = results.data;
//                 const array1 = [];
//                 const array2 = [];

//                 // Angenommen, die CSV-Datei hat zwei Spalten: 'Liste1' und 'Liste2'
//                 data.forEach(row => {
//                     if (row.Liste1) {
//                         array1.push(Number(row.Liste1));
//                     }
//                     if (row.Liste2) {
//                         array2.push(Number(row.Liste2));
//                     }
//                 });

//                 // Vergleichen der Arrays
//             //     const arraysAreEqual = JSON.stringify(array1) === JSON.stringify(array2);
//             //     document.getElementById('output').innerText = arraysAreEqual ? 'Die Arrays sind gleich' : 'Die Arrays sind unterschiedlich';
//             },
//             error: function (error) {
//                 console.error('Fehler beim Parsen von CSV:', error);
//             }
//         });
//     }
// });

// export function getInput() {
//     return array;
// }

import { getInput } from "./input-day1.js";

let array = getInput();

// 2 lists for numbers
let list1 = [];
let list2 = [];

for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
    list1.push(array[i][0]);
    list2.push(array[i][1]);
}

// console.log("List1:", list1);
// console.log("List2:", list2);


// sorting lists and pair

list1.sort((numbers1, numbers2) => {
    return numbers1 - numbers2;
});

list2.sort((numbers1, numbers2) => {
    return numbers1 - numbers2;
});


console.log("1. Sortierte Liste1: ", list1);
console.log("1. Sortierte Liste2: ", list2);

//find the difference between and add to total distance

let distance = 0;

for (let i = 0; i < list1.length; i++) {

    distance += Math.abs(list1[i] - list2[i]);

}

console.log(distance);

// part2

// Ähnlichkeitswerte

let similarity = 0;
for (let i = 0; i < list1.length; i++) {
    let matches = list2.filter(function(element) { 
        return element === list1[i]}).length;
    similarity += matches * list1[i];
}

console.log(similarity);
