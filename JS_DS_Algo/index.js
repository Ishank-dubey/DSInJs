var DS = require('./DS');

DS.findBiggest([81, 1,2,43,4, 80]);


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
