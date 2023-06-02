let sortingFunctions = require('./Sorting').Sorting;
//console.log(sortingFunctions());


let array = require('./arrays');
let {findFirstNegativeNumberInWindowEfficient} = array();
//console.log(findFirstNegativeNumberInWindowEfficient([-8, 2, 3, -6, 10],2));


let all = require('./all');
let allObj = all();
allObj.longestConsecutiveSubSequenceNaive([1,3,9,2,8,2]);