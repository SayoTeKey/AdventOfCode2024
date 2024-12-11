import { getInput } from "./input-day1.js";

let array = getInput();

// Ähnlichkeitswerte

let similarity = 0;
for (let i = 0; i < list1.length; i++) {
    let matches = list2.filter(function(element) { 
        return element === list1[i]}).length;
    similarity += matches * list1[i];
}