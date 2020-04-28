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
console.log(DS.findSpansWithStack([10, 4, 5, 90, 120, 80]));
console.log(DS.findSpansWithStart([10, 4, 5, 90, 120, 80]));