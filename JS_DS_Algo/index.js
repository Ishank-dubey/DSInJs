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
console.log(DS.removeRepeatingChars("aaaaa"), 'removeRepeatingChars');
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
_graph2.setVertices(9);
_graph2.addEdge(0, 1, true, 4);
_graph2.addEdge(0, 7, true, 8);
_graph2.addEdge(1, 7, true, 11);
_graph2.addEdge(1, 2, true, 8);
_graph2.addEdge(2, 8, true, 2);
_graph2.addEdge(7, 8, true, 7);
_graph2.addEdge(6, 7, true, 1);
_graph2.addEdge(6, 8, true, 6);
_graph2.addEdge(5, 6, true, 2);
_graph2.addEdge(2, 5, true, 4);
_graph2.addEdge(2, 3, true, 7);
_graph2.addEdge(3, 5, true, 14);
_graph2.addEdge(3, 4, true, 9);
_graph2.addEdge(4, 5, true, 10);
/*_graph2.addEdge(1, 3);
_graph2.addEdge(2, 4);
_graph2.addEdge(2, 7);
_graph2.addEdge(4, 6);
_graph2.addEdge(3, 5);*/
//_graph2.addEdge(3, 6);
//_graph2.addEdge(0, 6);
//_graph2.addEdge(3, 7);
//_graph2.addEdge(6, 7);
//_graph2.addEdge(7, 6);
//_graph2.addEdge(0, 7);
//console.log(_graph2.findEdgeBetween(0, 0), "find edge");
//console.log(_graph2.findEdgeBetween(0, 3), "find edge");
//console.log(_graph2.findEdgeBetween(0, 2), "find edge");
//console.log(_graph2.findEdgeBetween(0, 1), "find edge");
//console.log(_graph2.findEdgeBetween(1, 3), "find edge");
//console.log(_graph2.findEdgeBetween(6, 7), "find edge", 6, 7);
//console.log(_graph2.dfs(), 'DFS');
_graph2.bfs();
_graph2.topolgicalSort();
console.log(_graph2.unWeightedShortestPath(0));
console.log("DIJ--->");
_graph2.dij();

var _graph3 = require('./GraphADT').GraphADTUsingAdjacencyList();
_graph3.setVertices(5);
_graph3.addEdge(0, 1 , false, -1);
_graph3.addEdge(0, 2 , false, 4);
_graph3.addEdge(1, 2 , false, 3);
_graph3.addEdge(1, 3 , false, 2);
_graph3.addEdge(1, 4 , false, 2);
_graph3.addEdge(3, 2 , false, 5);
_graph3.addEdge(3, 1 , false, 1);
_graph3.addEdge(4, 3 , false, -3);
console.log("Bellman Ford---->");


_graph3.bellmanFord(0);


var _graph4 = require('./GraphADT').GraphADTUsingAdjacencyList();
_graph4.setVertices(5);
_graph4.addEdge(0, 1 , false, 2);
_graph4.addEdge(0, 3 , false, 6);
_graph4.addEdge(1, 0 , false, 2);
_graph4.addEdge(1, 2 , false, 3);
_graph4.addEdge(1, 3 , false, 8);
_graph4.addEdge(1, 4 , false, 5);
_graph4.addEdge(2, 1 , false, 3);
_graph4.addEdge(2, 4 , false, 7);
_graph4.addEdge(3, 0 , false, 6);
_graph4.addEdge(3, 1 , false, 8);
_graph4.addEdge(3, 4 , false, 9);
_graph4.addEdge(4, 1 , false, 5);
_graph4.addEdge(4, 2 , false, 7);
_graph4.addEdge(4, 3 , false, 9);
_graph4.primsMSTWithArray();
_graph4.primsMethodUsingHeap();
_graph4.kruskalViaDisjointSet();
var _graph5 = require('./GraphADT').GraphADTUsingAdjacencyList();
_graph5.setVertices(3);
_graph5.addEdge(0, 1, false, 10);
_graph5.addEdge(0, 2, false, 2);
_graph5.addEdge(2, 1, false, 3);
console.log(_graph5.isCycle(), ' cycle');
_graph5.sortEdgesByWeight();

var _graph6 = require("./GraphADT").GraphADTUsingAdjacencyList();
_graph6.setVertices(5);
_graph6.addEdge(1, 0, true, 1);
_graph6.addEdge(0, 2, true, 1);
_graph6.addEdge(2, 1, true, 1);
_graph6.addEdge(0, 3, true, 1);
_graph6.addEdge(3, 4, true, 1);
_graph6.addEdge(1, 0, true, 1);
//_graph6.addEdge(0, 3, true, 1);
//_graph6.addEdge(3, 4, true, 1);
//_graph6.articulateEdge();
console.log(_graph6.isConnected());
console.log(_graph6.eulersPath());

var _graph7 = require("./GraphADT").GraphADTUsingAdjacencyList();
_graph7.setVertices(5);
_graph7.addEdge(1, 0, false, 1);
_graph7.addEdge(0, 2, false, 1);
_graph7.addEdge(2, 1, false, 1);
_graph7.addEdge(0, 3, false, 1);
_graph7.addEdge(3, 4, false, 1);
console.log('Start Transpose->');
_graph7.SCC();

var _graph8 = require("./GraphADT").GraphADTUsingAdjacencyList();
_graph8.setVertices(5);
_graph8.addEdge(0, 1, true, 1);
_graph8.addEdge(0, 3, true, 1);
_graph8.addEdge(1, 2, true, 1);
_graph8.addEdge(1, 3, true, 1);
_graph8.addEdge(1, 4, true, 1);
_graph8.addEdge(2, 4, true, 1);
_graph8.addEdge(3, 4, true, 1);
console.log(_graph8.hameltoninPathWithBackTracking(), 'hameltoninPathWithBackTracking');


var _graph9 = require("./GraphADT").GraphADTUsingAdjacencyList();
_graph9.setVertices(4);
_graph9.addEdge(0, 1, true, 1);
_graph9.addEdge(0, 2, true, 1);
_graph9.addEdge(0, 3, true, 1);
_graph9.addEdge(1, 2, true, 1);
_graph9.addEdge(0, 1, true, 1);
_graph9.addEdge(2, 3, true, 1);
console.log(_graph9.mColorNaive(3), 'color naive');
console.log(_graph9.coloring(3), 'color hoshiyar');
//coloring

var _graph10 = require("./GraphADT").GraphADTUsingAdjacencyList();
_graph10.setVertices(4);
_graph10.addEdge(0, 1, true, 1);
_graph10.addEdge(0, 3, true, 1);
_graph10.addEdge(2, 3, true, 1);
_graph10.addEdge(0, 1, true, 1);
console.log(_graph10.isBipartite());
console.log(_graph10.biparateInDFS());

var _graph11 = require("./GraphADT").GraphADTUsingAdjacencyList();
_graph11.setVertices(6);
_graph11.addEdge(0, 1, false, 1);
_graph11.addEdge(0, 2, false, 1);
_graph11.addEdge(1, 2, false, 1);
_graph11.addEdge(1, 3, false, 1);
_graph11.addEdge(3, 4, false, 1);
_graph11.addEdge(2, 3, false, 1);
_graph11.addEdge(4, 0, false, 1);
_graph11.addEdge(4, 1, false, 1);
_graph11.addEdge(4, 5, false, 1);
_graph11.findPaths(0, 5);
_graph11.pathsDFS(0, 5);


var _sort = require('./Sorting').Sorting();
_sort.bubbleSort([2, 10, 43, 0]);
_sort.selectionSort([2, 10, 43, 10, 0, 5]);
_sort.stableSelectionSort([2, 10, 43, 10, 0, 5]);
_sort.insertionSort([2, 10, 43, 10, 0, 5]);
_sort.shellSort([2, 10, 43, 10, 0, 5, 1]);
_sort.mergeSort([2, 10, 43, 10, 0, 5, 1]);
_sort.quickSort([2, 10, 43, 10, 0, 5, 1]);
_sort.iterativeMergeSort([2, 10, 43, 10, 0, 5, 1]);
_sort.iterativeQuickSort([2, 10, 43, 10, 0, 5, 1]);
_sort.countSort([1, 4, 1, 2, 7, 5, 2], 9);
_sort.bucketSort([0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]);
_sort.radixSort([170, 45, 75, 90, 802, 24, 2, 66]);
_sort.nearlySorted([2, 6, 3, 12, 56, 8, 20], 3);


function formLL(){
	var head = null;
	
	function add(data){
		if(!head){
			head = {data, next: null};
		}else{
			var current = head;
			while(current.next){
				current = current.next;
			}
			current.next = {data, next: null};
		}
	}
	function getHead(){
		return head;
	}
	function setHead(arg){
		head = arg;
	}
	function getEnd(){
		var current = head;
		while(current.next){
			current = current.next;
		}
		return current;
	}
	function print(){
		var current = head;
		while(current){
			console.log(current.data);
			current = current.next;
		}
	}
	return {add, getHead, getEnd, print, setHead};
}
var ll = formLL();
ll.add(10);
ll.add(0);
ll.add(20);
ll.add(5);
ll.print();
console.log(ll.getEnd());
console.log(ll.getHead());
//DS.getEndOfLL();
ll.setHead(_sort.sortLinkedListViaMergeSort(ll.getHead()));
//_sort.sortLinkedListViaQuickSort(ll.getHead(), ll.getEnd());
console.log("-------------");
ll.print();
_sort.mergeTwoSortedArrays([1, 3, 0, 0, 0],[0, 2, 5], 2, 3);


var _search = require("./Searching").Search();
//_search.checkIfDuplicateExistsAfterSorting([10, 10, 90, 3, 1, 2]);
//_search.checkIfDuplicateUsingHashTable([10, 11, 3, 1, 2]);
_search.findDuplicate([1, 2, 3, 0]);
//_search.findTheElementWithMaxRepetations([1, 1, 2, 3, 1, 2, 2, 2, 1, 1, 1]);
_search.findMaxOccuring([1, 1, 2, 3, 1, 2, 2, 2, 1, 1, 1, 1, 3, 3,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,3]);
_search.findFirstRepeatingBruteForce([3, 2, 1, 2, 2, 3]);
_search.findFirstRepeatingUsingMap([3, 2, 1, 2, 2, 3]);
_search.findMissing([1, 2, 4, 5], 5);
_search.findMissingXOR([1, 2, 3, 4], 5);
_search.findNumbersWithsum([2, 5, 0], 6);
_search.findNumbersWithSumUsingMap([3, 4, 01], 6);
_search.threeIndexes([2, 4, 6, 5]);
_search.findThePairWithSumClosestToZeroOptimal([-15, -5, 50, 200]);
_search.findThreeIndexesThatSumToK([1,2,3, 45,6, 7], 50);
_search.findTheThreeIndexesInOptimal([1,2,3, 45,6, 7], 500);
_search.bitonicPoint([1, 2, 3, 4, 5, 6, 50, 3, 0]);
console.log(_search.findElementInRotatedSortedArray([ 1, 3, 4, 5, 7, 10, 14], 3), ' Pivot');
console.log(_search.findLastIndex([0, 1, 2, 3, 3, 4, 5, 5,5, 6, 7], 0, 9, 5), "  -First/Last Index");
_search.seperateOddAndEven([1, 2, 3, 4, 5, 6]);
_search.maxIndexDiff([34, 8, 10, 3, 2, 80, 30, 33]);
console.log(_search.maxIndexDiffOptimal([34, 8, 10, 3, 2, 80, 30, 33]), "index diff");
_search.getFrequencyOptimal([0, 1, 2, 3, 4, 5]);


var median = require('./Medians').Median();
median.getMinAndMax([1,2,3, 4, 5, 6, 7]);

var hashing = require('./Hashing').Hashing();
console.log(hashing.removeDuplicates([1, 1, 1, 2, 3, 4, 5, 5,6, 6, 5, 1, 2, 3]));
//checkIfTwoArraysHaveSameElements,
//checkIfTwoArraysHaveSameElementsOptimal

console.log(hashing.checkIfTwoArraysHaveSameElements([1, 1, 1, 2], [1, 1, 1, 1]));
console.log(hashing.checkIfTwoArraysHaveSameElementsOptimal([0, 1, 1, 2], [1, 0, 1, 2]));
hashing.getPairsWithSum(5, [1, 2, 4 , 3, .5, 4.5, 5]);
hashing.getPairsWithSumSpaceOptimised(5, [1, 2, 4 , 3, .5, 4.5, 5]);
hashing.findFirstCharaterThatIsRepeating([0,1,  2, 3, 4, 5, 7, 5, 4]);
hashing.getFirstNonRepeatingViaMap([2, 2, 3, 4, 5, 6]);
hashing.getFirstNonRepeatingCharacter([2, 2, 3, 4, 5, 6]);

var Strings = require('./Strings').Strings();
Strings.searchSubstring('test123123avfgg123_1234','123');
Strings.KMP('test123123avfgg123_1234','123');
var tri = Strings.Trie();
tri.addWord('abc');
tri.addWord('_def_');
Strings.permutations('jkl');
Strings.combinations('tux');
Strings.interLeavingStrings('ab','cd');
//console.log(tri.printString());
Strings.findPatternIn2DMatrix([], [], 3, 3);


var Greedy = require('./Greedy').Greedy();
let intervals = Greedy.intervalScheduling([{start:0, end: 4},{start:1, end: 2},{start:2, end:4},{start:3, end:5},{start:3, end:6},
	                       {start:5, end:6}, {start:5, end:7}, {start:6, end:7}, {start:7, end:9},
	                       {start:8, end:10}]);
console.log(intervals);
Greedy.findMaximumoverlapsAndTime([1, 2, 9, 5, 5], [4, 5, 12, 9, 12]);
console.log(Greedy.areOverlaping({start: 2, end: 7}, {start:6, end:10}));
Greedy.assignIntervalsToClasses([{start:2, end: 4},{start: 3, end: 8},{start:10, end: 20}, {start: 9, end: 15}]);



var DnC = require('./Divide&Conquer').DandC();
console.log(DnC.stockBuyAndSellDandC([2, 1, 12, 24 , 30]));
DnC.stockBuyAndSellBruteForce([2, 1, 12, 24 , 30]);