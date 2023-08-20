let sortingFunctions = require('./Sorting').Sorting;
//console.log(sortingFunctions());


let array = require('./arrays');
let {findFirstNegativeNumberInWindowEfficient} = array();
//console.log(findFirstNegativeNumberInWindowEfficient([-8, 2, 3, -6, 10],2));


let all = require('./all');
let allObj = all();
allObj.longestConsecutiveSubSequenceNaive([1,3,9,2,8,2]);


let tree = require('./TreeADT').TreeADT();
/*tree.insert(8);
tree.insert(1);
tree.insert(.1);
tree.insert(2);
tree.insert(3);
tree.insert(7);*/
tree.insert(10);
tree.insert(11);
tree.insert(-1);
tree.insert(-2);
tree.insert(-3);

//tree.inOrderTraverseWithRecursion();

//tree.printLevelsUsingLoop();

//console.log(tree.getSizeRecurssion());
console.log(tree.findHeightRecurssion());
console.log(tree.findNumberofLevels());
console.log(tree.getSizeRecurssion());
console.log('-----------xxxxx');
tree.leftViewRecursive();
console.log('-----------');
tree.leftiewIterative();

console.log('----------yyyyyyy');
//console.log(tree.childrenSumProperty());
console.log(tree.isBalancedEfficient());