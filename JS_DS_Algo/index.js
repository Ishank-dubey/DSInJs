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
//require('./QueueADT').reverseKElementsInaQueue(Queue, 4);
//console.log(Queue.deQueue(), Queue.deQueue(), Queue.deQueue(), Queue.deQueue(), Queue.deQueue());

//console.log(require('./QueueADT').findConsecutivePairsWise(stack));


console.log('TREE 1');
var Tree = require('./TreeADT').TreeADT();
var Tree1 = require('./TreeADT').TreeADT();
var Tree2 = require('./TreeADT').TreeADT();
Tree.insert(2);
Tree.insert(1);
Tree.insert(3);
Tree.insert(2.5);
Tree.insert(1.5);
Tree.insert(.5);
Tree.insert(4);
Tree.insert(13);

 //Tree2.insertBSTWithParentWithRecurssion(7);
 var ROOT1 = Tree2.insertBSTWithParentWithRecurssion(12);
Tree2.insertBSTWithParentWithRecurssion(10);
Tree2.insertBSTWithParentWithRecurssion(1);
Tree2.insertBSTWithParentWithRecurssion(5);
Tree2.insertBSTWithParentWithRecurssion(4);
Tree2.insertBSTWithParentWithRecurssion(3);
Tree2.insertBSTWithParentWithRecurssion(13);
Tree2.insertBSTWithParentWithRecurssion(15);
Tree2.insertBSTWithParentWithRecurssion(14);
Tree2.insertBSTWithParentWithRecurssion(14.5);

console.log('EXPRESSON-->');
var theroot = Tree2.expressionTree(['A','B','C','*','+', 'D', '/']);

postOrder(theroot);
console.log('expression start');
function postOrder(node){
	if(!node){
		return  null;
	}
	if(node.left){
		postOrder(node.left);
	}
	if(node.right){
		postOrder(node.right);
	}
	
	console.log(node.data);
}
console.log('expression end');
//Tree2.traverseRecursivePreOrder();
console.log(Tree2.postOrderSuccessor(ROOT1.left), "<---SUCCESSOR POST");

//Tree2.insertBSTWithParentWithRecurssion(.5);
//Tree2.insertBSTWithParentWithRecurssion(4);
var ROOT = Tree2.insertBSTWithParentWithRecurssion(13);
console.log('Traversal Successor');
//console.log(Tree.inOrderSuccessor(ROOT.right.right.right));
//console.log(Tree2.InorderSuccessorUsingParent(ROOT.right.left));
//Tree.inOrderTraverseWithRecursion();
console.log('---<<>>--');
//Tree2.inOrderTraverseWithRecursion();
console.log('Traversal Successor End');
//console.log('--');
//Tree.inOrderTraverseWithStack();
//console.log('--');
//Tree.traverseNoRecurssionPreOrder();
console.log('--');
//console.log(Tree.constructTreeFromInorderAndPreorderTraversal(0, 8, [0.5,1,1.5,2,2.5,3,4,13], [2,1,0.5,1.5,3,2.5,4,13]));
console.log('--Ansector nodes');
//console.log(Tree.lowestCommonAncestorInOneTraversal(4, 2.5));
Tree.findAncestorsOfGivenNode(13);
console.log('--Ansector nodes--End');
Tree1.insert(2);
Tree1.insert(1);
Tree1.insert(3);
Tree1.insert(2.5);
Tree1.insert(1.5);
Tree1.insert(.5);
Tree1.insert(4);
Tree1.insert(13);

//console.log(Tree1.formTreeFromPreOrderTraversal(['I','L','I','L','L']));
//Tree1.addingNextSiblingsUsingQueue(Tree1.getRootNode());
Tree1.addingNextSiblingViaRecursion(Tree1.getRootNode());
console.log(Tree1.getRootNode().left.right.nextSibling.nextSibling.right.data, ' checking');
//console.log(Tree.findVerticalSum(Tree.getRootNode()));
//Tree.findMirrorOfTree();

var genericTree = require('./GenericTreesADT').GenericTreeADT();
//console.log(genericTree.findDepthFromParentParray([-1, 0 , 1, 6, 6, 0, 0, 2, 7, 8]), 'DEPTH') ;

/**/
//Form generic tree
/**/
var obj = {data: 1, firstChild: {data: 11, firstChild: null, nextSibling:{
	data: 12, firstChild: null, nextSibling: null
}}, nextSibling:{
data: 2, firstChild: null, nextSibling:{
	data: 3, firstChild: null, nextSibling: {
		data: 40, firstChild: null, nextSinling: null
	}
}
}
};
var genericTreeRoot = {};
genericTreeRoot.nextSibling = obj;
//genericTree.findSiblingsOfTheGenericTree(genericTreeRoot);
//genericTree.findChildNodesGivenANode(obj);
//console.log(genericTree.formAKArrayTreeFromPreOrderTraversal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 0, 4));
console.log(genericTree.findTheLevelsInKArrayTree([0, 1, 2, 3, 4, 5, 
													  6, 7, 8, 5, 6, 
													  7, 8, 5, 6, 7, 
													  8, 5, 6, 7, 8, 
													  5, 6, 7, 8, 5, 
													  6, 7, 8, 5, 6, 
													  7, 8, 5, 6, 7, 
													  8, 5, 6, 7, 8, 
													  5, 6, 7, 8, 5, 
													  6, 7, 8, 5, 6, 
													  7, 8, 5, 6, 7, 
													  8, 5, 6, 7, 8,
													  5, 6, 7, 8, 5,
													  6, 7, 8, 5, 6,
													  7, 8, 5, 6, 7,
													  8, 5, 6, 7, 8,
													  5, 6, 7, 8, 5,
													  6, 7, 8, 5, 6,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  7, 8, 5, 6, 7,
													  ], 4), 'LEVELS');
//console.log(Tree.findIfTreesAreMirrors(Tree.getRootNode(), Tree1.getRootNode()));
//console.log(Tree.findIfTreesAreStructurallySimilar(Tree.getRootNode(), Tree1.getRootNode()));

//Tree.insert(30);
//Tree.insert(40);
//Tree.insert(50);
//Tree.insert(60);
//Tree.insert(70);
//Tree.insert(35);
//Tree.insert(4);
//Tree.insert(-1);
//Tree.insert(0.6);
//Tree.traverseRecursivePreOrder();
//Tree.traverseNoRecurssionPreOrder();

//Tree.inOrderTraverseWithRecursion();
//Tree.inOrderTraverseWithStack();
//Tree.postOrderWithRecursion();
//Tree.postOrderWithStack();
//Tree.printNodesAtLevel(2);
//Tree.printNodesLevelWise();
//Tree.searchElement(11);
//Tree.size();
//Tree.printTreeElementsInReverseOrderAtEachLevel();
//Tree.findNumberofLevels();
//console.log(Tree.diameterUsingHeight());
//console.log(Tree.findDiameter1());
//Tree.allRoutesFromRootToLeaf();
//console.log(Tree.findIfPathHasExactSumAndPrintPathWhichHasTheSum(8));

console.log(Tree1.sumOfAllNodesInTree());

console.log(DS.sequentialRemoval(['a','b','c','d'],['z']));