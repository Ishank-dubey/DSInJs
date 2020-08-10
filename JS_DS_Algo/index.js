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
 //var ROOT1 = Tree2.insertBSTWithParentWithRecurssion(12);
Tree2.insertBSTWithParentWithRecurssion(10);
Tree2.insertBSTWithParentWithRecurssion(1);
Tree2.insertBSTWithParentWithRecurssion(5);
Tree2.insertBSTWithParentWithRecurssion(4);
Tree2.insertBSTWithParentWithRecurssion(3);
Tree2.insertBSTWithParentWithRecurssion(13);
Tree2.insertBSTWithParentWithRecurssion(11);
Tree2.insertBSTWithParentWithRecurssion(15);
Tree2.insertBSTWithParentWithRecurssion(14);
Tree2.insertBSTWithParentWithRecurssion(14.5);

console.log('RAnGE');
Tree2.findNodesInRange(1, 15);
console.log('RAnGE');
//console.log(Tree2.findLCAInBST(11, 15), "LCA");
console.log(Tree2.isBST(), "iSBST");
console.log(Tree2.BSTFromSortedArray([1,2,3]),"New");
var Tree3 = require('./TreeADT').TreeADT();

console.log('--INserting--in AVL');

Tree3.insertInAVL(4);
Tree3.insertInAVL(7);
Tree3.insertInAVL(2);
Tree3.insertInAVL(6);
Tree3.insertInAVL(8);
Tree3.insertInAVL(5);
Tree3.traverseRecursivePreOrder();
var Tree4 = require('./TreeADT').TreeADT();

var Tree5 = require('./TreeADT').TreeADT();
Tree5.insertInAVL(4);
Tree5.insertInAVL(7);
Tree5.insertInAVL(2);
Tree5.insertInAVL(6);
Tree5.insertInAVL(8);
Tree5.insertInAVL(5);

console.log("TREE5");
Tree5.traverseRecursivePreOrder();
Tree5.linkNodesAtaLevelUsingRecurssion();
console.log("0000000");
console.log(Tree5.getRootNode().left, 'Tree5.getRoot().left');
console.log("TREE5 DELETE EAF");
console.log(Tree5.findTheNodeWithMinDiffFromAGivenKeyUsingRecurssion(10), "difference KEY");
//Tree5.deleteLeaves();
Tree5.traverseRecursivePreOrder();
console.log("TREE5 END");
console.log('form avl');
Tree4.formFullAVL(2);
console.log(Tree4.getRootNode());
console.log('form avl EBD');
console.log(Tree3.getRootNode(), 'the height');
console.log('--INserting--');
console.log('DELETE-->');
var Tree5 = require('./TreeADT').TreeADT();
console.log(Tree5.findNumberOfNodesForMinAVL(5),"min nodes");
var theroot = Tree2.expressionTree(['A','B','C','*','+', 'D', '/']);

//console.log(Tree2.findElementInBSTRecurssion(14), "-----\\\\-----");
//console.log(Tree2.findElementInBSTIterative(140), "==========");

//console.log(Tree2.findMinInBSTRecurssion(140), "====MIN======");
//console.log(Tree2.maxRecursivelyInBST(140), "====MAX======");
//console.log(Tree2.maxValueInBSTIteration(140), "====MAX======");
Tree2.inOrderTraverseWithRecursion();
Tree2.deleteNodeFromSubTree(1);
Tree2.inOrderTraverseWithRecursion();
//postOrder(theroot);
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
///console.log(Tree2.postOrderSuccessor(ROOT1.left), "<---SUCCESSOR POST");

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
var heap = require('./HeapADT').HeapADT();
console.log('HEAP---');
//heap.insert(31);
//heap.insert(10);
//heap.insert(16);
//heap.heapifyArray([20, 40, 10]);
heap.heapSort([20, 40, 10, 100, 0]);
var _heap = require('./HeapADT').HeapADT();
//console.log(heap.getMax());
//console.log(_heap.slidingWindowMaximum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10] , 3));

_heap.insertAsMInHeap(3);
_heap.insertAsMInHeap(20);
_heap.insertAsMInHeap(1);
_heap.deleteMin();
console.log(_heap.deleteMin(), 'MIN');
_heap.deleteMin();
console.log(_heap.getMax(), 'give them a coat');
console.log('---HEAP');
console.log(Tree1.sumOfAllNodesInTree());
var runningMedian = require('./HeapADT').runningMedian();
console.log(runningMedian(1), 'running median');
console.log(runningMedian(9), 'running median');
console.log(runningMedian(2), 'running median');
console.log(runningMedian(0), 'running median');
console.log(DS.sequentialRemoval(['a','b','c','d'],['z']));
var _graph = require('./GraphADT').GraphADTAdjacencyMatrix();
_graph.setVertixes(3);
_graph.initializeAdjecencyMatrix(3);
//var test = require('./GraphADT').piTill50Decimal(50);
var _graph2 = require('./GraphADT').GraphADTUsingAdjacencyList();
_graph2.setVertices(8);
_graph2.addEdge(0, 3);
_graph2.addEdge(0, 4);
_graph2.addEdge(1, 3);
_graph2.addEdge(2, 4);
_graph2.addEdge(2, 7);
_graph2.addEdge(4, 6);
_graph2.addEdge(3, 5);
//_graph2.addEdge(3, 6);
//_graph2.addEdge(0, 6);
//_graph2.addEdge(3, 7);
_graph2.addEdge(6, 7);
//_graph2.addEdge(7, 6);
//_graph2.addEdge(0, 7);
console.log(_graph2.findEdgeBetween(0, 0), "find edge");
console.log(_graph2.findEdgeBetween(0, 3), "find edge");
console.log(_graph2.findEdgeBetween(0, 2), "find edge");
console.log(_graph2.findEdgeBetween(0, 1), "find edge");
console.log(_graph2.findEdgeBetween(1, 3), "find edge");
console.log(_graph2.findEdgeBetween(6, 7), "find edge", 6, 7);
//console.log(_graph2.dfs(), 'DFS');
_graph2.bfs();
_graph2.topolgicalSort();