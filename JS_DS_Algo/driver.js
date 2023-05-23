let sortingFunctions = require('./Sorting').Sorting;
console.log(sortingFunctions());


let array = require('./arrays');
let {findFirstNegativeNumberInWindowEfficient} = array();
console.log(findFirstNegativeNumberInWindowEfficient([-8, 2, 3, -6, 10],2));