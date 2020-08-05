function TreeADT(){
	var root = null;
	
	
	
	/*
	 * Inorder insertion in  a BST with a while loop
	 * */
	function insert(data){
		if(!root){
			root = {data:data, left:null, right:null};
			return;
		}
		var parent = root;
		var node = root;
		while(1){
			if(!node){
				node = {left:null, right:null};
				node.data = data;
				if(parent){
				if(data >= parent.data){
				  parent.right = node;	
				}else{
				  parent.left = node;	
				}
				}
				break;
			}else{
				parent = node;
				if(node.data <= data){
					node = node.right;
				}else if(node.data > data){
					node = node.left;
				}
			}
		}
	}//O(log n) average case and O(n) worst case i.e. elements are only inserted in left or right i.e. skew
	
	function deleteNode(){
		return root.length;
	}
	
	function search(){
		
	}
	/*DLR*/
	function traverseRecursivePreOrder(){
		node = root;
		innerFunction(node);
		function innerFunction(node){
			if(!node)return;
			console.log(node.data);
			innerFunction(node.left);
			innerFunction(node.right);
		}
		
	}
	/*DLR*/
	function traverseNoRecurssionPreOrder(){
	  var stack = require('./DS').stackFunction();
	  var node = root;
	  while(1){
		  while(node){
			  console.log(node.data);
			  stack.push(node);
			  node = node.left;
		  }
		  
		  if(stack.isEmpty()){
			  break;
		  }
		  node = stack.pop();
		  node = node.right;
	  }
	}
	function inOrderTraverseWithRecursion(){
		node = root;
		innerFunction(node);
		function innerFunction(node){
			if(!node)return;
			innerFunction(node.left);
			console.log(node.data);
			innerFunction(node.right);
		}
	}
	function inOrderTraverseWithStack(){
		var node = root;
		var stack = require('./DS').stackFunction();
		while(1){
		  while(node){
			stack.push(node);
			node = node.left;
		  }
		  if(stack.isEmpty())break;
		  node = stack.pop();
		  console.log(node.data);
		  node = node.right;
		}
	}
	function postOrderWithRecursion(){
		var node = root;
		innerFunction(node);
		function innerFunction(node){
			if(!node)return;
			innerFunction(node.left);
			innerFunction(node.right);
			console.log(node.data);
		}
	}
	function postOrderWithStack(){
		var node = root;
		var stack = require('./DS').stackFunction();
		
		while(1){
			
			if(node){
				stack.push(node);
				node = node.left;
			}else{
				if(stack.isEmpty()){
					console.log('Traversal Over');
					return;
				}
				
				if(!stack.top().right){
					node = stack.pop();
					console.log(node.data);
					
					if(node == stack.top().right){
						node = stack.pop();
						console.log(node.data);
						
					}
				}
			if(!stack.isEmpty() ){
			  if(stack.top().right == node){// This step is missing in Narasimha K Book and leads to infinite recurssion
				  stack.top().right = null;
				  node = null;  
			  }
			  else {
				  node = stack.top().right;
			  }
			}
			else{
				node = null;
			}
			}
		
		}
	}
	function printNodesAtLevel(desiredLevel){
		
		var node = root;
		innerPrintNodesAtLevel(desiredLevel, 1, node);
		function innerPrintNodesAtLevel(desiredLevel, currentLevel, node){
			if(!node || desiredLevel < 1){
				return;
			}
			if(currentLevel == desiredLevel){
				console.log(node.data);return;
			}else{
				currentLevel = currentLevel+1;
				innerPrintNodesAtLevel(desiredLevel, currentLevel, node.left);
				innerPrintNodesAtLevel(desiredLevel, currentLevel, node.right);
			}
		}
	}
	function printNodesLevelWise(){
		if(!root){
			console.log('nothing to print');
			return;
		}
		var queue = require('./QueueADT').QueueADT();
		queue.enQueue(root);
		while(!queue.isEmpty()){
			let currentNode = queue.deQueue();
			console.log(currentNode.data);
			if(currentNode.left){
				queue.enQueue(currentNode.left);
			}
			if(currentNode.right){
				queue.enQueue(currentNode.right);
			}
		}
	}
	function size(){

		if(!root){
			return console.log('0');
		}
		var queue = require('./QueueADT').QueueADT();
	    queue.enQueue(root);
	    var count = 0;
	    while(!queue.isEmpty()){
	    	count++;
	    	var node = queue.deQueue();
	    	if(node.left)
	    		queue.enQueue(node.left);
	    	if(node.right)
	    		queue.enQueue(node.right);
	    }
	    console.log(count);
	    return count;
	
	}
	function height(){}
	function findMaxInTree(){
		if(!root){
			return;
		}
		var queue = require('./QueueADT').QueueADT();
		queue.enQueue(root);
		var max = -99999;
		while(!queue.isEmpty()){
			var node = queue.deQueue();
			if(max < node.data){
				max = node.data;
			}
			if(node.left)
			  queue.enQueue(node.left);
			if(node.right)
		      queue.enQueue(node.right);
		}
		console.log(max);
	}
	function levelWhichHasMax(){
		
	}
	function leastCommonAncestor(){}
	

	function searchElement(data){
      var queue = require('./QueueADT').QueueADT();
      queue.enQueue(root);
      while(!queue.isEmpty()){
    	  var node = queue.deQueue();
    	  if(node.data == data){
    		  
    		  return console.log(data+ " Was Found");;
    	  }
    	  if(node.left)
    		  queue.enQueue(node.left);
    	  if(node.right)
    		  queue.enQueue(node.right);
    }
     return console.log('not found'); 
	}
	
	function printTreeElementsInReverseOrderAtEachLevel(){
		var queue = require('./QueueADT').QueueADT();
		var stack = require('./DS').stackFunction();
		
		queue.enQueue(root);
		while(!queue.isEmpty()){
			var node = queue.deQueue();
			//Right child is to be enqueued first
			if(node.right){
				queue.enQueue(node.right);
			}
			if(node.left){
				queue.enQueue(node.left);
			}
			stack.push(node);
		}
		
		while(!stack.isEmpty()){
			var node = stack.pop();
			console.log(node.data);
		}
	}
	
	function findNumberofLevels(){
		var queue = require('./QueueADT').QueueADT();
		var level = 1;
		queue.enQueue(root);
		queue.enQueue(null);
		
		while(!queue.isEmpty()){
			var node  = queue.deQueue();
			
			if(!node && !queue.isEmpty()){
				level++;
				queue.enQueue(null);
			}
			
			if(node && node.left){
				queue.enQueue(node.left);
			}
			if(node && node.right){
				queue.enQueue(node.right);
			}
		}
		console.log(level, " <<-- Levels in the Tree");
		return level;
	}
	function heightFromGivenNode(node){
		if(!node){
			return 0;
		}
		var queue = require('./QueueADT').QueueADT();
		var level = 1;
		queue.enQueue(node);
		queue.enQueue(null);
		
		while(!queue.isEmpty()){
			var node  = queue.deQueue();
			
			if(!node && !queue.isEmpty()){
				level++;
				queue.enQueue(null);
			}
			
			if(node && node.left){
				queue.enQueue(node.left);
			}
			if(node && node.right){
				queue.enQueue(node.right);
			}
		}
		return level;
	}
	
    function findDiameter1(){
    	return findDiameter1Inner(root, {height:0});
    	function findDiameter1Inner(node, heightObj){
    		
    		
    		if(!node){
    			heightObj.height = 0;
            	return 0;
            }
    		
    		var nodeLeftHeight = {height:0}, 
    		  nodeRightHeight = {height:0};
            var leftDiameter = findDiameter1Inner(node.left, nodeLeftHeight);
            var rightDiameter = findDiameter1Inner(node.right, nodeRightHeight);
            
            heightObj.height = Math.max(nodeLeftHeight.height, nodeRightHeight.height) +  1;
            
            return Math.max((nodeLeftHeight.height + nodeRightHeight.height +1), Math.max(leftDiameter, rightDiameter));
    	}
    }
    
    function diameterUsingHeight(){
    	return diameterUsingHeightInner(root);
    	function diameterUsingHeightInner(node){
    		if(!node){
    			return 0;
    		}
          var leftheight = height(node.left);
          var rightheight = height(node.right);
          console.log(leftheight, rightheight);
          var leftDiameter = diameterUsingHeightInner(node.left);
          var rightDiameter = diameterUsingHeightInner(node.right);

          return Math.max(leftheight + rightheight +1, Math.max(leftDiameter, rightDiameter));
          /*
           * Left Tree height + Right Tree height +1 or Diameter of the Left or the Diameter of the Right Tree O(n^2)
           * */
    	}
    }
    
    function findLevelWithMaxSum(){
    	if(!root){
    		console.log(0, 0);
    		return 0;
    	}
    	var maxSum = 0;
    	var queue = require('./QueueADT').QueueADT();
		var level = 1;
		var maxLevel = level;
		queue.enQueue(root);
		queue.enQueue(null);
		var currentLevelSum = 0;
		while(!queue.isEmpty()){
			var node = queue.deQueue();
			
			if(!node){
				if(maxSum < currentLevelSum){
					maxSum = currentLevelSum;
					maxLevel = level;
				}
				if(!queue.isEmpty())
				  queue.enQueue(null);
				level++;
				currentLevelSum = 0;
			}else{
				currentLevelSum = currentLevelSum + node.data;
				if(node.left){
					queue.enQueue(node.left);
				}
				if(node.right){
					queue.enQueue(node.right);
				}
			}
		}
		console.log(maxLevel, maxSum);
    }
	function allRoutesFromRootToLeaf(){
		allRoutesFromRootToLeafInner(root, [], 0);
		function allRoutesFromRootToLeafInner(node, array, index){
			if(!node){
				return 0;
			}else{
				array[index] = node;
				//console.log(node, array, index);
				index++;
				
				if(!node.left && !node.right){
					printpath(array, index);
					return;
				}
				allRoutesFromRootToLeafInner(node.left, array, index);
				allRoutesFromRootToLeafInner(node.right, array, index);
			}
		}
		
		
	}
	
	
	function printpath(array, index){
		for(let i=0; i < index ;i++){
			console.log(array[i].data);
		}
		console.log('-----');
	}
	
	function findIfPathHasExactSum(sum){
		return findIfPathHasExactSumInner(root, sum, [], 0);
		function findIfPathHasExactSumInner(node, sumRemaining, array, index){
			if(!node){
				if(sumRemaining == 0){printpath(array, index)}
				return sumRemaining == 0;
			}
			sumRemaining = sumRemaining - node.data;
			array[index] = node;
			index++;
			if((!node.left && !node.right) || (node.left && node.right)){
				return(findIfPathHasExactSumInner(node.left, sumRemaining, array, index) || findIfPathHasExactSumInner(node.right, sumRemaining, array, index));
			}else if(node.left){
				return(findIfPathHasExactSumInner(node.left, sumRemaining, array, index));
			}else{
				return (findIfPathHasExactSumInner(node.right, sumRemaining, array, index));
			}
		}
	}
	
	function sumOfAllNodesInTree(){
		return sumOfAllNodesInTreeInner(root);
		function sumOfAllNodesInTreeInner(root){
			if(!root)
				return 0;
			
			var queue = require('./QueueADT').QueueADT();
			queue.enQueue(root);
			var sum = 0;
			while(!queue.isEmpty()){
				var node = queue.deQueue();
				sum = sum + node.data;
				if(node.left){
					queue.enQueue(node.left);
				}
				if(node.right){
					queue.enQueue(node.right);
				}
			}
			return sum;
		}
	}
	
	
	function findIfTreesAreStructurallySimilar(root1, root2){
		if(!root2 && !root1){
			return true;
		}
		if(!root1 || !root2){
			return 0;
		}
		return (root1.data == root2.data && findIfTreesAreStructurallySimilar(root2.left, root1.left) && findIfTreesAreStructurallySimilar(root2.right, root1.right))
	}
	
	function getRootNode(){
		return root;
	}
	
	function findMirrorOfTree(){
		findMirrorOfTreeInner(root);
		function findMirrorOfTreeInner(root){
			if(root){
				findMirrorOfTreeInner(root.left);
				findMirrorOfTreeInner(root.right);
				var temp = root.left;
				root.left = root.right;
				root.right = temp;
			}
			return root;
		}
	}
	
	function findIfTreesAreMirrors(root1, root2){
		if(!root1 && !root2){
			return true;
		}
		if(!root1 || !root2){
			return false;
		}
		
		if(root1.data != root2.data){
			return false;
		}
		return (findIfTreesAreMirrors(root2.left, root1.right) && findIfTreesAreMirrors(root2.right, root1.left));
		
	}
	
	
	/*
	 * Find the path from root to node1, find the path from root to node2 and store the paths in two arrays
	 * Compare the arrays for a mismatch- this approach takes 2 traversals of the tree
	 * 
	 * */
	function lowsetCommonAnsestorOfTwoNodesMethod1(targetNode1Data, targetNode2Data){
	   var array1 = [];
	   lowestCommonAnsestorOfTwoNodesMethod1Inner(root, [], 0, targetNode1Data, array1);
	   
	   
	   var array2 = [];
	   lowestCommonAnsestorOfTwoNodesMethod1Inner(root, [], 0, targetNode2Data, array2);
	   
	   return compareAndFindTheLowestCommonNode(array1, array2);
	   
       function lowestCommonAnsestorOfTwoNodesMethod1Inner(node, array, index, targetNodeData, arrayOp){
    	   if(!node){
    		   return false;
    	   }
    	   array[index] = node;
		   index++;
    	   if(node.data == targetNodeData){
    		   saveInArray(array, index, arrayOp);
    		   return true;
    	   }
    	   return (lowestCommonAnsestorOfTwoNodesMethod1Inner(node.left, array, index, targetNodeData, arrayOp) || 
    			   lowestCommonAnsestorOfTwoNodesMethod1Inner(node.right, array, index, targetNodeData, arrayOp));
       }
       
       function saveInArray(array, index, arrayOp){
    	   for(let i=0 ; i < index ; i++){
    		   arrayOp[i] = array[i];
    	   }
       }
       
       function compareAndFindTheLowestCommonNode(a1, a2){
		   var previousValue = null;
    	   for(let i=0;i< a2.length;i++){
    		   
    		   if((a1[i] && a2[i]) && (a1[i].data === a2[i].data)){
    			   previousValue = a1[i].data;
    		   }else{
    			   break;
    		   }
    	   }
    	   return previousValue;
	   }
	}
	
	/*
	 * Find the lowest common ancestor of two nodes in a binary tree in one traversal
	 * */
	
	function lowestCommonAncestorInOneTraversal(node1, node2){
		var flag1 = false; var flag2 = false;
		
		var result = lowestCommonAncestorInOneTraversalInner(root, node1, node2);
		
		if(result && flag1 && flag2){
			return result;
		}else {
			return null;
	    }
		
		function lowestCommonAncestorInOneTraversalInner(node, node1, node2){
			if(!node){
				return null;
			}
			var temp = null;
			
			if(node1 == node.data){
				flag1 = true;
				temp = node;
			}
			
			if(node2 == node.data){
				flag2 = true;
				temp = node;
			}
			
			var leftNode = lowestCommonAncestorInOneTraversalInner(node.left, node1, node2);
			var rightNode = lowestCommonAncestorInOneTraversalInner(node.right, node1, node2);
			
			if(temp){
				return temp;
			}
			
			if( leftNode && rightNode ){
				return node;
			}
			
			if(leftNode || rightNode){
				return leftNode ? leftNode : rightNode;
			}
			
		}
	}
	function constructTreeFromInorderAndPreorderTraversal(startIndex, endIndex, inOrderArray, preOrderArray){
		var preIndex = 0;
		var root = constructTreeFromInorderAndPreorderTraversalInner(startIndex, endIndex, inOrderArray, preOrderArray);
		
		return root;
		function constructTreeFromInorderAndPreorderTraversalInner(startIndex, endIndex, inOrderArray, preOrderArray){
			if(startIndex > endIndex){
				return null;
			}
			var data = preOrderArray[preIndex];
			preIndex++;
			var node = {data:data};
			
			if(startIndex == endIndex){
				node.left = null; node.right = null;
				return node;
			}

			var indexOfDatainInOrderArray = inOrderArray.indexOf(data);

			node.left = constructTreeFromInorderAndPreorderTraversalInner(startIndex, indexOfDatainInOrderArray-1, inOrderArray, preOrderArray);
			node.right = constructTreeFromInorderAndPreorderTraversalInner(indexOfDatainInOrderArray+1, endIndex, inOrderArray, preOrderArray);
			return node;
		}
	}
	
	function findAncestorsOfGivenNode(data){
		var status = findAncestorsRecurssion(root);
		if(!status){
			console.log('no ansestors');
		}
		 function findAncestorsRecurssion(node){
			if(!node){
				return 0;
			}
			if((node.left && node.left.data == data) || 
					(node.right && node.right.data == data) || 
			   findAncestorsRecurssion(node.left) || 
			   findAncestorsRecurssion(node.right)){
				console.log(node.data);
				return true;
			}
			return false;
		}
		
	}
	
	function zigZagTreeTraversal(){
		var leftToRight = true;
		var currentStack = require('./DS').stackFunction();
		var nextStack = require('./DS').stackFunction();
		currentStack.push(root);
		while(!currentStack.isEmpty()){
			var node = currentStack.pop();
			console.log(node.data);
			if(leftToRight){
				if(node.left)nextStack.push(node.left);
				if(node.right)nextStack.push(node.right);
			}else{
				if(node.right)nextStack.push(node.right);
				if(node.left)nextStack.push(node.left);
			}
			
			if(currentStack.isEmpty()){
				leftToRight = !leftToRight;
				var temp = currentStack;
				currentStack = nextStack;
				nextStack = temp;
			}
		}
		
	}
	
	function checkIfBinaryTree(root){
		checkIfBinaryTreeInner(root, -Infinity, Infinity);
		
		function checkIfBinaryTreeInner(root, min, max){
			if(!root)
				return true;
			
			if(root.data > max || root.data < min)
				return false;
			
			return checkIfBinaryTreeInner(root.left, min, root.data) && 
			checkIfBinaryTreeInner(root.right, root.data, max);
		}
	}
	

	/*
	 * Input is array of L and I valued nodes, L is a Leaf and I is an intermadiate with exactly 2 children and 
	 * obtained after pre-order traversal
	 * O(n)
	 * */
	function formTreeFromPreOrderTraversal(preorderArray){
		return formTreeFromPreOrderTraversalInner(preorderArray, 0);
		function formTreeFromPreOrderTraversalInner(preorderArrayInner, index) {
			if(!preorderArrayInner[index]){
				return null;
			}
			
			var node = {};
			node.data = preorderArrayInner[index];
			if(node.data === 'L'){
				node.left = null;
				node.right = null;
			}else{
				node.left = formTreeFromPreOrderTraversalInner(preorderArrayInner, index+1);
				node.right = formTreeFromPreOrderTraversalInner(preorderArrayInner, index+2);
			}
			return node;
			}
		}

	function findVerticalSum(root){
		var map = {};
		innerFindVerticalSum(root, 0);
		return map;
		function innerFindVerticalSum(node, column){
			if(!node)
				return 0;
			innerFindVerticalSum(node.left, column-1);
			map[column] = map[column] ? (map[column] + node.data) : node.data;
			innerFindVerticalSum(node.right, column+1);
		}
	}
	
	
	/*
	 * O(n) time complexity and O(n) space complexity
	 * */
	function addingNextSiblingsUsingQueue(root){
		var queue = require('./QueueADT').QueueADT();
		queue.enQueue(root);
		queue.enQueue(null);
		
		while( !queue.isEmpty() ){
			var temp = queue.deQueue();
			if(!temp){
				if(!queue.isEmpty()){
					queue.enQueue(null);
				}
			} else {
				temp.nextSibling = queue.front();
				if(temp.left){
					queue.enQueue(temp.left);
				}
				if(temp.right){
					queue.enQueue(temp.right);
				}
			}
		}
	}
	
	
	/*
	 * O(n) time complexity complexity and O(1) space complexity
	 * */
	function addingNextSiblingViaRecursion(root){
		if(!root){
			return null;
		}
		if(root.left)
		  root.left.nextSibling = root.right;
		
		if(root.right)
		  root.right.nextSibling = root.nextSibling ? root.nextSibling.left : null;
		
		addingNextSiblingViaRecursion(root.left);
		addingNextSiblingViaRecursion(root.right);
	}
	
	function insertBSTWithParentWithRecurssion(data){
		root = insertBSTWithParentWithRecurssionInner(root);
		return root;
		function insertBSTWithParentWithRecurssionInner(node){
		if(!node){
			return {data: data, left: null, right: null, parent: null};
		}
		var temp;
		if(data < node.data){
			temp = insertBSTWithParentWithRecurssionInner(node.left);
			node.left = temp;
			temp.parent = node;
		}else if(data > node.data){
			temp = insertBSTWithParentWithRecurssionInner(node.right);
			node.right = temp;
			temp.parent = node;
		}
		return node;
		}
	}
	
	function insertInBSTWithParentInorder(data){
		if(!root){
			root = {parent: null, data:data, left:null, right: null};
		}else{
		var node = root;
		var parent = node;
		while(node){
			parent = node;
			if(data < node.data){
				node = node.left;
			}else if(data > node.data){
				node = node.right;
			}
		}
		if(data < parent.data){
			parent.left = {data: data, left: null, right:null, parent: parent};
		}else{
			parent.right = {data: data, left: null, right:null, parent: parent};
		}
		}
		return root;
	}
	
	/*
	 * Find the min in a given tree
	 * */
	function rightSubTreeInorder(node){
		while(node.left){
			node = node.left;
		}
		return node;
	}
	
	
	/*
	 * If the right subtree is present than find the leftest of the right tree
	 * If right is not present then start from the root and maintain the successor
	 * This method finds successor w/o parent pointer
	 * */
	function inOrderSuccessor(node){
		if(node.right){
			return rightSubTreeInorder(node.right);
		}
		var nodeR = root;
		var successor = null;
		while(nodeR){
			if(node.data > nodeR.data){
				nodeR = nodeR.right;
			}else if(node.data < nodeR.data){
				successor = nodeR;
				nodeR = nodeR.left;
			}else if(node.data == nodeR.data){
				break;
			}
		}
		return successor; 
	}
	// Time complexity is O(h), h being the height of the tree
	
	
	/*
	 * InOrder successor using the parent pointer, if the right sub tree exists then go for the right sub tree else
	 * when the node is the left child of its parent that parent is the successor of the node or keep on looking 
	 * in the parent hierarchy
	 * */
	function InorderSuccessorUsingParent(node){
		if(node.right){
			return rightSubTreeInorder(node.right);
		}
		var parent = node.parent;
		while(parent && parent.right==node){
			node = parent;
			parent = parent.parent;
		}
		return parent;
	}
	// Time complexity is O(h), h being the height of the tree but the parent is needed
	
	
	
	/*
	 * 1. Brute force method is to traverse in the pre-order way and then do a search of the given node, the following node is successor
	 * this has O(n) time and space complexity
	 * 2. Optimized method has these points and it will need parent
	 *   a. If left child exits then thats the successor
	 *   b. If there is no left child then look if the given node is the left child of its parent- the sibling of that parent will be the successor 
	 *   if there is no sibling traverse the parents checking for their left parents and right child
	 *   c. If a and b aren't true  start traversing the parent unless a parent is the left child of its parent and the parent has 
	 *   some right child.
	 *   d. If the left child dosent exist but the right child exists then the right child is the successor of the node
	 * */
	function preOrderSuccessor(node){
      //When the left child exists thats it!
		if(node.left){
			return node.left;
		}
		
		if(node.right){
			return node.right;
		}
		
		if(node == node.parent.left){
			if(node.parent.right){
				return node.parent.right; 
			}
			parent = node.parent.parent;
			node = node.parent;
			while(1){
				if((parent && parent.right == node) || (parent && !parent.right)){
					node = parent;
					parent = parent.parent;
				}else if(parent && parent.right){
					return parent.right;
				}
				if(!parent){
					return null;
				}
			}
		}else if(node == node.parent.right){
			var parent = node.parent.parent;
			node = node.parent;
			while(1){
				if((parent && parent.right == node) || (parent && !parent.right)){
					node = parent;
					parent = parent.parent;
				}else if(parent && parent.right){
					return parent.right;
				}
				if(!parent){
					return null;
				}
			}
		}
	}
	//O(h) time complexity as we traverse the height only
	
	/* 1. do post-order travarsal and get in array and then search - O(n)
	 * 2. Optimized consider three points
	 *   a. Of the node is root return null
	 *   b. If the node is the parent's right child or its the left child but parent's right child is null then parent 
	 *   is the successor
	 *   c. If the node is the left child of its parent then traverse to the left most of the parent's right
	 *   d. ALso make sire when going for the right child of the parent we do the post-order traversal of the 
	 *   right child
	 * */
	function postOrderSuccessor(node){
      if(node == root){
    	  return null;
      }
      if(node.parent.right == node || !node.parent.right){
    	  return node.parent;
      }
      
      var currentNode = node.parent.right;
      
      //Go for post order traversal
      var postArray = [];
      postOrderInner(currentNode);
      function postOrderInner(node){
    	  if(!node){
    		  return null;
    	  }
    	  if(node.left)
    	  postOrderInner(node.left);
    	  if(node.right)
    	  postOrderInner(node.right);
    	  
    	  postArray.push(node);
      }
      currentNode = postArray[0];
      return currentNode;
	}
	//O(h) time complexity as we traverse the height only
	
	
	
	/* Expression Tree
	 * The intermediate node is an operand, the leaf node are the operators
	 * The post order traversal of the expression tree gives the post order expression
	 * */
	function expressionTree(array){
		var stack = require('./DS').stackFunction();
		for(let i=0; i< array.length;i++){
			let character = array[i];
			if(character == "+" || 
			   character == "-" ||
			   character == "*" ||
			   character == "/"){
				
				var newNode = {data: character};
				newNode.right = stack.pop();
				newNode.left = stack.pop();
				stack.push(newNode);
			}else {
				stack.push({data: character, left: null, right: null});
			}
		}
		return stack.pop();
	}
	
	/*
	 * 1. The number of nodes in a given level k is 2^(k-1) => n = total nodes = 2^0 + 2^1 + 2^2 +....2^(k-1) = 2^k-1
	 * => k height = log(n+1) => time is O(log(n))
	 * 
	 * 2. In a BST => the in-order traversal produces a sorted list
	 * 3. BST considers either left or the right not both
	 * 4. Happiness is the key to Success not vice versa
	 * 5. Aim is not success, aim is trying
	 * */
	
	
	/*
	 * Find the given element in a BST using recurssion
	 * */
	function findElementInBSTRecurssion(data){
		return findElementInBSTRecurssionInner(root);
		function findElementInBSTRecurssionInner(node){
			if(!node){
				return null;
			}
			if(data > node.data){
				return findElementInBSTRecurssionInner(node.right);
			}else if(data < node.data){
				return  findElementInBSTRecurssionInner(node.left);
			}else {
				return node;
			}
		}
	}
	//O(n) in time and space
	
	
	/*
	 * Find the given element in a BST using loop
	 * */
	function findElementInBSTIterative(data){
		var node = root;
		while(node){
			if(node.data < data){
				node = node.right;
			}else if(data < node.data){
				node = node.left;
			}else{
				break;
			}
		}
		return node;
	}//O(n) in time, O(1) is space
	
	
	/*
	 * To find the minimum element in a BST via recurssion
	 * */
	function findMinInBSTRecurssion(){
		return findMinInBSTRecurssionInner(root);
		function findMinInBSTRecurssionInner(node){
			if(!node){
				return node;
			}
			if(!node.left){
				return node;
			}
			return findMinInBSTRecurssionInner(node.left);
		}
	}
	//O(n) in Time and Space
	
	
	
	/*
	 * To find the minimum element in a BST via loop
	 * */
	function findMinInBSTIteration(){
        if(!root){
        	return null;
        }
        var node = root;
        while(node.left){
        	node = node.left;
        }
        return node;
	}
	//O(n) in Time and O(1) in Space
	
	/*
	 * Find the max of the BST recursively
	 * */
	function maxRecursivelyInBST(){
		return maxRecursivelyInBSTInner(root);
		function maxRecursivelyInBSTInner(node){ 
		if(!node){
			return null;
		}
		if(!node.right){
			return node;
		}
		return maxRecursivelyInBSTInner(node.right);
		}
	}//O(n) in time and space
	
	
	
	
	/*
	 * Find the max value in tree using loop
	 * */
	function maxValueInBSTIteration(){
		var node = root;
		if(!node){
			return null;
		}
		while(node.right){
			node = node.right;
		}
		return node;
	}//O(n) on time and O(1) in space
	
    
	/*
	 * Delete a node in a BST
	 * a. When there in no child i.e. the node is a leaf return null to the parent
	 * b. When there is a single child make the node as that child and return it
	 * c. When the node has two children then we need to traverse the left child for the max value
	 * in the left sub tree and have the max value as the value of the node and then delete the max value from the left sub tree
	 * */
	
	function deleteNodeFromSubTree(value){
		deleteInner(root, value);
		function deleteInner(node, val){
			
			if(!node)return null;
			
			if(node.data > val){
				node.left = deleteInner(node.left, val);
			}else if(node.data < val){
				node.right = deleteInner(node.right, val);
			}else{
				if(node.left && node.right){
					var localData = maxValueInBSTIteration(node.left);
					node.data = localData;
					node.left = deleteInner(node.left, localData);
				}else{
					if(node.left){
						node = node.left;
					}
					if(node.right){
						node = node.right;
					}
					if(!node.right && !node.left)
						node = null;
				}
			}
			return node;
		}
	}
	
	
	/*
	 * Finding the LCA of a and b in a BST
	 * Given that a < b, a node thats a< node.data<b or node.data equals a or b then that node is the ancestor assuming 
	 * that the both of them are present in the tree
	 * */
	
	/* assuming a < b */
	function findLCAInBST(a, b){
		var node = root;
		while(node){
			if((a < node.data && node.data < b) || node.data == b || node.data ==a){
				return node;
			}else if(node.data < a){
				node = node.right;
			}else{
				node = node.left;
			}
		}
		return null;
	}//O(n)
	
	
	/*
	 * To check if a given tree is a BST
	 * */
	
	function isBST(){
		return isBSTInner(root, -Infinity, Infinity);
		function isBSTInner(node, min, max){
			if(!node){
				return true;
			}
			return (node.data > min && node.data < max)
			       && isBSTInner(node.left, min, node.data)
			       && isBSTInner(node.right, node.data, max);
		}
	}//O(n)
	
	
	/*
	 * Given the sorted array, find the BST
	 * the root is given by Math.floor((left+right)/2)
	 * go with divide and conquer methodology
	 * */
	function BSTFromSortedArray(array){
		return BSTFromSortedArrayInner(0, array.length-1);
		function BSTFromSortedArrayInner(left, right){
			if(left > right){
				return null;
			}
			var node = {left: null, right: null};
			if(left == right){
				node.data = array[left];
			}else{
				var mid = Math.floor((left+right)/2);
				node.data = array[mid];
				node.left = BSTFromSortedArrayInner(left, mid-1);
				node.right = BSTFromSortedArrayInner(mid+1, right);
			}
			return node;
		}
	}
	
	
	/*
	 * Find all the nodes in a given range [K1, K2] where K1 < K2
	 * a. via recurssion
	 * b. via queue 
	 * */
	
	//Using recurssion - go for in order traversal
	function findNodesInRange(k1, k2){
		findNodesInRangeInner(root);
		function findNodesInRangeInner(node){
			if(!node){
				return null;
			}
			if(node.data >= k1){
				findNodesInRangeInner(node.left);
			}
			if(node.data >= k1 && node.data <= k2){
				console.log(node.data);
			}
			if(node.data <= k2){
				findNodesInRangeInner(node.right);
			}
		}
	}//O(n)
	
	/*
	 * To find the node with minimum difference using a Queue
	 * */
	function findTheNodeWithMinDiffFromAGivenKey(key){
		var queue = require('./QueueADT').QueueADT();
		queue.enQueue(root);
		var difference = Infinity, element;
		while(!queue.isEmpty()){
			var node = queue.deQueue();
			if(node.left){
				queue.enQueue(node.left);
			}
			if(node.right){
				queue.enQueue(node.right);
			}
			if(difference > Math.abs(key - node.data)){
				difference = Math.abs(key - node.data);
				element = node;
			}
		}
		return {difference, element}
	};// O(n) - fixed complexity
	
	
	/*
	 * Find the min difference node from a given key
	 * Use recurssion so that we have a better avarage complexity
	 * */
	function findTheNodeWithMinDiffFromAGivenKeyUsingRecurssion(key){
		return findTheNodeWithMinDiffFromAGivenKeyUsingRecurssionInner(root);
		function findTheNodeWithMinDiffFromAGivenKeyUsingRecurssionInner(node){
		  if(!node)
			  return null;
		  
		  if(node.data == key)
			  return node;
		  
		  if(node.data >  key){
			  if(!node.left) return node;
		  var temp = findTheNodeWithMinDiffFromAGivenKeyUsingRecurssionInner(node.left);
		  return Math.abs(temp.data - key) < Math.abs(node.data - key) ? temp: node;
		  }else {
			  if(!node.right) return node;
			  var temp = findTheNodeWithMinDiffFromAGivenKeyUsingRecurssionInner(node.right);
			  return Math.abs(temp.data - key) < Math.abs(node.data - key) ? temp: node;
		  }
			  
		}
	}//O(n) in worst case and O(log n) in a average case
	
	//Using a queue - find all in range
	function findInRangeIterative(k1, k2){
		if(!root){
			return null;
		}
		var queue = require('./QueueADT').QueueADT();
		queue.enQueue(root);
		while(!queue.isEmpty()){
			var node = queue.deQueue();
			if(node.left && node.data >= k1){
				queue.enQueue(node.left);
			}
			if(node.data >= k1 && node.data <= k2){
				console.log(node.data);
			}
			if(node.right && node.data <= k2){
				queue.enQueue(node.right);
			}
			
		}
		
	}//O(n)
	
	/*
	 * AVL - nodes in a balanced tree where difference in Height is max 2
	 * */
	
	/*
	 * Case 1. insertion in left subtree of the left child of X
	 *            6
	 *           /  \ 
	 *          5    9
	 *         /     /
	 *        3      8
	 *              /
	 *             7 
	 * Consider when 7 is inserted => node 9 has 0 right children and 2 left children making it unbalanced
	 * */
	function leftRotation(X){
		var W = X.left;
		X.left = W.right;
		W.right = X;
		X.height = Math.max(nodeHeightAVL(X.left), nodeHeightAVL(X.right)) + 1;
		W.height = Math.max(nodeHeightAVL(W.left), nodeHeightAVL(W.right)) + 1;
		return W;
	}
	
	/*
	 * Case 2 insertion in the right child's right subtree
	 *              8
	 *             /  \
	 *            6    15
	 *           /       \
	 *          3         19
	 *                     \
	 *                      29
	 *  X = 15 after 29 is inserted
	 * */ 
	function rightRotation(X){
		var W = X.right;
		X.right = W.left;
		W.left = X;
		W.height = Math.max(nodeHeightAVL(W.right), nodeHeightAVL(W.left)) + 1;
		X.height = Math.max(nodeHeightAVL(X.right), nodeHeightAVL(X.left)) + 1;
		return W;
	}
	
	/*
	 * Case 3, insertion happens in the right subtree of the left child
	 *                    8                              8                               6
	 *                   / \                            / \                             / \
	 *                  5   9  => right rotate   	   6   9	=> rotate left         5   8          
	 *                 / \                            / \							  /	  / \
	 *                3   6                          5   7						     3   7   9
	 *                     \                        /
	 *                      7                      3
     *  X=8 becomes un-balanced after insertion of 7
	 * */
	
	function doubleRotateRightFirst(Z){
      Z.left = rightRotation(Z.left);
      return leftRotation(Z);
	}
	
	/*
	 * Case 4, insertion happens in the left sub tree of the right child
	 *        4                           4                               6
	 *       / \                         / \                             / \
	 *      2   7                       2   6                           4   7
	 *         / \     =>left rotate       / \       =>right rotate    / \   \
	 *        6   8                       5   7                       2   5   8
	 *       /                                 \
	 *      5                                   8
	 *      
	 *  X = 4 becomes un-balanced after the insertion of 5    
	 * */
	function doubleRotationLeftFirst(Z){
		Z.right = leftRotation(Z.right);
		return rightRotation(Z);
	}
	
	/*
	 * Height of a node in AVL
	 * */
	function nodeHeightAVL(node){
		if(!node){
			return 0;
		}
		return node.height;
	}
	
	/*
	 * Insert in AVL Tree 
	 * */
	
	function insertInAVL(data){
		root =  insertInner(root);
		function insertInner(node){
			if(!node){
				return {
					left: null,
					right: null,
					data: data,
					height: 1
				}
			}
			if(data < node.data){
				node.left = insertInner(node.left);
				if(Math.abs(nodeHeightAVL(node.left)-nodeHeightAVL(node.right))== 2){
					if(data < node.left.data){ // Left left condition Case 1
						node =  leftRotation(node);
					}else{
						node =  doubleRotateRightFirst(node); //Case 3
					}
				}
			}else{
				node.right = insertInner(node.right);
				if(Math.abs(nodeHeightAVL(node.left)-nodeHeightAVL(node.right))== 2){
					if(data > node.right.data){ // right right condition Case 2
						node =  rightRotation(node);
					}else{
						node =  doubleRotationLeftFirst(node); //Case 4
					}
				}
			}
			node.height = Math.max(nodeHeightAVL(node.left), nodeHeightAVL(node.right)) + 1;
			return node;
		}
	}//O(log(n)) = O(h) time complexity
	
	/*
	 * Create a AVL with a given height = Fill Binary Tree
	 * Number of nodes in a full binary tree with height h = N(h) = 2^(h+1)-1
	 * We can start forming a BST for the given nodes in a binary Merge short way
	 * */
	
	function formFullAVL(h){
		root = formFullAVLInner(1, Math.pow(2, h+1)-1);
		function formFullAVLInner(left, right){
			if(left > right){
				return null;
			}
			if(left == right){
				return {left: null, right: null, height: 0, data: left}
			}
			var node = {};
			var mid = Math.floor((left+right)/2);
			node.left = formFullAVLInner(left, mid-1);
			node.right = formFullAVLInner(mid+1, right);
			node.data = mid;
			node.height = Math.max(nodeHeightAVL(node.left), nodeHeightAVL(node.right))+1;
			return node;
		}
	}// Time complexity = O(n), Space = O(log(n))
	
	/*
	 * Forming a Minimal AVL for given height
	 * N(0) = 1, min(N(1)) = 2 now N(2) = 1+ min(N(1)) + min(N(0)) = 4      X
	 *                                                                    / \
	 *                                                                   Y   A
	 *                                                                  /
	 *                                                                 Z
	 *  N(h) = 1+ min(N(h-1)) + min(N(h-2));
	 *  after we have the number of the nodes we can use formFullAVL(1, N(h)) to create the AVL
	 *  Below is a method to find the N(h)                                                            
	 * */
	function findNumberOfNodesForMinAVL(h){
		if(h ==0 ){
			return 1;
		}
		if(h ==1 ){
			return 2;
		}
		
		var secondLast = 1;
		var last = 2;
		var current = 0;
		for(var i=2; i<=h; i++){
			current = 1 + last + secondLast;
			secondLast = last;
			last = current;
		}
		return current;
	}
    
	/*
	 * Determine if the tree is a AVL
	 * */
	function isAVL(node){
		return isAVLInner(root);
		function isAVLInner(node){
			if(!node){
				return 0;
			}
			var leftHeight, rightHeight;
			leftHeight = isAVLInner(node.left);
			if(!leftHeight){
				return -1;
			}
			rightHeight = isAVLInner(node.right);
			if(!rightHeight){
				return -1;
			}
			if(Math.abs(leftHeight - rightHeight) > 1){
				return -1;
			}
			return Math.max(leftHeight + rightHeight) + 1;
			
		}
	}
	
	
	/*
	 * Delete the leaves in a BST, its a bottom-up approach
	 * */
	
	function deleteLeaves(){
		root = deleteLeavesInner(root);
		function deleteLeavesInner(node){
			if(!node){
				return null;
			}
			if(!node.left && !node.right){
				return null;
			}
			node.left = deleteLeavesInner(node.left);
			node.right = deleteLeavesInner(node.right);
			return node;
		}
	}//O(n)
	
	/*
	 * Delete the half nodes only i.e. not their child if present
	 * 
	 * */
	function deleteTheHalfNodes(){
		root = deleteTheHalfNodesInner(root);
		function deleteTheHalfNodesInner(node){
			if(!node){
				return null;
			}
			node.left = deleteTheHalfNodesInner(node.left);
			node.right = deleteTheHalfNodesInner(node.right);
			if(!node.left && !node.right){
				return node;
			}
			if(!node.left){
				return node.right;
			}
			if(!node.right){
				return node.left;
			}
			return node;
		}
	}//O(n)
	
	/*
	 * Prune the ones not in Range, recurssion
	 * */
	function pruneTheOnesNotInRange(a, b){
		root = pruneTheOnesNotInRangeInner(root);
		function pruneTheOnesNotInRangeInner(node){
			if(!node){
				return null;
			}
			node.left = pruneTheOnesNotInRangeInner(node.left);
			node.right = pruneTheOnesNotInRangeInner(node.right);
			if(node.data >= a && node.data <= b){
				return node;
			}
			if(node.data < a){
				return node.right;
			}
			if(node.data > b){
				return node.left;
			}
		}
	}//O(n) worst case, O(log n) average case
	
	/*
	 * Adding reference to the right sibling in a given BST
	 * Using Queue
	 * Linking the nodes of the same level
	 * */
	function linkingNodesAtALevelUsingQueue(){
		var queue = require('./QueueADT').QueueADT();
		var currentLevel = 1;
		var nextLevelCount = 0;
		var previous = null;
		queue.enQueue(root);
		while(!queue.isEmpty()){
			var node = queue.deQueue();
			if(node.left){
				queue.enQueue(node.left);
				nextLevelCount++;
			}
			if(node.right){
				queue.enQueue(node.right);
				nextLevelCount++;
			}
			if(previous){
				previous.next = node;
			}
			previous = node;
			currentLevel--;
			if(!currentLevel){
				currentLevel = nextLevelCount;
				nextLevelCount++;
				previous = null;
			}
		}
	}//O(n) in space and time
	
	/*
	 * linking nodes of same level using recurssion
	 * */
	
	function linkNodesAtaLevelUsingRecurssion(){
		linkNodesAtaLevelUsingRecurssionInner(root);
		
		function linkNodesAtaLevelUsingRecurssionInner(node){
			if(!node){
				return null;
			}
			var previousNode = null;
			var nextHead = null;
			while(node){
				if(node.left){
					if(!previousNode){
						previousNode = node.left;
						nextHead = previousNode;
					}else{
						previousNode.next = node.left;
						previousNode = node.left;
					}
				}
				if(node.right){
					if(!previousNode){
						previousNode = node.right;
						nextHead = previousNode;
					}else{
						previousNode.next = node.right;
						previousNode = node.right;
					}
				}
				node = node.next;
			}
			linkNodesAtaLevelUsingRecurssionInner(nextHead);
		}
	}//Space complexity is O(log n) and time is O(n)
	
	return {insert,
	    deleteNode,
	    search,
	    traverseRecursivePreOrder,
	    traverseNoRecurssionPreOrder,
	    inOrderTraverseWithRecursion,
	    inOrderTraverseWithStack,
	    postOrderWithRecursion,
	    postOrderWithStack,
	    size,
	    height,
	    levelWhichHasMax,
	    leastCommonAncestor,
	    printNodesAtLevel,
	    printNodesLevelWise,
	    findMaxInTree,
	    searchElement,
	    printTreeElementsInReverseOrderAtEachLevel,
	    findNumberofLevels,
	    findDiameter1,
	    diameterUsingHeight,
	    heightFromGivenNode,
	    findLevelWithMaxSum,
	    allRoutesFromRootToLeaf,
	    findIfPathHasExactSum,
	    findIfTreesAreStructurallySimilar,
	    sumOfAllNodesInTree,
	    getRootNode,
	    findMirrorOfTree,
	    findIfTreesAreMirrors,
	    lowsetCommonAnsestorOfTwoNodesMethod1,
	    lowestCommonAncestorInOneTraversal,
	    constructTreeFromInorderAndPreorderTraversal,
	    zigZagTreeTraversal,
	    findAncestorsOfGivenNode,
	    checkIfBinaryTree,
	    formTreeFromPreOrderTraversal,
	    findVerticalSum,
	    addingNextSiblingsUsingQueue,
	    addingNextSiblingViaRecursion,
	    rightSubTreeInorder,
	    inOrderSuccessor,
	    insertBSTWithParentWithRecurssion,
	    insertInBSTWithParentInorder,
	    InorderSuccessorUsingParent,
	    preOrderSuccessor,
	    postOrderSuccessor,
	    expressionTree,
	    findElementInBSTRecurssion,
	    findElementInBSTIterative,
	    findMinInBSTRecurssion,
	    findMinInBSTIteration,
	    maxRecursivelyInBST,
	    maxValueInBSTIteration,
	    deleteNodeFromSubTree,
	    findLCAInBST,
	    isBST,
	    BSTFromSortedArray,
	    findNodesInRange,
	    findInRangeIterative,
	    insertInAVL,
	    formFullAVL,
	    findNumberOfNodesForMinAVL,
	    isAVL,
	    deleteLeaves,
	    findTheNodeWithMinDiffFromAGivenKey,
	    findTheNodeWithMinDiffFromAGivenKeyUsingRecurssion,
	    deleteTheHalfNodes,
	    pruneTheOnesNotInRange,
	    linkNodesAtaLevelUsingRecurssion,
	    linkingNodesAtALevelUsingQueue
	   };
}
module.exports = {TreeADT}