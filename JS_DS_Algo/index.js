var DS = require('./DS');

DS.findBiggest([81, 1,2,43,4, 80]);
DS.findSmallest([1,2,3,0, -1,10]);


/*DS.insertToLinkedList({data:1});
DS.insertToLinkedList({data:11});
DS.insertToLinkedList({data:21});
DS.insertToLinkedListAtLast({data:100});
DS.insertToLinkedList({data:201});
console.log("Count-->>",DS.countLinkedListItems());
DS.printLinkedList();*/

console.log(DS.fiboWithoutRecurssion(11), "<<-- FIBO w/o Recursion");
console.log(DS.fibo(11), "<<-- FIBO");

var head = DS.formCircularLinkedList(5);
var lasttolast = DS.printKNodesOfLinkedList(head, 7);

console.log(lasttolast.next.next.data, "lTl");


DS.stack.push(1);
DS.stack.push(2);
DS.stack.pop(2);


console.log("--------");
//console.log(DS.findSpansWithStack([10, 4, 5, 90, 120, 80]));
//console.log(DS.findSpansWithStart([10, 4, 5, 90, 120, 80]));

///console.log(DS.reverseStack([1,2,4, 56, 70]));
//DS.arrangeTwoOfTwo(['b','b','b','b', 'a', 'a']);
//DS.arrangeThreeOfThree(['b','b','b','b', 'a', 'a', 'b', 'a', 'a']);
//console.log(DS.highestRectangularAreaInHistogram([2, 5,6, 7, 2, 1, 10, 10]));
//console.log(DS.removeDuplicacyCharacters('aaabbbbaaaaddddde'));
//console.log(DS.removeRepeatingChars("missiidi"));
//DS.nextGreatestNumberWithForLoop([1,2,3]);
//DS.nextGreatestNumberWithForLoop([1,2,4,4,4, 0,1]);
DS.nextGreatestWithStack([1,20,3]);


var Queue = require('./QueueADT').QueueADT();
var QueueLL = require('./QueueADT').QueueLinkedListImplementation();
Queue.enQueue(1);
Queue.enQueue(2);
Queue.enQueue(3);
Queue.enQueue(4);
Queue.enQueue(7);
Queue.enQueue(8);
//require('./QueueADT').reverseQueue(Queue);
var stack = require('./DS').stackFunction();
stack.push(1);
stack.push(2);
stack.push(4);
stack.push(6);
console.log('Half Leaving');
//require('./QueueADT').reverseLeavingQueue(Queue);
//while(!Queue.isEmpty()){
	//console.log(Queue.deQueue());
//}
require('./QueueADT').reverseKElementsInaQueue(Queue, 4);
console.log(Queue.deQueue(), Queue.deQueue(), Queue.deQueue(), Queue.deQueue(), Queue.deQueue());

//console.log(require('./QueueADT').findConsecutivePairsWise(stack));
