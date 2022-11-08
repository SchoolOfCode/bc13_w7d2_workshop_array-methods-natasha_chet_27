let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

//4a
const isMultipleOfSeven = sevenTimesTable.every(element => element% 7 === 0);

console.log(isMultipleOfSeven)

//4b
const isMultipleOfSeventySeven = seventySevenTimesTable.every(element => element% 77 === 0);

console.log(isMultipleOfSeventySeven)

//4c 
const findNumber = seventySevenTimesTable.find(element => element% 77 !== 0);

console.log(findNumber)

//4d
const findIndexNumber = seventySevenTimesTable.findIndex(element => element% 77 !== 0);

console.log(findIndexNumber)

