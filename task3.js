let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 90, 5, 45, 6, 7, 23];

let isMultipleOfThree = someNumbers.some(element=> element%3===0)


let isMultipleOfFive = someNumbers.some(element=> element%5===0)


let isMultipleOfSixty = someNumbers.some(element=> element%60===0)


let isMultipleOfNinety = someNumbers.some(element=> element%90 === 0)

console.log(isMultipleOfThree,isMultipleOfFive,isMultipleOfSixty,isMultipleOfNinety)